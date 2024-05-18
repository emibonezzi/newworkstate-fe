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
} from "@chakra-ui/react";

const Loading = () => {
  const loadingData = Array.from({ length: 9 }, (_, index) => index);

  return (
    <Box px={{ base: "20px", lg: "inherit" }} mt={50}>
      <Box display="grid" gridTemplateColumns="1fr" alignItems="center">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading fontSize={{ base: "2rem", lg: "6rem" }}>Job Board</Heading>
          <Box>
            <Input
              disabled={true}
              maxW="150px"
              placeholder="Search keyword..."
              mt={1}
            ></Input>
          </Box>
        </Box>
        <Box
          display="grid"
          fontSize="0.9rem"
          mt={3}
          gap={5}
          alignItems="center"
          justifyContent="end"
          gridTemplateColumns={{ base: "1fr 1fr", lg: "200px 200px" }}
        >
          <Box>
            <Select disabled={true} mt={1}>
              <option value="">All locations</option>
            </Select>
          </Box>
          <Box>
            <Select disabled={true} mt={1}>
              <option value="">All categories</option>
            </Select>
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
