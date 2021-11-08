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
    <Page>
      <Head {...meta} />

      <Header />

      <Flex mt={5}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Fixed type="sticky" position="top">
              <Hidden>
                <Box m={0} backgroundColor="primary">
                  <Sidebar />
                </Box>
              </Hidden>
            </Fixed>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box m={0} minHeight="100vh" backgroundColor="secondary">
              {children}
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Fixed type="sticky" position="top">
              <Hidden>
                <Box m={0} backgroundColor="success">
                  <ContentTable headings={headings} />
                </Box>
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
