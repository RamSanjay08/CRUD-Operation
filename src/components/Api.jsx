import React from 'react'
import { useFetch } from './useFetch'

function Api() {

    let [d] = useFetch("http://localhost:3000/products")


  return (
    <div>
        {d &&
        d.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  )
}

export default Api
