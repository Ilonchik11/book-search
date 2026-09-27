import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
