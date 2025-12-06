import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../components/CartItem';

describe('CartItem', () => {
  const item = {
    name: 'Test Product',
    price: 99,
    quantity: 2,
    image: '/test.jpg',
    description: 'A test product',
  };
  it('renders product details and image', () => {
    render(<CartItem item={item} onDecrease={() => {}} onIncrease={() => {}} onRemove={() => {}} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
    expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('A test product')).toBeInTheDocument();
  });
  it('calls handlers on button click', () => {
  const onDecrease = vi.fn();
  const onIncrease = vi.fn();
  const onRemove = vi.fn();
    render(<CartItem item={item} onDecrease={onDecrease} onIncrease={onIncrease} onRemove={onRemove} />);
    fireEvent.click(screen.getByLabelText('Decrease quantity'));
    fireEvent.click(screen.getByLabelText('Increase quantity'));
    fireEvent.click(screen.getByText('Remove'));
    expect(onDecrease).toHaveBeenCalled();
    expect(onIncrease).toHaveBeenCalled();
    expect(onRemove).toHaveBeenCalled();
  });
});
