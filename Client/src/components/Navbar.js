import React, { useEffect, useRef, useState } from 'react';
import logo from '../images/navbar-LOGO.png';
import { Container, Card, Button, Image, Input } from '@nextui-org/react';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineFolderAdd, AiOutlineSearch } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const Navbar = () => {
  const searchRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [searchInput, setSearchInput] = useState('');




  const onSearchHandler = () => {
    const searchTerm = searchRef.current.value;
    setSearchInput(searchTerm);
    dispatch({ type: 'LOAD_SEARCH_PRODUCTS', payload: searchTerm });
  };

  const alert = useSelector((state) => state.alert);

  const showToast = (type, message) => {
    toast[type](message);
  };

  useEffect(() => {
    dispatch({ type: 'LOAD_CART_ITEMS' });
  }, [dispatch]);

  const totalCartItems = cartItems?.reduce((prev, curr) => prev + curr.currentCount, 0) || 0;

  useEffect(() => {
    if (alert.success) {
      showToast('success', alert.message);
    } else if (alert.error) {
      showToast('error', alert.message);
    }
  }, [alert]);

  return (
    <Container>
      <Toaster
        toastOptions={{
          style: {
            padding: '16px',
            color: '#6f66e5',
          },
        }}
      />
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
            <span className="mx-5 navbar__search">
              <Input
                onChange={onSearchHandler}
                ref={searchRef}
                aria-label="close"
                clearable
                value={searchInput}
                contentRightStyling={true}
                placeholder="Your Favorite Here.."
                contentRight={<AiOutlineSearch />}
              />
            </span>
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
                {totalCartItems}
              </span>
              <Link to="/cart">
                <FaCartPlus size={30} color="blue" />
              </Link>
            </span>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Navbar;
