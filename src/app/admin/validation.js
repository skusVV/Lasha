export const validateForm = car => {
    const messages = [];
  
    if(!car.imageRef) {
      messages.push('Image field should not be empty.');
    } else {
    //   if(!car.imageRef.startsWith('http') || !car.imageRef.endsWith('.jpeg')) {
    //     messages.push('Image field should be valid.');
    //   }
  
      // There coulbe be much more complex validation
    }
    
  
    if(!car.price) {
      messages.push('Price field should not be empty.');
    } else {
      if(Number(car.price) < 0) {
        messages.push('Price should be positive value.');
      }
  
      if(Number(car.price) === 0) {
        messages.push('Price should be greater than 0.');
      }
    }
  
    if(!car.millage) {
      messages.push('Millage field should not be empty.');
    } else {
      if(Number(car.millage) < 0) {
        messages.push('Millage should be positive value.');
      }
  
      if(Number(car.millage) === 0) {
        messages.push('Millage should be greater than 0.');
      }
    }
  
    // const response = {
    //   isFormValid: !messages.length,
    //   messages
    // }

    return messages;
  }