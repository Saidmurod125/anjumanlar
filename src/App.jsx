import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import './App.css'
import Login from "./pages/Login/Login"
import Admin from "./pages/Admin/Admin"


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App