import React, { useEffect, useState } from 'react';
import { Container, Grid, Loading, Text, Card, Divider, Button, Image } from '@nextui-org/react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { getProductDetailReq } from '../../Store/actions/products';
import { ADD_ITEM } from '../../Store/actionConstants';
import CreateProduct from './CreateProduct';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.products);
  const params = useParams();
  const { id } = params;

  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    dispatch(getProductDetailReq(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch({ type: 'SUCCESS', payload: 'Product added to cart 👜' });
    dispatch({ type: ADD_ITEM, payload: product });
  };

  const updateHandler = () => {
    setIsUpdating(true);
  };

  return (
    <Container style={{ padding: '3rem 0px' }}>
      {isLoading && (
        <div className="text-center" style={{ paddingTop: '10rem' }}>
          <Loading size="xl" />
        </div>
      )}

      {!isLoading && (
        <Card className="py-1">
          <Grid.Container gap={2} justify="center">
            <Grid md={7}>
              <div>
                <div className="d-flex justify-content-between">
                  <Text h4 weight="medium">
                    {product?.title}
                  </Text>
                  <StarRatings
                    rating={product?.rating}
                    starRatedColor="rgb(204, 249, 83)"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="1px"
                  />
                </div>
                <Divider className="mt-3" />
                <Text className="py-2" size={19}>
                  {product?.description}
                </Text>
                <Text h2 weight="hairline" className="mt-2" color="#aaa">
                  ${product?.price}
                </Text>
                <div className="btns d-flex align-items-center gap-3 ">
                  <Button onClick={addToCartHandler} shadow className="mt-4" color="gradient" auto>
                    Add to Cart
                  </Button>

                  <Button
                    onClick={updateHandler}
                    disabled={isUpdating}
                    className="mt-4"
                    auto
                    bordered
                  >
                    Edit product
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid md={5} className="bg-light rounded">
              <Image
                width={320}
                height={180}
                src={product?.image}
                alt={product?.image}
                objectFit="cover"
              />
            </Grid>
          </Grid.Container>
        </Card>
      )}

      {isUpdating && <CreateProduct isUpdating={isUpdating} currentProduct={product} />}
    </Container>
  );
};

export default ProductDetail;
