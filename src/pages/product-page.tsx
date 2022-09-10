import React, { useContext } from "react"
import { CreateProduct } from "../components/create-product"
import { ErrorMessage } from "../components/error-message"
import { Loader } from "../components/loader"
import { Modal } from "../components/modal"
import { Product } from "../components/product"
import { ModalContext } from "../context/modal-context"
import { useProducts } from "../hooks/products"
import { IProduct } from "../models"

export function ProductPage() {
  const { loading, error, products, addProduct } = useProducts()
  const { displayModal, open, close: closeModal } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-6 py-4 "
        onClick={open}
      >
        Add Product
      </button>

      {displayModal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  )
}
