import { Product } from "./models/product";
import { Size } from "./models/size";

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Pizza",
        imageUrl: "../assets/pizza.jpg",
        price: 10.55,
        sizes: [Size.LARGE, Size.MEDIUM, Size.SMALL]
    },
    {
        id: 2,
        name: "Pasta",
        imageUrl: "../assets/pasta.jpg",
        price: 8.75,
        sizes: [Size.LARGE, Size.SMALL]
    }
]