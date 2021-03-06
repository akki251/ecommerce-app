import { Container, Spacer, Text, Grid, Loading, Switch } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsReq } from '../../Store/actions/products';
import Product from './Product';

const AllProducts = () => {
  const dispatch = useDispatch();
  const [isSort, setIsSort] = useState(false);
  const { products, isLoading } = useSelector((state) => state.products);
  let sortedProducts = null;

  useEffect(() => {
    dispatch(getAllProductsReq());
  }, [dispatch]);

  const sortHandler = () => {
    setIsSort((prev) => !prev);
  };

  if (isSort) {
    sortedProducts = [...products].sort(function (a, b) {
      return a.price - b.price;
    });
  }

  const finalProducts = sortedProducts || products;
  return (
    <>
      {!isLoading && (
        <Container className="py-5">
          <div className="d-flex justify-content-between">
            <Text weight="semibold" color="#005bc4" h2>
              Shop from wide range of products
            </Text>
            <span className="d-flex gap-3 align-items-center">
              Sort By Price
              <Switch onChange={sortHandler} checked={isSort} />
            </span>
          </div>
          <Spacer y={4} />
          <Container>
            <Grid.Container gap={4}>
              {finalProducts?.map((item) => (
                <Grid key={item._id} xs={12} md={4}>
                  <Product item={item} />
                </Grid>
              ))}
            </Grid.Container>
          </Container>
        </Container>
      )}
      {isLoading && (
        <div className="text-center" style={{ paddingTop: '10rem' }}>
          <Loading size="xl" />
        </div>
      )}
      {!isLoading && finalProducts.length === 0 && (
        <div className="text-center" style={{ paddingTop: '10rem' }}>
          <Text h3 color="gray">
            No products Found
          </Text>
        </div>
      )}
    </>
  );
};

export default AllProducts;
