import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Input,
  Select,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Link } from "react-router-dom";
import useJobs from "../hooks/useJobs";
import useQueryStore from "../state-management/query/store";

const JobBoard = () => {
  const { data, isLoading, error } = useJobs();
  const { query, setKeyword } = useQueryStore();

  if (isLoading) return <Spinner />;

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
      <Box
        mt={30}
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        justifyItems="center"
        rowGap={5}
        mb={5}
      >
        {error && <p>Error in fetching data from State Jobs NY</p>}
        {filteredData.map((job: any) => (
          <Card maxW="sm">
            <Box display="flex" justifyContent="end">
              <Badge maxW="max-content">{job.date}</Badge>
            </Box>
            <CardBody>
              <Stack mt="6" spacing="2">
                <Heading size="md">{job.title}</Heading>
                <Text>{job.agency}</Text>
                <Text opacity="0.5">{job.city}</Text>
                <Text fontSize="0.9rem" opacity="0.5">
                  ${job.salary_range.low} - ${job.salary_range.high}
                </Text>
                <Text>
                  {job.duties_description && job.duties_description.length > 200
                    ? job.duties_description.slice(0, 200) + "..."
                    : job.duties_description}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter
              display="grid"
              justifyItems="center"
              gridTemplateColumns="1fr 1fr"
              fontSize="1.5rem"
            >
              <Link target="_blank" to={job.url}>
                <Icon icon="mynaui:external-link" />
              </Link>
              <Link target="_blank" to={`mailto:${job.email_address}`}>
                <Icon icon="mage:email" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default JobBoard;
