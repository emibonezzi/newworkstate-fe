import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient("/jobs");

const useJobs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => apiClient.getJobs(),
    staleTime: ms("24h"),
  });

  return { data, isLoading, error };
};

export default useJobs;