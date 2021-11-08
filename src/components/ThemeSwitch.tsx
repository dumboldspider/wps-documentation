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

export default function ThemeSwitch({ currentTheme, setCurrentTheme }: any) {
  const theme = useTheme();

  return (
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
  );
}
