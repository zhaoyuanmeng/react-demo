import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Main from "../main/main";
import Day3PageOne from "@/day3/pageOne";
import Day3PageTwo from "@/day3/pageTwo";

import Day4PageOne from "@/day4/pageOne";

import Communicate from "@/communicate/props";
import Effect from "@/hooks/useEffect";
import Slot from "@/slot/slot";

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
        {
          path: "communicate",
          element: <Communicate></Communicate>,
        },
        {
          path: "effect",
          element: <Effect></Effect>,
        },
        {
          path: "slot",
          element: <Slot></Slot>,
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
