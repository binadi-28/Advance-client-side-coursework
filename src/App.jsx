import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FavouritesProvider } from "./context/FavouritesContext";
import FavouriteList from "./components/FavouriteList";

function App() {
  return (
    <FavouritesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavouritesProvider>
  );
}

export default App;
