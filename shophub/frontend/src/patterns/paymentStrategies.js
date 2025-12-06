// PaymentStrategy interface
export class PaymentStrategy {
  pay(orderDetails) {
    throw new Error("pay() must be implemented");
  }
}

// Card Payment
export class CardPayment extends PaymentStrategy {
  pay(orderDetails) {
    // Implement card payment logic here
    alert("Processing card payment...");
    // return a promise or result
  }
}

// UPI Payment
export class UpiPayment extends PaymentStrategy {
  pay(orderDetails) {
    alert("Processing UPI payment...");
  }
}

// Cash on Delivery
export class CashOnDelivery extends PaymentStrategy {
  pay(orderDetails) {
    alert("Cash on Delivery selected. Pay when you receive your order.");
  }
}
