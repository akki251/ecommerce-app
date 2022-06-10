import { Container, Spacer, Text, Loading } from '@nextui-org/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, isLoading } = useSelector((state) => state.cart);

  const totalBilAmount = cartItems?.reduce(
    (accum, curr) => accum + curr.currentCount * curr.price,
    0,
  );

  return (
    <Container className="py-3">
      <div className="d-flex justify-content-between align-items-center">
        <Text h3 className="py-4" weight="semibold" color="purple">
          {cartItems.length > 0 ? 'Items are waiting for You!' : ''}
        </Text>
        {cartItems.length > 0 && <Text h5>Total Bill Amount : ${totalBilAmount.toFixed(2)}</Text>}
      </div>

      <Spacer y={2} />

      {!isLoading &&
        cartItems.map((item) => (
          /// change after fetching real items
          <CartItem key={Math.random() + item._id} item={item} />
        ))}
      {!isLoading && cartItems.length === 0 && (
        <Text className="text-center mt-5" h1>
          No Items in cart <span role="img" aria-label='emoji'>🛒</span>
        </Text>
      )}
      {isLoading && (
        <div className="text-center" style={{ paddingTop: '10rem' }}>
          <Loading size="xl" />
        </div>
      )}
    </Container>
  );
};

export default Cart;
