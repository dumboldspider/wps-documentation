import { FileText } from "react-feather";

type RouteConfig = {
  title: string;
  icon?: any;
  path: string;
  subroutes?: RouteConfig[];
};

const routes: RouteConfig[] = [
  {
    title: "Getting Started",
    icon: <FileText />,
    path: "/getting-started",
    subroutes: [
      {
        title: "Introduction",
        icon: <FileText />,
        path: "/introduction",
      },
    ],
  },
];

export default routes;
