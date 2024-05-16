import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://30j9tnasc6.execute-api.us-east-1.amazonaws.com",
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
