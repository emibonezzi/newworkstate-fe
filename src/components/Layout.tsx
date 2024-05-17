import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Box
            display="grid"
            alignItems="center"
            gridTemplateColumns="repeat(2, 1fr)"
          >
            <Heading letterSpacing="-1.8px" justifySelf="start">
              <Link to="/">New Work State</Link>
            </Heading>
            <ul>
              <Box
                display="flex"
                gap="5"
                justifyContent="end"
                listStyleType="none"
              >
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/jobs">
                  <li>Job Board</li>
                </Link>
              </Box>
            </ul>
          </Box>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Divider />
      <footer>
        <Box
          h="150px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text>
            A project by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://emilianobonezzi.com/"
            >
              <Text display="inline" textDecoration="underline">
                Emiliano Bonezzi.
              </Text>
            </a>
          </Text>
        </Box>
      </footer>
    </>
  );
};

export default Layout;
