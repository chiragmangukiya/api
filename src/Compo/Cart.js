import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

     const cartItem = useSelector((state)=>state.cart.cartItem)

  return (
    <div>
          {
               cartItem.map((item)=>{
                    return(
                         <>
                              
                         </>
                    )
               })
          }
    </div>
  )
}

export default Cart