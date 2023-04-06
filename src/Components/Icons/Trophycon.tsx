import React from 'react';
import { IconSvgProps } from '@/entities/icon.interface';
import { colors, metrics } from '@/styles';
import { SvgXml } from 'react-native-svg';

const TrophyIcon: React.FC<IconSvgProps> = props => {
  const {
    color = colors.black,
    size = metrics.moderateScale(20),
    isFocused,
    scale,
  } = props;

  const svgMarkup = `
    <svg width=${
      metrics.moderateScale(2) + size
    } height=${size} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
     ${
       isFocused
         ? `
     <path d="M4.99986 8C4.99986 6.55834 4.99986 5.675 5.11358 5C5.14668 4.80353 5.18941 4.62471 5.24458 4.45492C5.73917 2.93273 6.93259 1.73931 8.45478 1.24472C9.20794 1 10.1386 1 11.9999 1C13.8611 1 14.7918 1 15.5449 1.24472C17.0671 1.73931 18.2606 2.93273 18.7551 4.45492C18.8103 4.62471 18.853 4.80353 18.8861 5C18.9999 5.675 18.9999 6.55834 18.9999 8V9.3004C18.9999 10.9037 18.9999 11.8042 18.7561 12.6074C18.7218 12.7204 18.6827 12.8314 18.6381 12.9422C18.4195 13.4851 17.9755 14.1631 17.5652 14.5804C16.8861 15.2711 16.2015 15.5696 14.8323 16.1666C13.7497 16.6385 12.6941 17 11.9999 17C11.3056 17 10.25 16.6385 9.16743 16.1666C7.79823 15.5696 7.11363 15.2711 6.4345 14.5804C6.02419 14.1631 5.58019 13.4851 5.36163 12.9422C5.31568 12.8281 5.27558 12.7137 5.24056 12.5973C4.99986 11.7966 4.99986 10.897 4.99986 9.3004V8Z" fill=${color}/>
<path d="M5.36163 12.9422L6.05736 12.6621L6.05736 12.6621L5.36163 12.9422ZM9.16743 16.1666L8.86769 16.8541L8.86769 16.8541L9.16743 16.1666ZM6.4345 14.5804L6.9693 14.0546L6.4345 14.5804ZM18.6381 12.9422L17.9424 12.6621L18.6381 12.9422ZM14.8323 16.1666L15.132 16.8541L14.8323 16.1666ZM17.5652 14.5804L18.1 15.1062L18.1 15.1062L17.5652 14.5804ZM18.7551 4.45492L18.0419 4.68668L18.7551 4.45492ZM15.5449 1.24472L15.3132 1.95801L15.5449 1.24472ZM5.24458 4.45492L5.95787 4.68668L5.24458 4.45492ZM8.45478 1.24472L8.68654 1.95801L8.45478 1.24472ZM2.3324 10.6072L1.87681 11.203L1.88746 11.2111L1.89839 11.2189L2.3324 10.6072ZM21.6675 10.6072L22.1015 11.2189L22.1124 11.2111L22.1231 11.203L21.6675 10.6072ZM11.2499 21C11.2499 21.4142 11.5856 21.75 11.9999 21.75C12.4141 21.75 12.7499 21.4142 12.7499 21H11.2499ZM15.9999 21.75C16.4141 21.75 16.7499 21.4142 16.7499 21C16.7499 20.5858 16.4141 20.25 15.9999 20.25V21.75ZM7.99986 20.25C7.58565 20.25 7.24986 20.5858 7.24986 21C7.24986 21.4142 7.58565 21.75 7.99986 21.75V20.25ZM4.95939 13.2926C5.34339 13.4479 5.78058 13.2625 5.93586 12.8785C6.09115 12.4944 5.90574 12.0573 5.52173 11.902L4.95939 13.2926ZM18.4537 11.9211C18.0747 12.0881 17.9028 12.5307 18.0698 12.9098C18.2368 13.2888 18.6794 13.4607 19.0585 13.2937L18.4537 11.9211ZM18.8861 5L18.1466 5.12459L18.8861 5ZM19.2171 12.3459L19.6511 12.9575L19.2171 12.3459ZM18.7561 12.6074L18.4537 11.9211L18.1385 12.06L18.0384 12.3896L18.7561 12.6074ZM4.78837 12.3498L4.35437 12.9615L4.78837 12.3498ZM18.2499 8V9.3004H19.7499V8H18.2499ZM5.74986 9.3004V8H4.24986V9.3004H5.74986ZM14.5326 15.4791C14.0064 15.7085 13.4998 15.9052 13.0501 16.0434C12.5895 16.1849 12.2359 16.25 11.9999 16.25V17.75C12.458 17.75 12.9794 17.6343 13.4908 17.4772C14.0131 17.3167 14.5757 17.0966 15.132 16.8541L14.5326 15.4791ZM11.9999 16.25C11.7638 16.25 11.4103 16.1849 10.9496 16.0434C10.4999 15.9052 9.99337 15.7085 9.46717 15.4791L8.86769 16.8541C9.42404 17.0966 9.98661 17.3167 10.509 17.4772C11.0203 17.6343 11.5417 17.75 11.9999 17.75V16.25ZM9.46717 15.4791C8.07071 14.8702 7.52878 14.6236 6.9693 14.0546L5.89969 15.1062C6.69849 15.9187 7.52575 16.269 8.86769 16.8541L9.46717 15.4791ZM4.66589 13.2223C4.92137 13.8569 5.42007 14.6184 5.89969 15.1062L6.9693 14.0546C6.62831 13.7078 6.239 13.1133 6.05736 12.6621L4.66589 13.2223ZM15.132 16.8541C16.474 16.269 17.3012 15.9187 18.1 15.1062L17.0304 14.0546C16.471 14.6236 15.929 14.8702 14.5326 15.4791L15.132 16.8541ZM17.9424 12.6621C17.7607 13.1133 17.3714 13.7078 17.0304 14.0546L18.1 15.1062C18.5797 14.6184 19.0784 13.8569 19.3338 13.2223L17.9424 12.6621ZM11.9999 1.75C13.9195 1.75 14.7015 1.75925 15.3132 1.95801L15.7767 0.531425C14.8821 0.240747 13.8028 0.25 11.9999 0.25V1.75ZM19.4684 4.22315C18.8997 2.47263 17.5272 1.1002 15.7767 0.531425L15.3132 1.95801C16.607 2.37841 17.6215 3.39282 18.0419 4.68668L19.4684 4.22315ZM11.9999 0.25C10.197 0.25 9.11763 0.240747 8.22301 0.531425L8.68654 1.95801C9.29825 1.75925 10.0802 1.75 11.9999 1.75V0.25ZM5.95787 4.68668C6.37827 3.39282 7.39268 2.37841 8.68654 1.95801L8.22301 0.531425C6.4725 1.1002 5.10007 2.47263 4.53129 4.22315L5.95787 4.68668ZM5.22238 11.7382L2.7664 9.99556L1.89839 11.2189L4.35437 12.9615L5.22238 11.7382ZM2.78799 10.0115C0.983911 8.63188 1.95952 5.75 4.23063 5.75V4.25C0.525091 4.25 -1.06671 8.95207 1.87681 11.203L2.78799 10.0115ZM4.23063 5.75H5V4.25H4.23063V5.75ZM19.6511 12.9575L22.1015 11.2189L21.2335 9.99556L18.7831 11.7342L19.6511 12.9575ZM22.1231 11.203C25.0666 8.95207 23.4748 4.25 19.7692 4.25V5.75C22.0403 5.75 23.016 8.63188 21.2119 10.0115L22.1231 11.203ZM19.7692 4.25H18.9999V5.75H19.7692V4.25ZM11.2499 17V21H12.7499V17H11.2499ZM15.9999 20.25H7.99986V21.75H15.9999V20.25ZM5.74986 8C5.74986 6.52815 5.75248 5.7222 5.85316 5.1246L4.374 4.8754C4.24725 5.6278 4.24986 6.58853 4.24986 8H5.74986ZM5.85316 5.1246C5.881 4.95935 5.91558 4.81685 5.95787 4.68668L4.53129 4.22315C4.46324 4.43257 4.41236 4.64772 4.374 4.8754L5.85316 5.1246ZM5 5.75H5.11358V4.25H5V5.75ZM4.24986 9.3004C4.24986 10.8535 4.24256 11.8826 4.52232 12.8132L5.95881 12.3814C5.75717 11.7106 5.74986 10.9404 5.74986 9.3004H4.24986ZM4.52232 12.8132C4.56388 12.9515 4.61151 13.0872 4.66589 13.2223L6.05736 12.6621C6.01986 12.569 5.98727 12.476 5.95881 12.3814L4.52232 12.8132ZM18.2499 9.3004C18.2499 10.9475 18.2424 11.7174 18.0384 12.3896L19.4738 12.8252C19.7573 11.891 19.7499 10.8599 19.7499 9.3004H18.2499ZM18.0384 12.3896C18.0106 12.4814 17.9788 12.5717 17.9424 12.6621L19.3338 13.2223C19.3866 13.0912 19.4331 12.9593 19.4738 12.8252L18.0384 12.3896ZM19.7499 8C19.7499 6.58853 19.7525 5.6278 19.6257 4.87541L18.1466 5.12459C18.2472 5.7222 18.2499 6.52815 18.2499 8H19.7499ZM19.6257 4.87541C19.5874 4.64771 19.5365 4.43257 19.4684 4.22315L18.0419 4.68668C18.0841 4.81685 18.1187 4.95935 18.1466 5.12459L19.6257 4.87541ZM18.9999 4.25H18.8861V5.75H18.9999V4.25ZM18.7831 11.7342C18.6799 11.8074 18.5695 11.87 18.4537 11.9211L19.0585 13.2937C19.2669 13.2019 19.4654 13.0893 19.6511 12.9575L18.7831 11.7342ZM4.35437 12.9615C4.5425 13.095 4.74554 13.2061 4.95939 13.2926L5.52173 11.902C5.41592 11.8592 5.31546 11.8042 5.22238 11.7382L4.35437 12.9615Z" fill=${color}/>
     `
         : `<path d="M5.36163 12.9422L6.05736 12.6621L6.05736 12.6621L5.36163 12.9422ZM9.16743 16.1666L8.86769 16.8541L8.86769 16.8541L9.16743 16.1666ZM6.4345 14.5804L6.9693 14.0546L6.4345 14.5804ZM18.6381 12.9422L17.9424 12.6621L18.6381 12.9422ZM14.8323 16.1666L15.132 16.8541L14.8323 16.1666ZM17.5652 14.5804L18.1 15.1062L18.1 15.1062L17.5652 14.5804ZM18.7551 4.45492L18.0419 4.68668L18.7551 4.45492ZM15.5449 1.24472L15.3132 1.95801L15.5449 1.24472ZM5.24458 4.45492L5.95787 4.68668L5.24458 4.45492ZM8.45478 1.24472L8.68654 1.95801L8.45478 1.24472ZM2.3324 10.6072L1.87681 11.203L1.88746 11.2111L1.89839 11.2189L2.3324 10.6072ZM21.6675 10.6072L22.1015 11.2189L22.1124 11.2111L22.1231 11.203L21.6675 10.6072ZM11.2499 21C11.2499 21.4142 11.5856 21.75 11.9999 21.75C12.4141 21.75 12.7499 21.4142 12.7499 21H11.2499ZM15.9999 21.75C16.4141 21.75 16.7499 21.4142 16.7499 21C16.7499 20.5858 16.4141 20.25 15.9999 20.25V21.75ZM7.99986 20.25C7.58565 20.25 7.24986 20.5858 7.24986 21C7.24986 21.4142 7.58565 21.75 7.99986 21.75V20.25ZM4.95939 13.2926C5.34339 13.4479 5.78058 13.2625 5.93586 12.8785C6.09115 12.4944 5.90574 12.0573 5.52173 11.902L4.95939 13.2926ZM18.4537 11.9211C18.0747 12.0881 17.9028 12.5307 18.0698 12.9098C18.2368 13.2888 18.6794 13.4607 19.0585 13.2937L18.4537 11.9211ZM18.8861 5L18.1466 5.12459L18.8861 5ZM19.2171 12.3459L19.6511 12.9575L19.2171 12.3459ZM18.7561 12.6074L18.4537 11.9211L18.1385 12.06L18.0384 12.3896L18.7561 12.6074ZM4.78837 12.3498L4.35437 12.9615L4.78837 12.3498ZM18.2499 8V9.3004H19.7499V8H18.2499ZM5.74986 9.3004V8H4.24986V9.3004H5.74986ZM14.5326 15.4791C14.0064 15.7085 13.4998 15.9052 13.0501 16.0434C12.5895 16.1849 12.2359 16.25 11.9999 16.25V17.75C12.458 17.75 12.9794 17.6343 13.4908 17.4772C14.0131 17.3167 14.5757 17.0966 15.132 16.8541L14.5326 15.4791ZM11.9999 16.25C11.7638 16.25 11.4103 16.1849 10.9496 16.0434C10.4999 15.9052 9.99337 15.7085 9.46717 15.4791L8.86769 16.8541C9.42404 17.0966 9.98661 17.3167 10.509 17.4772C11.0203 17.6343 11.5417 17.75 11.9999 17.75V16.25ZM9.46717 15.4791C8.07071 14.8702 7.52878 14.6236 6.9693 14.0546L5.89969 15.1062C6.69849 15.9187 7.52575 16.269 8.86769 16.8541L9.46717 15.4791ZM4.66589 13.2223C4.92137 13.8569 5.42007 14.6184 5.89969 15.1062L6.9693 14.0546C6.62831 13.7078 6.239 13.1133 6.05736 12.6621L4.66589 13.2223ZM15.132 16.8541C16.474 16.269 17.3012 15.9187 18.1 15.1062L17.0304 14.0546C16.471 14.6236 15.929 14.8702 14.5326 15.4791L15.132 16.8541ZM17.9424 12.6621C17.7607 13.1133 17.3714 13.7078 17.0304 14.0546L18.1 15.1062C18.5797 14.6184 19.0784 13.8569 19.3338 13.2223L17.9424 12.6621ZM11.9999 1.75C13.9195 1.75 14.7015 1.75925 15.3132 1.95801L15.7767 0.531425C14.8821 0.240747 13.8028 0.25 11.9999 0.25V1.75ZM19.4684 4.22315C18.8997 2.47263 17.5272 1.1002 15.7767 0.531425L15.3132 1.95801C16.607 2.37841 17.6215 3.39282 18.0419 4.68668L19.4684 4.22315ZM11.9999 0.25C10.197 0.25 9.11763 0.240747 8.22301 0.531425L8.68654 1.95801C9.29825 1.75925 10.0802 1.75 11.9999 1.75V0.25ZM5.95787 4.68668C6.37827 3.39282 7.39268 2.37841 8.68654 1.95801L8.22301 0.531425C6.4725 1.1002 5.10007 2.47263 4.53129 4.22315L5.95787 4.68668ZM5.22238 11.7382L2.7664 9.99556L1.89839 11.2189L4.35437 12.9615L5.22238 11.7382ZM2.78799 10.0115C0.983911 8.63188 1.95952 5.75 4.23063 5.75V4.25C0.525091 4.25 -1.06671 8.95207 1.87681 11.203L2.78799 10.0115ZM4.23063 5.75H5V4.25H4.23063V5.75ZM19.6511 12.9575L22.1015 11.2189L21.2335 9.99556L18.7831 11.7342L19.6511 12.9575ZM22.1231 11.203C25.0666 8.95207 23.4748 4.25 19.7692 4.25V5.75C22.0403 5.75 23.016 8.63188 21.2119 10.0115L22.1231 11.203ZM19.7692 4.25H18.9999V5.75H19.7692V4.25ZM11.2499 17V21H12.7499V17H11.2499ZM15.9999 20.25H7.99986V21.75H15.9999V20.25ZM5.74986 8C5.74986 6.52815 5.75248 5.7222 5.85316 5.1246L4.374 4.8754C4.24725 5.6278 4.24986 6.58853 4.24986 8H5.74986ZM5.85316 5.1246C5.881 4.95935 5.91558 4.81685 5.95787 4.68668L4.53129 4.22315C4.46324 4.43257 4.41236 4.64772 4.374 4.8754L5.85316 5.1246ZM5 5.75H5.11358V4.25H5V5.75ZM4.24986 9.3004C4.24986 10.8535 4.24256 11.8826 4.52232 12.8132L5.95881 12.3814C5.75717 11.7106 5.74986 10.9404 5.74986 9.3004H4.24986ZM4.52232 12.8132C4.56388 12.9515 4.61151 13.0872 4.66589 13.2223L6.05736 12.6621C6.01986 12.569 5.98727 12.476 5.95881 12.3814L4.52232 12.8132ZM18.2499 9.3004C18.2499 10.9475 18.2424 11.7174 18.0384 12.3896L19.4738 12.8252C19.7573 11.891 19.7499 10.8599 19.7499 9.3004H18.2499ZM18.0384 12.3896C18.0106 12.4814 17.9788 12.5717 17.9424 12.6621L19.3338 13.2223C19.3866 13.0912 19.4331 12.9593 19.4738 12.8252L18.0384 12.3896ZM19.7499 8C19.7499 6.58853 19.7525 5.6278 19.6257 4.87541L18.1466 5.12459C18.2472 5.7222 18.2499 6.52815 18.2499 8H19.7499ZM19.6257 4.87541C19.5874 4.64771 19.5365 4.43257 19.4684 4.22315L18.0419 4.68668C18.0841 4.81685 18.1187 4.95935 18.1466 5.12459L19.6257 4.87541ZM18.9999 4.25H18.8861V5.75H18.9999V4.25ZM18.7831 11.7342C18.6799 11.8074 18.5695 11.87 18.4537 11.9211L19.0585 13.2937C19.2669 13.2019 19.4654 13.0893 19.6511 12.9575L18.7831 11.7342ZM4.35437 12.9615C4.5425 13.095 4.74554 13.2061 4.95939 13.2926L5.52173 11.902C5.41592 11.8592 5.31546 11.8042 5.22238 11.7382L4.35437 12.9615Z" fill=${color}/>`
     }
    </svg>
  `;

  return (
    <SvgXml
      xml={svgMarkup}
      style={{
        transform: [{ scale: scale || 1 }],
      }}
    />
  );
};

export default TrophyIcon;
