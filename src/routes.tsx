import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import JobBoard from "./pages/JobBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "jobs",
        element: <JobBoard />,
      },
    ],
  },
]);

export default router;
