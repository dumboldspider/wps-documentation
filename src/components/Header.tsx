import { Flex, Link, Accordion, Button, Box, Container } from "@wipsie/ui";
import ThemeSwitch from "./ThemeSwitch";

const Header = ({ currentTheme, setCurrentTheme }: any) => {
  return (
    <Flex width="100vw" align="center" justify="center" p={0}>
      <Container
        width="100%"
        display="flex"
        direction="row"
        align="center"
        justify="between"
        shape="square"
      >
        {process.env.NODE_ENV}
        <ThemeSwitch
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
      </Container>
    </Flex>
  );
};

export default Header;
