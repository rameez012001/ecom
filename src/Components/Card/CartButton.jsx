import React, { useState } from 'react'

function CartButton() {
    const [inActiveCart,activeCart] = useState(false);
    const setCartActive = ()=>activeCart(!inActiveCart);
  return (
    <>
        <button class="btn btn-square rounded-md" onClick={setCartActive}>
            <svg id='cart' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill={inActiveCart ? 'red':'gray'} viewBox="0 0 24 24" stroke={inActiveCart ? 'red':'gray'}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
    </>
  )
}

export default CartButton