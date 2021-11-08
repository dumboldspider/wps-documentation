import { useState, useEffect } from "react";
import { Link, Flex } from "@wipsie/ui";
import { getHeadings, Heading } from "../hooks/getHeadings";
import { useScrollSpy } from "../hooks/useScrollSpy";
import classnames from "classnames";

const ContentTable = (props) => {
  const { headings } = props;

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
              className={classnames({
                "active-link": activeId === heading.id,
              })}
            >
              {heading.text}
            </Link>
          </>
        );
      })}
    </Flex>
  );
};

export default ContentTable;
