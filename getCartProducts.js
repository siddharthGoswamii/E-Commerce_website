import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () =>{
    let cartProducts = localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return[];
    }
    cartProducts = JSON.parse(cartProducts);


    // update cart button values
    updateCartValue(cartProducts);


    return cartProducts;
};