import axios from "axios";
// import { AsyncStorage } from "react-native";

// DEFINE API BASE URL
const API_ENDPOINT = `https://reqres.in/api/`;

// DEFINE SOCKET URL ENDPOINT
// const SOCKET_URL_ENDPOINT = `https://api.hyypp.com/`;

// const access_token = await AsyncStorage.getItem("access_token");
const authHeader = async () => {
  return {
    // Authorization: `Bearer ${access_token}`,
  };
};

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    // Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  },
});

class DataService {
  static async get(path = "") {
    return client.get(path, {
      headers: await authHeader(),
    });
  }

  static async post(path = "", data = {}, optionalHeader = {}) {
    return client.post(path, data, {
      headers: { ...(await authHeader()), ...optionalHeader },
    });
  }

  static async patch(path = "", data = {}) {
    return client.patch(path, data, {
      headers: await authHeader(),
    });
  }

  static async put(path = "", data = {}, optionalHeader = {}) {
    return client.put(path, data, {
      headers: { ...(await authHeader()), ...optionalHeader },
    });
  }

  static async delete(path = "", data = {}) {
    return client.delete(path, {
      data,
      headers: await authHeader(),
    });
  }
}

client.interceptors.request.use(async (config) => {
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = {
    ...headers,
    ...(await authHeader()),
  };

  return requestConfig;
});

client.interceptors.response.use(
  (response) => {
    if (!response.data.error) {
      return response;
    }
  },
  (error) => {
    const { response } = error;
    const originalRequest = error.response;
    if (response) {
      if (response.status === 500) {
        return originalRequest;
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  }
);

export { DataService };
