import { RouterProvider } from "react-router-dom";
import { router } from "./hooks/Router";
import CreateItem from "./hooks/CreateItems";

export default function App() {
  return (
    <>
      <CreateItem>
        <RouterProvider router={router}></RouterProvider>
      </CreateItem>
    </>
  );
}
