import { Flex, Link, Accordion, Button, useTheme } from "@wipsie/ui";
import routes from "../config/routes";
import NextLink from "next/link";

const Sidebar = () => {
  return (
    <Flex>
      {routes.map((route: any) => {
        return <Menuitem {...route} />;
      })}
    </Flex>
  );
};

export default Sidebar;

const Menuitem = ({ label, path, icon, subitems }) => {
  const theme = useTheme();
  if (subitems) {
    return (
      <>
        <Accordion
          size="large"
          shape="square"
          backgroundColor="transparent"
          labelColor="primary"
          labelBackgroundColor={theme.palette.basic[300]}
          labelActiveBackgroundColor={theme.palette.basic[500]}
          labelStyle={{ paddingLeft: 10 }}
          contentStyle={{ padding: 0 }}
          panels={[
            {
              icon,
              label: label,
              content: (
                <>
                  {subitems.map((subitem) => {
                    return <Menuitem {...subitem} />;
                  })}
                </>
              ),
            },
          ]}
        />
        {subitems.map((subitem) => {
          <Menuitem {...subitem} />;
        })}
      </>
    );
  } else {
    return (
      <NextLink href={path}>
        <Button
          size="medium"
          fullWidth
          shape="square"
          align="left"
          variant="ghost"
          label={label}
          startIcon={icon}
          backgroundColor={theme.palette.text}
          style={{ fontWeight: 500 }}
        />
      </NextLink>
    );
  }
};
