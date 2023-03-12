import Home from "@pages/Home";
import TestComponents from "@pages/TestComponents";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/test-components",
    element: <TestComponents />,
    name: "Test Components",
  },
];
