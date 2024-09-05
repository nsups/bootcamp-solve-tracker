import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Season from "./routes/Season";

const router = createBrowserRouter([
    {
        path: "/:seasonId",
        element: <Season />,
    }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App;
