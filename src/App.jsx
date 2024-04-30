import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Home from "./pages/Home/Home"
import Transfers from "./pages/Transfers"
import About from "./pages/About/About"
import './App.css'
import Login from "./pages/Login/Login"


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/transfers" element={<Transfers/>} />
        <Route path="/tariffs" element={<Login/>} />
        <Route path="/about" element={<About/>} />
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