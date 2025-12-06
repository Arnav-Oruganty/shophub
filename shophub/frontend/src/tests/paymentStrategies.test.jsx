import { vi } from 'vitest';
import { CardPayment, UpiPayment, CashOnDelivery } from '../patterns/paymentStrategies';

describe('Payment Strategies', () => {
  it('CardPayment pay method works', () => {
    const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const strategy = new CardPayment();
    strategy.pay({ number: '1234', expiry: '12/34', cvv: '123' });
    expect(spy).toHaveBeenCalledWith('Processing card payment...');
    spy.mockRestore();
  });
  it('UpiPayment pay method works', () => {
    const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const strategy = new UpiPayment();
    strategy.pay({ upiPhone: '9876543210' });
    expect(spy).toHaveBeenCalledWith('Processing UPI payment...');
    spy.mockRestore();
  });
  it('CashOnDelivery pay method works', () => {
    const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const strategy = new CashOnDelivery();
    strategy.pay({});
    expect(spy).toHaveBeenCalledWith('Cash on Delivery selected. Pay when you receive your order.');
    spy.mockRestore();
  });
});
