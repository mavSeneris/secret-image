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
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="image" element={<Image />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register/>} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
