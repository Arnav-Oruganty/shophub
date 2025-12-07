export class PaymentStrategy {
  pay(orderDetails) {
    throw new Error("pay() must be implemented");
  }
}

export class CardPayment extends PaymentStrategy {
  pay(orderDetails) {
    alert("Processing card payment...");
  }
}

export class UpiPayment extends PaymentStrategy {
  pay(orderDetails) {
    alert("Processing UPI payment...");
  }
}

export class CashOnDelivery extends PaymentStrategy {
  pay(orderDetails) {
    alert("Cash on Delivery selected. Pay when you receive your order.");
  }
}
