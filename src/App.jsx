import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import NewTemplate from "./components/NewTemplate/NewTemplate";
import { pages } from "./util/NavLinks";
import EmptyPage from "./components/EmptyPage/EmptyPage";

function App() {

  const router = createBrowserRouter([
    {
      path: pages.home,
      element: <Home />
    },
    {
      path: pages.new,
      element: <NewTemplate />
    },
    {
      path: pages.empty,
      element: <EmptyPage />
    }
  ])

  return (
    <div style={{display: "flex", flexDirection: "row", overflow: "hidden"}}>
      <SideBar />
      <div style={{width: '100%'}}>
        <Header />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
