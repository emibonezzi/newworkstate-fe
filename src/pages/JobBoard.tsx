import {
  Box,
  Heading,
  Input,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import LoadingTable from "../components/LoadingTable";
import useJobs from "../hooks/useJobs";
import useQueryStore from "../state-management/query/store";

const JobBoard = () => {
  const { data, isLoading, error } = useJobs();
  const { query, setKeyword } = useQueryStore();

  if (isLoading) return <LoadingTable />;

  const filteredData = query.keyword
    ? data.filter((job: any) => {
        const regex = new RegExp(`.*${query.keyword}.*`, "i");
        if (regex.test(job.title) || regex.test(job.city)) {
          return job;
        }
      })
    : data;

  return (
    <Box mt={50}>
      <Box display="grid" gridTemplateColumns="1fr 1fr" alignItems="center">
        <Heading fontSize="6em">Job Board</Heading>
        <Box display="flex" gap={5} justifyContent="end">
          <Box>
            <Text>Sort by</Text>
            <Select mt={3} w="200px">
              <option value=""></option>
            </Select>
          </Box>
          <Box>
            <Text>Search</Text>
            <Input
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search keyword..."
              mt={3}
              w="200px"
            ></Input>
          </Box>
        </Box>
      </Box>
      <Box mt={30} h="100dvh" border="1px" overflowY="scroll">
        <TableContainer p={5}>
          <Table variant="unstyled">
            <TableCaption>Last 100 entries on NY State Jobs</TableCaption>
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Title</Th>
                <Th isNumeric>Salary Low</Th>
                <Th isNumeric>Salary High</Th>
                <Th isNumeric>Salary Type</Th>
                <Th>Type</Th>
                <Th>City</Th>
                <Th isNumeric>Vacancy ID</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((job: any) => (
                <Tr>
                  <Td>{job.date}</Td>
                  <Td>
                    {job.title.length > 20
                      ? job.title.slice(0, 20) + "..."
                      : job.title}
                  </Td>
                  <Td isNumeric>${job.salary_range.low}</Td>
                  <Td isNumeric>${job.salary_range.high}</Td>
                  <Td>{job.salary_range.type}</Td>
                  <Td>{job.employment_type}</Td>
                  <Td>{job.city}</Td>
                  <Td isNumeric>{job.vacancy_id}</Td>
                  <Td isNumeric>
                    <a href={`mailto:${job.email_address}`}>
                      <Icon
                        fontSize="30px"
                        icon="icon-park-outline:send-email"
                      />
                    </a>{" "}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default JobBoard;
