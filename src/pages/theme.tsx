import { useState } from "react";
import Head from "next/head";
import {
  Button,
  ButtonGroup,
  Typography,
  useTheme,
  Page,
  Switch,
  Flex,
} from "@wipsie/ui";
import { Sun, Moon, Star } from "react-feather";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home({ currentTheme, setCurrentTheme }: any) {
  const theme = useTheme();

  return (
    <Page>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex align="center" justify="center" fullHeight fullWidth>
        <ButtonGroup>
          <Button
            variant={currentTheme === "light" ? "outlined" : "contained"}
            onClick={() => setCurrentTheme("light")}
          >
            <Sun />
          </Button>
          <Button
            variant={currentTheme === "dark" ? "outlined" : "contained"}
            onClick={() => setCurrentTheme("dark")}
          >
            <Moon />
          </Button>
          <Button
            variant={currentTheme === "cosmic" ? "outlined" : "contained"}
            onClick={() => {
              setCurrentTheme("cosmic");
            }}
          >
            <Star />
          </Button>
        </ButtonGroup>
      </Flex>
    </Page>
  );
}
