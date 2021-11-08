import { Flex, Typography, Link, Accordion, Box, Container } from "@wipsie/ui";

import footer_links from "../config/footer_links";

const Footer = () => {
  return (
    <Flex width="100vw" mt={2}>
      <Container
        display="flex"
        direction={{ xs: "column", md: "row" }}
        align={{ xs: "start", md: "center" }}
        justify="between"
        shape="square"
        fullWidth
      >
        <Flex direction={{ xs: "column", md: "row" }} mb={{ xs: 2, md: 0 }}>
          {footer_links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              color="text"
              target={link.external ? "_blank" : "_self"}
              style={{ margin: 5, marginRight: "1rem" }}
            >
              {link.title}
            </Link>
          ))}
        </Flex>

        <Typography variant="body1">
          © 2021 DumbOldSpider LLC All Rights Reserved.
        </Typography>
      </Container>
    </Flex>
  );
};

export default Footer;
