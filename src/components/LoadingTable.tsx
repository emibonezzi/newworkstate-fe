import {
  Heading,
  Select,
  Box,
  Text,
  Input,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Spinner,
} from "@chakra-ui/react";

const LoadingTable = () => {
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
            <Input placeholder="Search keyword..." mt={3} w="200px"></Input>
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
                <Th isNumeric>Salary</Th>
                <Th>Employement Type</Th>
                <Th>City</Th>
                <Th isNumeric>Vacancy ID</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Spinner />
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default LoadingTable;
