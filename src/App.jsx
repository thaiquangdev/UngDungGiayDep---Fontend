import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./routes/router";
import { SiderBarProvider } from "./contexts/SideBarProvider";
import SideBar from "@components/public/Sidebar/Sidebar";

function App() {
  return (
    <SiderBarProvider>
      <BrowserRouter>
        <SideBar />
        <Routes>
          {router.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </SiderBarProvider>
  );
}

export default App;
