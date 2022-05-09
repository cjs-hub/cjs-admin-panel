import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import List from "./screens/List/List";
import SinglePage from "./screens/SinglePage/SinglePage";
import New from "./screens/New/New";
import { productInputs, userInputs } from "./formdata";
// import "./style/dark.scss";

function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new user" />}
              />
            </Route>

            <Route path="menu">
              <Route index element={<List />} />
              <Route path=":menuId" element={<SinglePage />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add new product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
