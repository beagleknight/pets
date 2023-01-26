import { IndexPage } from "./IndexPage";
import { RootPage } from "./RootPage";
import { ShowPage } from "./ShowPage";

export const catsRoutes = [
  {
    path: "cats",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
      {
        path: ":id",
        element: <ShowPage />,
      },
    ],
  },
];
