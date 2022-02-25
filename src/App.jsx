import ListPage from "./components/display/ListPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import DetailPage from "./components/display/DetailPage";


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
   < Route path="/" exact element={<ListPage />} />
   <Route path="/details" element={<DetailPage />} />
   </Routes>
   <Footer/>
    </>
  );
};

export default App;