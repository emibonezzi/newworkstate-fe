import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Input,
  Select,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

const Loading = () => {
  const loadingData = Array.from({ length: 9 }, (_, index) => index);

  return (
    <Box mt={50}>
      <Box display="grid" gridTemplateColumns="1fr 1fr" alignItems="center">
        <Heading fontSize="6em">Job Board</Heading>
        <Box display="flex" gap={5} alignItems="center" justifyContent="end">
          <Box>
            <Text>Available Locations</Text>
            <Select disabled={true}></Select>
          </Box>
          {/*           <Box>
            <Text>Sort by</Text>
            <Select mt={3} w="200px">
              <option value=""></option>
            </Select>
          </Box> */}
          <Box>
            <Text>Search</Text>
            <Input placeholder="Search keyword..." mt={3} w="200px"></Input>
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
        {loadingData.map(() => (
          <Card bgColor="gray.700" w="sm">
            <Box display="flex" justifyContent="end">
              <Skeleton h="20px" />
            </Box>
            <CardBody>
              <Stack mt="6" spacing="4">
                <Skeleton h="50px"></Skeleton>
                <Skeleton h="20px" />
                <Skeleton h="20px" />
                <Skeleton h="20px" />
                <Skeleton h="20px" />
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter
              display="grid"
              justifyItems="center"
              gridTemplateColumns="1fr 1fr"
              fontSize="1.5rem"
            >
              <Skeleton />
              <Skeleton />
            </CardFooter>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Loading;
