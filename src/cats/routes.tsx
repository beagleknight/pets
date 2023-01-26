import { IndexPage } from "./IndexPage";
import { RootPage } from "./RootPage";
import { ShowPage } from "./ShowPage";
import { NewPage } from "./NewPage";
import { EditPage } from "./EditPage";
import { ShowLayout } from "./ShowLayout";

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
        // TODO: explore loaders
        element: <ShowLayout />,
        errorElement: <p>Error!</p>,
        children: [
          {
            path: "",
            element: <ShowPage />,
          },
          {
            path: "edit",
            element: <EditPage />,
          },
        ],
      },
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
];
