import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
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
    <Box px={{ base: "20px", lg: "inherit" }} mt={50}>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        alignItems="center"
      >
        <Heading fontSize={{ base: "2rem", lg: "6rem" }}>Job Board</Heading>
        <Box
          display="flex"
          fontSize="0.9rem"
          gap={5}
          alignItems="center"
          justifyContent={{ base: "start", lg: "end" }}
        >
          <Box>
            <Select onChange={(e) => setLocation(e.target.value)} mt={1}>
              <option value="">All locations</option>
              {availableLocations.map((location) => (
                <option value={location}>{location}</option>
              ))}
            </Select>
          </Box>
          <Box>
            <Input
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search keyword..."
              mt={1}
            ></Input>
          </Box>
        </Box>
      </Box>
      <Box
        mt={30}
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
        justifyItems="center"
        rowGap={5}
        mb={5}
      >
        {error && <p>Error in fetching data from State Jobs NY</p>}
        {filteredData?.map((job: any) => (
          <Card bgColor="gray.700" w={{ base: "xs", lg: "sm" }}>
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

              <Box display="flex" justifyContent="space-between">
                <Tooltip label={job.minimum_qualifications}>
                  <Badge colorScheme="green" mt={6}>
                    Qualifications
                  </Badge>
                </Tooltip>
                <Tooltip label={job.notes_on_applying}>
                  <Badge colorScheme="red" mt={6}>
                    Notes on applying
                  </Badge>
                </Tooltip>
              </Box>
            </CardBody>
            <Divider />
            <CardFooter justifyContent="center">
              <Box display="flex" gap={4} alignItems="center">
                <Link target="_blank" to={job.url}>
                  <Button
                    size={{ base: "sm", lg: "md" }}
                    leftIcon={<Icon icon="mynaui:external-link" />}
                    colorScheme="gray"
                    variant="solid"
                  >
                    URL
                  </Button>
                </Link>
                <Link target="_blank" to={`mailto:${job.email_address}`}>
                  <Button
                    size={{ base: "sm", lg: "md" }}
                    leftIcon={<Icon icon="mage:email" />}
                    colorScheme="gray"
                    variant="solid"
                  >
                    Email
                  </Button>
                </Link>
                {job.telephone && (
                  <Link target="_blank" to={`tel:${job.telephone}`}>
                    <Button
                      size={{ base: "sm", lg: "md" }}
                      leftIcon={<Icon icon="mage:phone" />}
                      colorScheme="gray"
                      variant="solid"
                    >
                      Phone
                    </Button>
                  </Link>
                )}
              </Box>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default JobBoard;
