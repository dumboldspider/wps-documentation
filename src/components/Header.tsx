import { useState } from "react";
import {
  Flex,
  Link,
  Accordion,
  Button,
  Box,
  Container,
  Hidden,
  Fixed,
  IconButton,
  Portal,
  useScrollBlock,
} from "@wipsie/ui";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import ThemeSwitch from "./ThemeSwitch";
import Sidebar from "./Sidebar";
import responsive from "../utils/responsive";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [locked, setLocked] = useScrollBlock();

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
    setLocked(!menuVisible);
  };

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
        <a href="https://wipsie.com" style={{ width: responsive(100, 200) }}>
          <img src="/images/wipsie-logo.svg" alt="Wipsie Logo" />
        </a>
        <Flex direction="row" align="center" justify="between">
          <ThemeSwitch />
          <Hidden xs={false} sm={true}>
            <IconButton
              size="large"
              icon={<MenuOutlined />}
              onClick={handleMenuClick}
            />
          </Hidden>
        </Flex>
      </Container>

      <Portal id="menu-portal" visible={menuVisible}>
        <Hidden xs={false} sm={true}>
          <Fixed type="fixed" style={{ width: "100vw" }}>
            <Box height="100vh" width="100%" p={0}>
              <Flex align="center" justify="between" p={2}>
                <a
                  href="https://wipsie.com"
                  style={{ width: responsive(100, 200) }}
                >
                  <img src="/images/wipsie-logo.svg" alt="Wipsie Logo" />
                </a>
                <Flex direction="row" align="center" justify="between">
                  <ThemeSwitch />
                  <IconButton
                    size="large"
                    icon={<CloseOutlined />}
                    onClick={handleMenuClick}
                  />
                </Flex>
              </Flex>
              <Sidebar />
            </Box>
          </Fixed>
        </Hidden>
      </Portal>
    </Flex>
  );
};

export default Header;
