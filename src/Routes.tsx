import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
//import Home from "./pages/Home1";
import NotFound from "./pages/NotFound";
import NecktipsOne from "./pages/NecktipsOne";
import KneetipsOne from "./pages/KneetipsOne";
import ShouldertipcFour from "./pages/ShouldertipsFour";
import WristtipsThree from "./pages/WristtipsThree";
import Necktips from "./pages/Necktips";
import KneetipsFour from "./pages/KneetipsFour";
import ShouldertipcOne from "./pages/ShouldertipsOne";
import WristtipsOne from "./pages/WristtipsOne";
import Generaltips from "./pages/Generaltips";
import NecktipsThree from "./pages/NecktipsThree";
import Kneetips from "./pages/Kneetips";
import ShouldertipcThree from "./pages/ShouldertipsThree";
import WristtipsTwo from "./pages/WristtipsTwo";
import NecktipsTwo from "./pages/NecktipsTwo";
import KneetipsTwo from "./pages/KneetipsTwo";
import ShouldertipcTwo from "./pages/ShouldertipsTwo";
import Wristtips from "./pages/Wristtips";
import GeneraltipcOne from "./pages/GeneraltipsOne";
import GeneraltipcThree from "./pages/GeneraltipsThree";
import GeneraltipcFour from "./pages/GeneraltipsFour";
import Tips from "./pages/Tips";
import Shouldertipc from "./pages/Shouldertips";
import Yogatrainers from "./pages/Yogatrainers";
import Coreteam from "./pages/Coreteam";
//import Yoga from "./pages/Yoga";
import Kneetips1 from "./pages/Kneetips1";
import Instructors from "./pages/Instructors";
import Ankletipc from "./pages/Ankletips";
import Shouldertipc1 from "./pages/Shouldertips1";
import GeneraltipcTwo from "./pages/GeneraltipsTwo";
import Generaltipc1 from "./pages/Generaltips1";
import Dietitians from "./pages/Dietitians";
import AnkletipcOne from "./pages/AnkletipsOne";
import Physiotherapists from "./pages/Physiotherapists";
import About from "./pages/About";
import NecktipsFour from "./pages/NecktipsFour";
import Necktipc1 from "./pages/Necktips1";
import AnkletipcTwo from "./pages/AnkletipsTwo";
import KneetipcThree from "./pages/KneetipsThree";
import Ankletips1 from "./pages/Ankletips1";
import Home1 from "./pages/Home1";
import AnkletipcThree from "./pages/AnkletipsThree";
import Wristtipc1 from "./pages/Wristtips1";
import WristtipsFour from "./pages/WristtipsFour";
import AnkletipcFour from "./pages/AnkletipsFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "necktipsone",
      element: <NecktipsOne />,
    },
    {
      path: "kneetipsone",
      element: <KneetipsOne />,
    },
    {
      path: "shouldertipsfour",
      element: <ShouldertipcFour />,
    },
    {
      path: "wristtipsthree",
      element: <WristtipsThree />,
    },
    {
      path: "necktips",
      element: <Necktips />,
    },
    {
      path: "kneetipsfour",
      element: <KneetipsFour />,
    },
    {
      path: "shouldertipsone",
      element: <ShouldertipcOne />,
    },
    {
      path: "wristtipsone",
      element: <WristtipsOne />,
    },
    {
      path: "generaltips",
      element: <Generaltips />,
    },
    {
      path: "necktipsthree",
      element: <NecktipsThree />,
    },
    {
      path: "kneetips",
      element: <Kneetips />,
    },
    {
      path: "shouldertipsthree",
      element: <ShouldertipcThree />,
    },
    {
      path: "wristtipstwo",
      element: <WristtipsTwo />,
    },
    {
      path: "necktipstwo",
      element: <NecktipsTwo />,
    },
    {
      path: "kneetipstwo",
      element: <KneetipsTwo />,
    },
    {
      path: "shouldertipstwo",
      element: <ShouldertipcTwo />,
    },
    {
      path: "wristtips",
      element: <Wristtips />,
    },
    {
      path: "generaltipsone",
      element: <GeneraltipcOne />,
    },
    {
      path: "tips",
      element: <Tips />,
    },
    {
      path: "shouldertips",
      element: <Shouldertipc />,
    },
    {
      path: "yogatrainers",
      element: <Yogatrainers />,
    },
    {
      path: "coreteam",
      element: <Coreteam />,
    },
    /*{
      path: "yoga",
      element: <Yoga />,
    },*/
    {
      path: "kneetips1",
      element: <Kneetips1 />,
    },
    {
      path: "instructors",
      element: <Instructors />,
    },
    {
      path: "ankletips",
      element: <Ankletipc />,
    },
    {
      path: "shouldertips1",
      element: <Shouldertipc1 />,
    },
    {
      path: "generaltipstwo",
      element: <GeneraltipcTwo />,
    },
    {
      path: "generaltips1",
      element: <Generaltipc1 />,
    },
    {
      path: "dietitians",
      element: <Dietitians />,
    },
    {
      path: "ankletipsone",
      element: <AnkletipcOne />,
    },
    {
      path: "physiotherapists",
      element: <Physiotherapists />,
    },
    {
      path: "generaltipsthree",
      element: <GeneraltipcThree />,
    },
    {
      path: "generaltipsfour",
      element: <GeneraltipcFour />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "necktipsfour",
      element: <NecktipsFour />,
    },
    {
      path: "necktips1",
      element: <Necktipc1 />,
    },
    {
      path: "ankletipstwo",
      element: <AnkletipcTwo />,
    },
    {
      path: "kneetipsthree",
      element: <KneetipcThree />,
    },
    
    {
      path: "ankletips1",
      element: <Ankletips1 />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "ankletipsthree",
      element: <AnkletipcThree />,
    },
    {
      path: "wristtips1",
      element: <Wristtipc1 />,
    },
    {
      path: "wristtipsfour",
      element: <WristtipsFour />,
    },
    {
      path: "ankletipsfour",
      element: <AnkletipcFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;