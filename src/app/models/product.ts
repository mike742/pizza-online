import { Size } from "./size";
import { Topping } from "./topping";

export class Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    topping?: Topping[];
    sizes: Size[]
}
