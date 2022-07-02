import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React from 'react'

type ProdutProps = {
    product:any;

}

const ProductDetail= ({}: ProdutProps) => {
    const router = useRouter();
    console.log('router', router.query);
  return (
    <div>ProductDetail</div>
  )
}

export const getStaticPaths: GetStaticPaths= async() =>{
    const product = await ( await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
    return {
        props:{
            
        }
    }
}


export default ProductDetail