import { ProductCardProps } from "@/types/interfaces/product-card-props";

export async function searchProducts ():Promise<ProductCardProps[]> {
    const response = await fetch(`${process.env.API_HOST}/api/products`)

    if(!response.ok){
        throw new Error("Fail")
    }

    return response.json()
}