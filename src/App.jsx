import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./routes/router";
import { SiderBarProvider } from "./contexts/SideBarProvider";
import SideBar from "@components/public/Sidebar/Sidebar";
import { ToastProvider } from "./contexts/ToastProvider";
import { StoreProvider } from "./contexts/StoreProvider";

function App() {
  return (
    <ToastProvider>
      <StoreProvider>
        <SiderBarProvider>
          <BrowserRouter>
            <SideBar />
            <Routes>
              {router.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </SiderBarProvider>
      </StoreProvider>
    </ToastProvider>
  );
}

export default App;
