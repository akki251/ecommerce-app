import {
  Card,
  Container,
  Divider,
  Text,
  Input,
  Spacer,
  Button,
  Grid,
  Loading,
} from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProductReq, updateProductReq } from '../../Store/actions/products';

const CreateProduct = ({ isUpdating, currentProduct }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialState = {
    title: currentProduct?.title || '',
    price: currentProduct?.price || '',
    description: currentProduct?.description || '',
    rating: currentProduct?.rating || '',
  };

  const [newProductData, setNewProductData] = useState(initialState);

  const { isLoading } = useSelector((state) => state.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdating) {
      dispatch(updateProductReq(newProductData, history, currentProduct._id));
      // console.log(newProductData);
    } else dispatch(addProductReq(newProductData, history));
  };

  return (
    <>
      <Container className="py-5">
        <Card>
          <Text className="py-3" h3 weight="semibold" color="secondary">
            {isUpdating ? 'Update' : 'Create'} a Product
          </Text>
          <Spacer y={2} />
          <form onSubmit={handleSubmit}>
            <Grid.Container gap={5} md={12}>
              <Grid>
                <Input
                  size="md"
                  onChange={(e) => setNewProductData({ ...newProductData, title: e.target.value })}
                  color="primary"
                  fullWidth
                  type="text"
                  clearable
                  underlined
                  value={newProductData.title}
                  labelPlaceholder="Title of product"
                />
              </Grid>
              <Grid>
                <Input
                  size="md"
                  onChange={(e) => setNewProductData({ ...newProductData, price: e.target.value })}
                  color="primary"
                  fullWidth
                  clearable
                  underlined
                  type="number"
                  value={newProductData.price}
                  labelPlaceholder="Price of product"
                />
              </Grid>{' '}
              <Grid>
                <Input
                  size="md"
                  onChange={(e) =>
                    setNewProductData({ ...newProductData, description: e.target.value })
                  }
                  color="primary"
                  type="text"
                  fullWidth
                  clearable
                  underlined
                  value={newProductData.description}
                  labelPlaceholder="Description of product"
                />
              </Grid>{' '}
              <Grid>
                <Input
                  size="md"
                  onChange={(e) => setNewProductData({ ...newProductData, rating: e.target.value })}
                  color="primary"
                  fullWidth
                  type="number"
                  clearable
                  value={newProductData.rating}
                  underlined
                  labelPlaceholder="Rating out of 5"
                />
              </Grid>
            </Grid.Container>
            <Button color="success" type="submit" className="m-4" auto>
              {!isLoading && (isUpdating ? 'Update Product' : 'Add Product')}
              {isLoading && <Loading color="currentColor" size="sm" />}
            </Button>
          </form>
          <Divider />
        </Card>
      </Container>
    </>
  );
};

export default CreateProduct;
