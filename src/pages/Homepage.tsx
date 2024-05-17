import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
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
        <Box display="grid" alignItems="center" gridTemplateColumns="1fr 3fr">
          <Box fontSize="100px" display="flex" alignItems="center">
            <Icon icon="lets-icons:search-alt" />
          </Box>
          <Box display="grid" gridTemplateRows="100px 150px" p={3}>
            <Heading justifySelf="center" fontSize="1.8rem">
              Customize Your Job Search.
            </Heading>
            <Text justifySelf="center">
              Use our advanced filters to search for state jobs by city, salary
              range, and other criteria. Tailor your search to find the perfect
              job that meets your needs and preferences.
            </Text>
          </Box>
        </Box>
        <Box display="grid" alignItems="center" gridTemplateColumns="1fr 3fr">
          <Box fontSize="100px" display="flex" alignItems="center">
            <Icon icon="hugeicons:job-search" />
          </Box>
          <Box display="grid" gridTemplateRows="100px 150px" p={3}>
            <Heading justifySelf="center" fontSize="1.8rem">
              Access Key Information Instantly.
            </Heading>
            <Text justifySelf="center">
              Get all the important details you need about each job at a glance.
              From salary ranges to job descriptions, our platform ensures you
              have all the information necessary to make informed decisions
              quickly.
            </Text>
          </Box>
        </Box>
        <Box display="grid" alignItems="center" gridTemplateColumns="1fr 3fr">
          <Box fontSize="100px" display="flex" alignItems="center">
            <Icon icon="tabler:ux-circle" />
          </Box>
          <Box display="grid" gridTemplateRows="100px 150px" p={3}>
            <Heading justifySelf="center" fontSize="1.8rem">
              Enhanced User Experience.
            </Heading>
            <Text justifySelf="center">
              Our user-friendly interface makes job searching simple and
              enjoyable. Easily navigate through job listings, apply filters,
              and access detailed job descriptions seamlessly.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Homepage;
