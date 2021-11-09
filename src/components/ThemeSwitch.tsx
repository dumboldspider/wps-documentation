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
  IconButton,
} from "@wipsie/ui";
import { Sun, Moon, Star } from "react-feather";
import useLocalStorage from "../hooks/useLocalStorage";
import useLocalTheme from "../hooks/theme/useTheme";

export default function ThemeSwitch(props: any) {
  const theme = useTheme();
  const { currentTheme, setCurrentTheme } = props;
  // const { setCurrentTheme, currentTheme } = useLocalTheme();
  // const [currentTheme, handleThemeChange] = useLocalStorage("_theme", "light");

  return (
    <ButtonGroup size="mini">
      <IconButton
        variant={currentTheme === "light" ? "outlined" : "contained"}
        onClick={() => setCurrentTheme("light")}
      >
        <Sun />
      </IconButton>
      <IconButton
        variant={currentTheme === "dark" ? "outlined" : "contained"}
        onClick={() => setCurrentTheme("dark")}
      >
        <Moon />
      </IconButton>
      <IconButton
        variant={currentTheme === "cosmic" ? "outlined" : "contained"}
        onClick={() => {
          setCurrentTheme("cosmic");
        }}
      >
        <Star />
      </IconButton>
    </ButtonGroup>
  );
}
