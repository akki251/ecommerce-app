import React, { useState } from 'react';
import { Text, Card, Row, Button, Col } from '@nextui-org/react';

import { AiFillDelete } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { ADD_ITEM } from '../../Store/actionConstants';
import { removeProductReq } from '../../Store/actions/products';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
const Product = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isDelete, setIsDelete] = useState(false);
  const addToCartHandler = () => {
    dispatch({ type: 'SUCCESS', payload: 'Product added to cart 👜' });
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const deleteHandler = () => {
    setIsDelete((prev) => !prev);
    dispatch(removeProductReq(item._id));
  };

  return (
    <motion.div
      animate={{
        opacity: 1,
        scale: 1,
        x: isDelete ? -500 : 0,
        rotate: isDelete ? 45 : 0,
      }}
      initial={{ opacity: 0, scale: 0 }}
    >
      <Card cover hoverable css={{ w: '100%', p: 0, cursor: 'pointer' }}>
        <Card.Header
          css={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            backgroundColor: '#e6f1fe',
            opacity: '.9',
          }}
        >
          <Col>
            <Text size={12} weight="bold" className="px-2" transform="uppercase" color="#001731">
              {item.category}
            </Text>
            <Text
              h5
              size={15}
              color="#002e62"
              className="px-2"
              style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {item.title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body onClick={() => history.push(`products/${item._id}`)}>
          <Card.Image
            src={item.image}
            showSkeleton
            height={400}
            width={400}
            alt="Relaxing app background"
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: 'absolute',
            bgBlur: '#0f1114',
            borderTop: '$borderWeights$light solid $gray700',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col>
                  <Text color="#d1d1d1" size={12}>
                    Price
                  </Text>
                  <Text color="#ffffff" size={17} weight="extrabold">
                    ${item.price}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row justify="flex-end" align="center">
                <Button
                  flat
                  auto
                  rounded
                  onClick={addToCartHandler}
                  css={{ color: '#94f9f0', bg: '#338ef7' }}
                >
                  <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                    Add to Cart
                  </Text>
                </Button>
                <span
                  onClick={deleteHandler}
                  className="mx-3 shadow-sm"
                  style={{
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    textAlign: 'center',
                  }}
                >
                  <AiFillDelete size={15} color="#ff8080" />
                </span>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </motion.div>
  );
};

export default Product;
