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
            <Select mt={1}>
              <option value="">All locations</option>
            </Select>
          </Box>
          <Box>
            <Input placeholder="Search keyword..." mt={1}></Input>
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
        {loadingData.map(() => (
          <Card bgColor="gray.700" w="xs">
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
