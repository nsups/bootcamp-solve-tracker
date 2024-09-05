import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Season from "./routes/Season";

const router = createBrowserRouter([
    {
      path: "/bootcamp-solve-tracker",
      element: <h1>Home</h1>
    },

    {
        path: "/bootcamp-solve-tracker/seasons",
        element: <Season />,
    }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App;
