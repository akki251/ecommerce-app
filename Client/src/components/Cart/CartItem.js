import React from 'react';
import { Card, Grid, Text, Image, Divider, Button } from '@nextui-org/react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const deleteCartItemHandler = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item._id });
  };

  const incrementItemHandler = () => {
    dispatch({ type: 'INCREMENT_ITEM', payload: item._id });
  };
  const decrementItemHandler = () => {
    if (item.currentCount === 1) {
      deleteCartItemHandler();
    } else dispatch({ type: 'DECREMENT_ITEM', payload: item._id });
  };

  return (
    <Card className="py-2 my-5">
      <Grid.Container alignItems="center">
        <Grid md={3} alignContent="flex-start">
          <Image
            autoResize="true"
            width={240}
            height={150}
            src={item.image}
            alt="Default Image"
            objectFit="cover"
          />
        </Grid>
        <Grid md={7}>
          <div className="d-flex flex-column gap-1">
            <Text h5>{item.title}</Text>
            <Divider />
            <Text>{item.description}</Text>
            <div className="d-flex align-items-center  gap-2  ">
              <Text className="py-2" weight="thin" h5 color="#8fa7ef">
                $ {item.price}
              </Text>
              <AiOutlineDelete
                size="20"
                onClick={deleteCartItemHandler}
                cursor="pointer"
                color="#005"
              />
            </div>
          </div>
        </Grid>
        <Grid md={2} justify="center">
          <div className="d-flex align-items-center gap-2 flex-column  ">
            <Button.Group size="sm">
              <Button bordered onClick={decrementItemHandler}>
                -
              </Button>
              <Button style={{ cursor: 'not-allowed' }} color="blue">
                {item.currentCount}
              </Button>
              <Button bordered onClick={incrementItemHandler}>
                +
              </Button>
            </Button.Group>
            <Button
              rounded
              bordered
              size="sm"
              css={{ maxWidth: '150px' }}
              className="p-3 mt-3"
              color="secondary"
            >
              Only {item.count} left
            </Button>
          </div>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default CartItem;
