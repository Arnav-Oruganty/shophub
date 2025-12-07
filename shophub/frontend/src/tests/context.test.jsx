import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShopProvider, useShop } from '../context/ShopContext';

describe('ShopContext', () => {
  function TestComponent() {
    const { cart, addToCart } = useShop();

    React.useEffect(() => {
      addToCart({ productId: 1, name: 'Test', price: 10, quantity: 1 });
    }, []);

    return <div>{cart.length > 0 ? cart[0].name : 'Empty'}</div>;
  }

  it('provides cart and addToCart', () => {
    render(
      <ShopProvider>
        <TestComponent />
      </ShopProvider>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
