import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./routes/router";
import { SiderBarProvider } from "./contexts/SideBarProvider";
import SideBar from "@components/public/Sidebar/Sidebar";
import { ToastProvider } from "./contexts/ToastProvider";
import { StoreProvider } from "./contexts/StoreProvider";
import SearchItem from "@components/public/SearchItem/SearchItem";
import { SearchProvider } from "./contexts/SearchProvider";

function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SearchProvider>
          <SiderBarProvider>
            <BrowserRouter>
              <SearchItem />
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
        </SearchProvider>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
