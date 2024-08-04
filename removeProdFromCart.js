import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) =>{

let cartProducts = getCartProductFromLS();
cartProducts = cartProducts.filter( (curProd) => curProd.id !== id);

// update the local storage after removing the item
localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

// to remove the div on click
let removeDiv = document.getElementById(`card${id}`);
if(removeDiv){
    removeDiv.remove();

    // show toast or popup when product is added to the cart
    showToast("delete" , id);

}

updateCartValue(cartProducts);
};
