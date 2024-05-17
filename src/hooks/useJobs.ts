import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient("/dev/jobs");

const useJobs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => apiClient.getJobs(),
    staleTime: ms("24h"),
    refetchOnMount: false,
  });

  return { data, isLoading, error };
};

export default useJobs;
