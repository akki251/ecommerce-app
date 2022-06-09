import React, { useEffect } from 'react';
import logo from '../images/navbar-LOGO.png';
import { Container, Card, Button, Image } from '@nextui-org/react';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const cartItemsFromLocal = JSON.parse(localStorage.getItem('cartItems'));
    dispatch({ type: 'LOAD_CART_ITEMS', payload: cartItemsFromLocal || [] });
  }, [dispatch]);

  // console.log(cartItems);
  // console.log(cartItems);

  const showToast = () => {
    toast.success('Here is your toast');
  };

  return (
    <Container>
      <Toaster />
      <Card style={{ backgroundColor: '#12134' }}>
        <div className="d-flex navbar justify-content-between">
          <div className="navbar__links d-flex align-items-center gap-5 ">
            <Link to="/">
              <Image
                width={70}
                onClick={showToast}
                height={70}
                src={logo}
                alt="Default Image"
                objectFit="cover"
              />
            </Link>

            <Button auto color="primary" onClick={() => history.push('/')}>
              All Products
            </Button>

            <Button
              onClick={() => history.push('/products/create')}
              auto
              color="secondary"
              bordered
              iconRight={<AiOutlineFolderAdd />}
            >
              Create Product
            </Button>
          </div>
          <div className="navbar__cart">
            <span style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  zIndex: 21212,
                  backgroundColor: 'purple',
                  color: 'white',
                  width: '25px',
                  top: -14,
                  left: 14,
                  height: '25px',
                  textAlign: 'center',
                  borderRadius: '50%',
                }}
              >
                {cartItems.length}
              </span>
              <FaCartPlus size={30} color="blue" />
            </span>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Navbar;
