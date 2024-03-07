import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { FaTimes, FaCheck } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import {
  useGetOrdersQuery,
  useDeliverOrderMutation,
} from "../../slices/ordersApiSlice";

const OrderListScreen = () => {
  const { data: orders, refetch, isLoading, error } = useGetOrdersQuery();

  const [deliverOrder] = useDeliverOrderMutation();

  const deliverOrderHandler = async (orderId) => {
    await deliverOrder(orderId);
    refetch();
    toast.success("Order is Delivered");
  };

  return (
    <>
      <h1>OrderList</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>MAKE DELIVERED</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <FaCheck style={{ color: "blue" }} />
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    <FaCheck style={{ color: "blue" }} />
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>

                <td>
                  <input
                    type="checkbox"
                    checked={order.isDelivered}
                    disabled={order.isDelivered}
                    onChange={() => deliverOrderHandler(order._id)}
                  />
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant="light" className="btn-sm">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
