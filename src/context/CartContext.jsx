import { createContext } from 'react'

const initialCartProducts = [
  {
      id: 1,
      name: "Woman Sleeve 003",
      imageSrc: "/products/woman-short-sleeve-003.png",
      price: 79.99,
      size: "XL",
      color: "Blue"
  },
  {
      id: 2,
      name: "Men Shirt 001",
      imageSrc: "/products/men-shirt-001.png",
      price: 89.99,
      size: "L",
      color: "Gray"
  },
  {
      id: 3,
      name: "Men Shirt 002",
      imageSrc: "/products/men-shirt-002.png",
      price: 99.99,
      size: "S",
      color: "Black"
  },
];

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [products, setProducts] = useState(initialCartProducts)

    return (
        <CartContext.Provider value={{ products }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
  return useContext(CartContext)
}