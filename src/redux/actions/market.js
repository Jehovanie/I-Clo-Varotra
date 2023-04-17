export const calculTotalAmount = (products) => {
    return products.reduce((total, item) => total + (item.price * item.quantity), 0);
}