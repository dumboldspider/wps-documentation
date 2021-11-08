import { Link, Typography, TypographyProps } from "@wipsie/ui";
import classnames from "classnames";
import slugify from "slugify";
import NextLink from "next/link";
export interface LinkedTypographyProps {
  linked?: boolean;
}

const LinkedTypography: React.FC<LinkedTypographyProps & TypographyProps> = ({
  linked = true,
  ...props
}) => {
  return (
    <Typography
      className={classnames({ "linked-heading": linked })}
      data-name={props.children}
      id={slugify(props.children as string)}
      {...props}
    >
      {linked ? (
        <Link href={`#${slugify(props.children as string)}`}>
          {props.children}
        </Link>
      ) : (
        <>{props.children}</>
      )}
    </Typography>
  );
};

export default LinkedTypography;
