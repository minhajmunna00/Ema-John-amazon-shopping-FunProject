import { getStoredCart } from "../../utilities/fakedb";

export const productsAndCartLoaders = async () =>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getStoredCart();
    const initialCart = []
    for (const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    return { products:products, initialCart:initialCart};
}