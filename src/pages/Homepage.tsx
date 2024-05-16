import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react";

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
            A better way to search for state jobs.
          </Heading>
          <Box display="flex" justifyContent="end">
            <Button>See Job Board</Button>
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
          <Heading fontSize="1.8rem">Filter by city, salary and more.</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            perferendis, deleniti distinctio aspernatur facere quasi dolor
            voluptatibus aperiam quod error officia fugiat itaque exercitationem
            beatae ex omnis excepturi ducimus. Doloremque?
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          gap={5}
          flexDir="column"
        >
          <Heading fontSize="1.8rem">Get important info right away.</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            perferendis, deleniti distinctio aspernatur facere quasi dolor
            voluptatibus aperiam quod error officia fugiat itaque exercitationem
            beatae ex omnis excepturi ducimus. Doloremque?
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          p={3}
          gap={5}
          flexDir="column"
        >
          <Heading fontSize="1.8rem">Better user experience.</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            perferendis, deleniti distinctio aspernatur facere quasi dolor
            voluptatibus aperiam quod error officia fugiat itaque exercitationem
            beatae ex omnis excepturi ducimus. Doloremque?
          </Text>
        </Box>
      </Box>
      <Divider />
      <Box
        h="300px"
        alignItems="center"
        justifyContent="center"
        display="grid"
        gridTemplateColumns="1fr 1fr"
      >
        <Heading>Get contact info and email them in one click!</Heading>
        <Box display="flex" justifyContent="center">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            perferendis, deleniti distinctio aspernatur facere quasi dolor
            voluptatibus aperiam quod error officia fugiat itaque exercitationem
            beatae ex omnis excepturi ducimus. Doloremque?
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Homepage;