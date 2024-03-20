import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserShow } from "./user/UserShow";
import { UserEdit } from "./user/UserEdit";
import { UserCreate } from "./user/UserCreate";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductList } from "./product/ProductList";
import { OrderList } from "./order/OrderList";
import { OrderShow } from "./order/OrderShow";
import { OrderEdit } from "./order/OrderEdit";
import { UserList } from "./user/UserList";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { PaymentList } from "./payment/PaymentList";
import { PaymentShow } from "./payment/PaymentShow";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="user"
      list={UserList}
      edit={UserEdit}
      show={UserShow}
      create={UserCreate}
    />
    <Resource
      name="address"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="log"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="order"
      list={OrderList}
      edit={OrderEdit}
      show={OrderShow}
    />
    <Resource
      name="category"
      list={CategoryList}
      edit={CategoryEdit}
      show={ShowGuesser}
      create={CategoryCreate}
    />
    <Resource
      name="product"
      list={ProductList}
      edit={ProductEdit}
      show={ShowGuesser}
      create={ProductCreate}
    />
    <Resource
      name="payment"
      list={PaymentList}
      show={PaymentShow}
    />
    <Resource
      name="feedback"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
