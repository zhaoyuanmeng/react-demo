import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Main from "../day3/main";
import Day3PageOne from "@/day3/pageOne";
import Day3PageTwo from "@/day3/pageTwo";

import Day4PageOne from "@/day4/pageOne";
const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "day3/pageOne",
          element: <Day3PageOne></Day3PageOne>,
        },
        {
          path: "day3/pageTwo",
          element: <Day3PageTwo></Day3PageTwo>,
        },
        {
          path: "day4/pageOne",
          element: <Day4PageOne></Day4PageOne>,
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
