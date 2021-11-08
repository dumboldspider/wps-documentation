import { useState, useEffect } from "react";
import { Link, Flex, useTheme } from "@wipsie/ui";
import { getHeadings, Heading } from "../hooks/getHeadings";
import { useScrollSpy } from "../hooks/useScrollSpy";
import classnames from "classnames";
import NextLink from "next/link";

const ContentTable = (props) => {
  const { headings } = props;
  const theme = useTheme();

  const activeId = useScrollSpy(
    headings.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: "0% 0% -80% 0%",
    }
  );

  return (
    <Flex>
      {headings.map((heading) => {
        return (
          <>
            <Link
              key={heading.id}
              href={`#${heading.id}`}
              style={{ marginBottom: 10, fontSize: 14 }}
              color={activeId === heading.id ? theme.palette.text : "primary"}
            >
              {activeId === heading.id ? "• " : ""}
              {heading.text}
            </Link>
          </>
        );
      })}
    </Flex>
  );
};

export default ContentTable;
