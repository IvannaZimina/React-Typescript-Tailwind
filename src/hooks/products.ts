import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts() {
  const [products, setProduct] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function addProduct(product: IProduct) {
    setProduct(prev => [product, ...prev ])
  }

  async function fetchProducts() {
    try {
      setError("")
      setLoading(true)
      const response = await axios.get<IProduct[]>(
        `https://fakestoreapi.com/products/?limit=5`
      )
      setProduct(response.data)
      setLoading(false)
    } catch (err: unknown) {
      const error = err as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { loading, error, products, addProduct }
}
