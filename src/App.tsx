import React, { useState } from "react"
import { CreateProduct } from "./components/create-product"
import { ErrorMessage } from "./components/error-message"
import { Loader } from "./components/loader"
import { Modal } from "./components/modal"
import { Product } from "./components/product"
import { useProducts } from "./hooks/products"
import { IProduct } from "./models"

function App() {
  const { loading, error, products, addProduct } = useProducts()
  const [displayModal, setDisplayModal] = useState(false)

  const createHandler = (product: IProduct) => {
    setDisplayModal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      <button
        className="absolute top-5 right-5 rounded-full bg-red-700 text-white text-2xl px-6 py-4 "
        onClick={() => setDisplayModal(true)}
      >
        Add Product
      </button>

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {displayModal && (
        <Modal
          title="Create new product"
          onClose={() => setDisplayModal(false)}
        >
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  )
}

export default App
