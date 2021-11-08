/* eslint-disable react/display-name */
import { useTheme } from "@wipsie/ui";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import DefaultLayout from "../components/DefaultLayout";
import customComponents from "../config/customMdxComponents";
import { isProd } from "../config";
import { fetchRawDoc } from "../utils/githubWorker";

// MDX plugins
import remarkAutolink from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import rehypePrism from "@mapbox/rehype-prism";
// END MDX plugins

export default function Home({
  currentTheme,
  setCurrentTheme,
  folderItems,
  source,
  meta,
  currentPath,
  currentFile,
}: any) {
  const theme = useTheme();

  return (
    <DefaultLayout
      meta={meta}
      routes={folderItems}
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      {source && <MDXRemote {...source} components={customComponents} />}
    </DefaultLayout>
  );
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  let currentFile = slug[slug.length - 1];
  const currentPath =
    typeof slug !== "string" ? slug.join("/").replace(currentFile, "") : slug;

  let items = [];

  if (isProd) {
    let rawMD = null,
      rawMDX = null;

    try {
      rawMD = await fetchRawDoc(currentPath, currentFile + ".md");
    } catch (e) {
      console.log(e);
    }

    try {
      rawMDX = await fetchRawDoc(currentPath, currentFile + ".mdx");
    } catch (e) {
      console.log(e);
    }

    console.log(rawMD, rawMDX);
    if (!rawMD && !rawMDX) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    let meta, doc;
    const { content, data } = matter(rawMD || rawMDX);
    doc = content.toString();
    meta = data;

    const mdxSource = await serialize(doc, {
      mdxOptions: {
        remarkPlugins: [remarkAutolink as any, remarkSlug],
        rehypePlugins: [rehypePrism],
      },
    });

    return {
      props: {
        folderItems: items,
        source: mdxSource,
        meta,
        currentPath,
        currentFile,
      },
    };
  } else {
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
      console.log("failed: ", e);

      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    if (existingFile) {
      let meta, doc;

      const rawFile = fs.readFileSync("content/" + currentPath + currentFile, {
        encoding: "utf8",
      });

      const { content, data } = matter(rawFile);
      doc = content.toString();
      meta = data;

      const mdxSource = await serialize(doc, {
        mdxOptions: {
          remarkPlugins: [remarkAutolink as any, remarkSlug],
          rehypePlugins: [rehypePrism],
        },
      });

      return {
        props: {
          folderItems: items,
          source: mdxSource,
          meta,
          currentPath,
          currentFile,
        },
      };
    }

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
