import { BrowserRouter, Route, Routes } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((item, index) => (
          <Route key={index} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
