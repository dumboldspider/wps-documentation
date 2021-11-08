/* eslint-disable react/display-name */
import { useState } from "react";
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
import { useRouter } from "next/router";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import Head from "../components/Head";
import LinkedTypography from "../components/LinkedTypography";
import ContentTable from "../components/ContentTable";
import DefaultLayout from "../components/DefaultLayout";
import customComponents from "../config/customMdxComponents";

// MDX plugins
import remarkAutolink from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import rehypePrism from "@mapbox/rehype-prism";

// END MDX plugins

export default function Home({
  currentTheme,
  setCurrentTheme,
  folderItems,
  file,
  source,
  meta,
  currentPath,
  currentFile,
}: any) {
  const theme = useTheme();

  return (
    <DefaultLayout meta={meta} routes={folderItems}>
      {source && <MDXRemote {...source} components={customComponents} />}
    </DefaultLayout>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  let currentFile = slug[slug.length - 1];
  const currentPath =
    typeof slug !== "string" ? slug.join("/").replace(currentFile, "") : slug;

  console.log(slug, "currentPath" + currentPath, "currentFile" + currentFile);

  let items = [];

  try {
    items = fs.readdirSync("content/" + currentPath).filter((mdFile) => {
      return (
        mdFile.split(".").pop() === "md" || mdFile.split(".").pop() === "mdx"
      );
    });

    var existingFile = false;
    items.map((item) => {
      console.log(item, item.split(".")[0] === currentFile, currentFile);

      if (item.split(".")[0] === currentFile && !existingFile) {
        currentFile = item;
        existingFile = true;
      }
    });
  } catch (e) {
    console.log("failed");

    return {
      redirect: {
        destination: "/getting-started",
        permanent: false,
      },
    };
  }

  if (existingFile) {
    const rawFile = fs.readFileSync("content/" + currentPath + currentFile, {
      encoding: "utf8",
    });

    const { content, data } = matter(rawFile);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkAutolink as any, remarkSlug],
        rehypePlugins: [rehypePrism],
      },
    });

    return {
      props: {
        folderItems: items,
        file: JSON.stringify(rawFile),
        source: mdxSource,
        meta: data,
        currentPath,
        currentFile,
      },
    };
  }

  return {
    redirect: {
      destination: "/getting-started",
      permanent: false,
    },
  };
};
