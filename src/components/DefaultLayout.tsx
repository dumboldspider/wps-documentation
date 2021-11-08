/* eslint-disable react/display-name */
import { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  Spacing,
  useTheme,
  Page,
  Switch,
  Flex,
  Fixed,
  Box,
  Container,
  Link,
  Hidden,
  Grid,
} from "@wipsie/ui";
import Head from "./Head";
import ContentTable from "./ContentTable";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

import { getHeadings, Heading } from "../hooks/getHeadings";

function DocsLayout({
  meta,
  routes,
  currentTheme,
  setCurrentTheme,
  children,
}: any) {
  const theme = useTheme();

  // GET HEADINGS START
  const [headings, setHeadings] = useState<Heading[]>([]);
  useEffect(() => {
    setHeadings(getHeadings());
  }, [routes]);
  // GET HEADINGS END

  return (
    <Page backgroundColor="shade">
      <Head {...meta} />

      <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

      <Flex mt={{ xs: -1, md: 2 }} p={2}>
        <Grid container>
          <Grid item xs={12} sm={2.5}>
            <Fixed type="sticky" position="top">
              <Hidden xs={true} md={false}>
                <Container
                  m={0}
                  p={0}
                  pb={2}
                  style={{ overflow: "hidden" }}
                  minHeight="100vh"
                  // backgroundColor="transparent"
                >
                  <Sidebar />
                </Container>
              </Hidden>
            </Fixed>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Container m={0} minHeight="100vh">
              {children}
            </Container>
          </Grid>
          <Grid item xs={12} sm={2.5}>
            <Fixed type="sticky" position="top">
              <Hidden xs={true} md={false}>
                <Container m={0}>
                  <ContentTable headings={headings} />
                </Container>
              </Hidden>
            </Fixed>
          </Grid>
        </Grid>
      </Flex>

      <Footer />
    </Page>
  );
}

export default DocsLayout;
