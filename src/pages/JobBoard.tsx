import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Divider,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Link } from "react-router-dom";
import useJobs from "../hooks/useJobs";
import useQueryStore from "../state-management/query/store";
import Loading from "./Loading";

const JobBoard = () => {
  const { data, isLoading, error } = useJobs();
  const { query, setKeyword, setLocation } = useQueryStore();

  if (isLoading) return <Loading />;

  const availableLocations = [...new Set(data?.map((job) => job.city))];

  const filteredData = data?.filter((job: any) => {
    let matches = true;

    if (query.keyword) {
      const keywordRegex = new RegExp(`.*${query.keyword}.*`, "i");
      matches =
        matches &&
        (keywordRegex.test(job.title) || keywordRegex.test(job.city));
    }

    if (query.location) {
      matches = matches && job.city === query.location;
    }

    return matches;
  });

  return (
    <Box mt={50}>
      <Box display="grid" gridTemplateColumns="1fr 1fr" alignItems="center">
        <Heading fontSize="6em">Job Board</Heading>
        <Box display="flex" gap={5} alignItems="center" justifyContent="end">
          <Box>
            <Text>Available Locations</Text>
            <Select onChange={(e) => setLocation(e.target.value)} mt={3}>
              <option value="">All locations</option>
              {availableLocations.map((location) => (
                <option value={location}>{location}</option>
              ))}
            </Select>
          </Box>
          {/*           <Box>
            <Text>Sort by</Text>
            <Select mt={3} w="200px">
              <option value=""></option>
            </Select>
          </Box> */}
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
        {filteredData?.map((job: any) => (
          <Card color="white" bgColor="gray.700" maxW="sm">
            <Box display="flex" justifyContent="end">
              <Badge maxW="max-content">{job.date}</Badge>
            </Box>
            <CardBody>
              <Stack spacing="2">
                <Heading size="md">
                  {job.title.length > 27
                    ? job.title.slice(0, 27) + " [...]"
                    : job.title}
                </Heading>
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
              <Tooltip label={job.minimum_qualifications}>
                <Badge colorScheme="green" mt={6}>
                  Minimum Qualifications
                </Badge>
              </Tooltip>
            </CardBody>
            <Divider />
            <CardFooter
              display="grid"
              gridTemplateColumns="1fr 1fr"
              fontSize="1.5rem"
            >
              <Stack direction="row" spacing={4}>
                <Link target="_blank" to={job.url}>
                  <Button
                    leftIcon={<Icon icon="mynaui:external-link" />}
                    colorScheme="gray"
                    variant="solid"
                  >
                    URL
                  </Button>
                </Link>
                <Link target="_blank" to={`mailto:${job.email_address}`}>
                  <Button
                    leftIcon={<Icon icon="mage:email" />}
                    colorScheme="gray"
                    variant="solid"
                  >
                    Email
                  </Button>
                </Link>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default JobBoard;
