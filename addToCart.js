import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();   //to keep value of cart updated always

export const addToCart = (event, id, stock) =>{
    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProductElem = document.querySelector(`#card${id}`);
    

    let quantity=currentProductElem.querySelector(".productQuantity").innerText;
    let price= currentProductElem.querySelector(".productPrice").innerText;

    price = price.replace("₹" , "");

    let existingProd = arrLocalStorageProduct.find( (curProd) => curProd.id ===id );

   if(existingProd && quantity > 1){
    quantity = Number(existingProd.quantity)  + Number( quantity);
    price = Number(price*quantity);
    let updatedCart = { id , quantity , price};

    updatedCart = arrLocalStorageProduct.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
    });

    console.log(updatedCart);

    localStorage.setItem("cartProductLS" , JSON.stringify(updatedCart));

    // show toast when product added to cart
    // if it is exosting

    showToast("add" , id);
   } 




    if(existingProd){
        // alert("Item already added to cart")
        return false;
    }





    price= Number(price*quantity);
    quantity = Number(quantity);

    let updateCart = {id , quantity , price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem("cartProductLS" , JSON.stringify(arrLocalStorageProduct));

    
    updateCartValue(arrLocalStorageProduct);

    // show toast when product is added to cart 
    // even if it is not existing
    showToast("add" , id);

};