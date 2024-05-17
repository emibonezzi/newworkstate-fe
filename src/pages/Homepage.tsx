import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <Box
        h="450px"
        justifyContent="center"
        alignItems="center"
        display="grid"
        gridTemplateColumns="1fr 2fr"
      >
        <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ec/New_York_State_wordmark.svg" />
        <Box display="flex" flexDirection="column" gap="5">
          <Heading textAlign="right" fontSize="6rem" letterSpacing="-3px">
            Discover Your Next State Job with Ease.
          </Heading>
          <Box display="flex" justifyContent="end">
            <Link to="/jobs">
              <Button>Explore Job Listings</Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box h="500px" display="grid" gridTemplateColumns="1fr 1fr 1fr">
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          gap={5}
          flexDir="column"
        >
          <Heading fontSize="1.8rem">Customize Your Job Search.</Heading>
          <Text>
            Use our advanced filters to search for state jobs by city, salary
            range, and other criteria. Tailor your search to find the perfect
            job that meets your needs and preferences.
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          gap={5}
          flexDir="column"
        >
          <Heading fontSize="1.8rem">Access Key Information Instantly.</Heading>
          <Text>
            Get all the important details you need about each job at a glance.
            From salary ranges to job descriptions, our platform ensures you
            have all the information necessary to make informed decisions
            quickly.
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          gap={5}
          flexDir="column"
        >
          <Heading fontSize="1.8rem">Enhanced User Experience.</Heading>
          <Text>
            Our user-friendly interface makes job searching simple and
            enjoyable. Easily navigate through job listings, apply filters, and
            access detailed job descriptions seamlessly.
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Homepage;
