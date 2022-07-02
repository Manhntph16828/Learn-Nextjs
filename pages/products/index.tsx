import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductsProps = {
    products: any[]
}

const Products = ({products}: ProductsProps) => {
    if(!products) return null
  return (
    <div>{products.map(item =>(
        <div key={item.id}><Link  href={item.id}>{item.name}</Link></div>
        ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<ProductsProps> = async (context:GetStaticPropsContext) =>{
    const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
    const data =  await response.json();
    return {
        props:{
            products:data
        }
    }
}

export default Products