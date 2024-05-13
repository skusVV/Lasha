export const getCarPrice = (currency, price) => {
    if(currency === 'USD') {
      return `${price} $`;
    }
    if(currency === 'GEL') {
      return `${Math.floor(price * 2.68)} ₾`;
    }
  }