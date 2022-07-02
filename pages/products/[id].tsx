import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
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

// export const getStaticPaths: GetStaticPaths = async () => {
//     const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
//     const paths = data.map((product: any) => (
//       { params: { id: product.id } }
//     ))
//     return {
//       paths,
//       fallback: false 
//     }
//   }
  
//   export const getStaticProps: GetStaticProps<ProdutProps> = async (context: GetStaticPropsContext) => {
//     console.log('context', context);
//     const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
//     return {
//       props: {product},
//       revalidate: 60
//     }
//   }


export const getServerSideProps : GetServerSideProps= async (context: GetServerSidePropsContext) =>{
  const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
  return {
    props: {product}
    
  }
}

export default ProductDetail