import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import {
  MdOutlinePermDeviceInformation,
  MdOutlinePersonSearch,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <Box
        h="450px"
        justifyContent="center"
        alignItems="center"
        display="grid"
        px={{ base: "20px", lg: "inherit" }}
        gridTemplateColumns={{ base: "1fr 2fr", lg: "1fr 2fr" }}
      >
        <Image
          w={{ base: "200px", lg: "500px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/New_York_State_wordmark.svg"
        />
        <Box display="flex" flexDirection="column" gap="5">
          <Heading
            textAlign="right"
            fontSize={{ base: "2rem", lg: "6rem" }}
            letterSpacing={{ base: "0", lg: "-3px" }}
          >
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
      <Box
        display="grid"
        py={5}
        px={{ base: "40px", lg: "inherit" }}
        mt={5}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
      >
        <Box display="grid" alignItems="center" gridTemplateColumns="1fr 3fr">
          <Box
            fontSize={{ base: "50px", lg: "100px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MdOutlinePersonSearch />
          </Box>
          <Box
            display={{ base: "flex", lg: "grid" }}
            flexDirection="column"
            gridTemplateRows={{ lg: "100px 150px" }}
            p={3}
          >
            <Heading
              justifySelf="center"
              fontSize={{ base: "1.6rem", lg: "1.8rem" }}
              pb={{ base: 3, lg: 0 }}
            >
              Customize Your Job Search.
            </Heading>
            <Text justifySelf="center">
              Keyword search for state jobs by city, salary range, and other
              criteria. Tailor your search to find the perfect job that meets
              your needs and preferences.
            </Text>
          </Box>
        </Box>
        <Box display="grid" alignItems="center" gridTemplateColumns="1fr 3fr">
          <Box
            fontSize={{ base: "50px", lg: "100px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MdOutlinePermDeviceInformation />
          </Box>
          <Box
            display={{ base: "flex", lg: "grid" }}
            flexDirection="column"
            gridTemplateRows={{ lg: "100px 150px" }}
            p={3}
          >
            <Heading
              justifySelf="center"
              fontSize={{ base: "1.6rem", lg: "1.8rem" }}
              pb={{ base: 3, lg: 0 }}
            >
              Access Key Information Instantly.
            </Heading>
            <Text justifySelf="center">
              Get all the important details you need about each job at a glance,
              from salary ranges to job descriptions and minimum qualifications.
            </Text>
          </Box>
        </Box>
        <Box display="grid" alignItems="center" gridTemplateColumns="1fr 3fr">
          <Box
            fontSize={{ base: "50px", lg: "100px" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <MdSupervisedUserCircle />
          </Box>
          <Box
            display={{ base: "flex", lg: "grid" }}
            flexDirection="column"
            gridTemplateRows={{ lg: "100px 150px" }}
            p={3}
          >
            <Heading
              justifySelf="center"
              fontSize={{ base: "1.6rem", lg: "1.8rem" }}
              pb={{ base: 3, lg: 0 }}
            >
              Enhanced User Experience.
            </Heading>
            <Text justifySelf="center">
              User-friendly interface makes job searching simple and enjoyable.
              Easily navigate through job listings, apply filters, and access
              detailed job descriptions seamlessly.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Homepage;
