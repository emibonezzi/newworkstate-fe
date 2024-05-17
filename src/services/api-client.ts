import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

class APIClient {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getJobs = () => {
    return axiosInstance.get(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
