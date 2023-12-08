import React from 'react'
import { useFetch } from './useFetch'

function ProductFetch() {

    let [data] = useFetch("http://localhost:3000/products")
    console.log(data)

  return (
    <div>
      
    </div>
  )
}

export default ProductFetch
