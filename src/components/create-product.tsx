import axios from "axios"
import React, { useState } from "react"
import { IProduct } from "../models"
import { ErrorMessage } from "./error-message"

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

const productMockData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const submitHandler = async (ev: React.FormEvent) => {
    ev.preventDefault()
    setError("")

    if (value.trim().length === 0) {
      setError("Please enter valid Title")
      return
    }

    productMockData.title = value

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productMockData
    )

    onCreate(response.data)
  }

  const changeHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(ev.target.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover: text-white"
      >
        Create
      </button>
    </form>
  )
}
