type Props = {
    params: {
          reviewId: string
          productId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>{params.reviewId} Review on Product {params.productId}</h1>
    )
  }