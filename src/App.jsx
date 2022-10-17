import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from "./page/HomePage";
import DetailPage from "./page/DetailPage";
import SearchPage from './page/SearchPage'
import CategoryPage from "./page/CategoryPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path=':id' element={<DetailPage />} />
            <Route path='/search/:s' element={<SearchPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
