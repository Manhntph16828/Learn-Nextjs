import useSWR, { useSWRConfig } from "swr";
import { add, getAll } from "../pages/api/product";




 const useProducts = () =>{
    const { mutate } = useSWRConfig();

    const fetcher = async (url) => {
        const {data} = await getAll(url)
        return data
    }
    const {data, error} = useSWR("/products",fetcher,{ dedupingInterval: 5000})

    const create = async (item)=>{
        mutate("/products", async ()=>{
            const {data: product} = await add(item)
            return [...data, product]
        })
    }


    return {
        create,
        error,
        data
    }
}

export default useProducts;