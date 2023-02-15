import { Client, Account, Databases } from 'appwrite';

const baseUrl = `http://localhost/v1`;
const projectId = `aaaa`;
const client = new Client();
client.setEndpoint(baseUrl).setProject(projectId);

const account = new Account(client);
const databases = new Databases(client);

export { account, databases };
