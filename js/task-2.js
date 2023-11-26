function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  console.log(`Shipping to ${country} will cost ${totalPrice} credits`);
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
console.log(getShippingMessage('Ukraine', 70, 15)); // "Shipping to Ukraine will cost 85 credits"
