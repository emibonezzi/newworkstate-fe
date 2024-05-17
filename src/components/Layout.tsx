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
            justifyItems="center"
            gridTemplateColumns="repeat(3, 1fr)"
          >
            <Heading letterSpacing="-1.8px" justifySelf="start">
              <Link to="/">New Work State</Link>
            </Heading>
            <ul>
              <Box display="flex" gap="5" listStyleType="none">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
              </Box>
            </ul>
            <Text justifySelf="end">Github Repo</Text>
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
              Emiliano Bonezzi.
            </a>
          </Text>
        </Box>
      </footer>
    </>
  );
};

export default Layout;
