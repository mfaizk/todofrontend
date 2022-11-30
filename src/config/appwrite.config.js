import { Client } from "appwrite";
const REACT_APP_APPWRITE_CLIENT = "http://localhost:80/v1";
const REACT_APP_APPWRITE_PROJECT_ID = "638352e0091f482a58ce";
const client = new Client()

  .setEndpoint(REACT_APP_APPWRITE_CLIENT)
  .setProject(REACT_APP_APPWRITE_PROJECT_ID);

export default client;
