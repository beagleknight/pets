import { IndexPage } from "./IndexPage";
import { NewPage } from "./NewPage";
import { RootPage } from "./RootPage";
import { ShowPage } from "./ShowPage";

export const dogsRoutes = [
  {
    path: "dogs",
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
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
];
