import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Main from "../day3/main";
import PageOne from "../day4/pageOne";
import PageTwo from "../day3/pageTwo";
const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "pageOne",
          element: <PageOne></PageOne>,
        },
        {
          path: "pageTwo",
          element: <PageTwo></PageTwo>,
        },
      ],
    },
  ]);
  return routes;
};

const SetRoutes = () => {
  return (
    <Router>
      <GetRoutes />
    </Router>
  );
};

export default SetRoutes;
