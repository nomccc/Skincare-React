import "./App.css";
import Header from "./components/Header";

import CreateAccount from "./pages/CreateAccount";
import CreateProduct from "./pages/CreateProduct";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layouts from "./Layouts/Layout";
import UserDetails from "./pages/UserDetails";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./redux/slice/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Layouts>
            <Routes>
              <Route path="/" element={<CreateProduct />} />
              <Route path="/:id" element={<ProductDetails />} />
              <Route path="/landingPage" element={<LandingPage />} />
              <Route path="/createAccount/:id" element={<UserDetails />} />
              <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layouts>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
