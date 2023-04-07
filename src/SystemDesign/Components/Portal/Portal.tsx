import React from 'react';
import { View } from 'react-native';

interface PortalContextValue {
  mount: (key: string, children: React.ReactNode) => void;
  unmount: (key: string) => void;
  update: (key: string, children: React.ReactNode) => void;
}

const PortalContext = React.createContext<PortalContextValue>({
  mount: () => {},
  unmount: () => {},
  update: () => {},
});

interface PortalHostProps {
  children: React.ReactNode;
}

const PortalHost: React.FC<PortalHostProps> = ({ children }) => {
  const [portals, setPortals] = React.useState<{
    [key: string]: React.ReactNode;
  }>({});

  const mount = (key: string, portalChildren: React.ReactNode) => {
    setPortals(prevPortals => ({ ...prevPortals, [key]: portalChildren }));
  };

  const unmount = (key: string) => {
    setPortals(prevPortals => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [key]: _, ...rest } = prevPortals;
      return rest;
    });
  };

  const update = (key: string, portalChildren: React.ReactNode) => {
    setPortals(prevPortals => ({ ...prevPortals, [key]: portalChildren }));
  };

  return (
    <PortalContext.Provider value={{ mount, unmount, update }}>
      {children}
      {Object.keys(portals).map(key => (
        <View key={key}>{portals[key]}</View>
      ))}
    </PortalContext.Provider>
  );
};

interface PortalProps {
  children: React.ReactNode;
}

interface PortalComponent extends React.FC<PortalProps> {
  Host: typeof PortalHost;
}

export const Portal: PortalComponent = ({ children }) => {
  const keyRef = React.useRef<string>();
  const { mount, unmount, update } = React.useContext(PortalContext);

  React.useEffect(() => {
    keyRef.current = Math.random().toString(36).slice(2);
    mount(keyRef.current, children);
    return () => {
      if (keyRef.current) {
        unmount(keyRef.current);
      }
    };
  }, [children, mount, unmount]);

  React.useEffect(() => {
    if (keyRef.current) {
      update(keyRef.current, children);
    }
  }, [children, update]);

  return null;
};

Portal.Host = PortalHost;
