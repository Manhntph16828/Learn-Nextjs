import { create } from 'domain'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import useProducts from '../../hooks/use-product'
import { getAll } from '../api/product'

type ProductsProps = {
    products: any[]
}

const Products = ({products}: ProductsProps) => {
    // if(!products) return null
    const {data, error, create} = useProducts();
    
    
    if(!data) return <div>Loading....</div>
    if(error) return <div> Faild to load</div>
  return (
    <div>{data.map(item =>(
        <div key={item.id}><Link  href={`/products/${item.id}`}>{item.name}</Link></div>
        ))}
        <button onClick={() => create({ name: "Product C" })}>Add Product</button>
    </div>
  )
}

// export const getStaticProps: GetStaticProps<ProductsProps> = async (context:GetStaticPropsContext) =>{
    
//     const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
//     const data =  await response.json();
//     return {
//         props:{
//             products:data
//         },
//         revalidate:10
//     }
// }

export default Products