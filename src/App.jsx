import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Image from "./pages/Image";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="image" element={<Image />} />
      <Route path="login" element={<Login />} />

    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
