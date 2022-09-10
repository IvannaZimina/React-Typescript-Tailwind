import React from "react"
import { Route, Routes } from "react-router-dom"
import { Navigation } from "./components/navigation"
import { AboutPage } from "./pages/about-page"
import { ProductPage } from "./pages/product-page"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
