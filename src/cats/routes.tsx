import { IndexPage } from "./IndexPage";
import { RootPage } from "./RootPage";
import { ShowPage } from "./ShowPage";
import { NewPage } from "./NewPage";
import { EditPage } from "./EditPage";

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
      {
        path: ":id/edit",
        element: <EditPage />,
      },
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
];
