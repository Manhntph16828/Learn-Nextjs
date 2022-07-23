import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr';

type ProdutProps = {
    product:any;

}
 
const ProductDetail= () => {
  const router = useRouter();
  const {id} = router.query;
  const {data, error} = useSWR(id ? `/products/${id}` :null)
  if(!data)  <div>Loading...</div>
  if(error) <div>ERROR</div>
    // const router = useRouter();
    // console.log('router', router.query);
  return (
    <div>{data?.name}</div>
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
//       revalidate: 10
//     }
//   }


// export const getServerSideProps : GetServerSideProps= async (context: GetServerSidePropsContext) =>{
//   context.res.setHeader("Cache-Control","s-maxage=10,stale-while-revalidate")
//   const product = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
//   return {
//     props: {product}
    
//   }
// }

export default ProductDetail