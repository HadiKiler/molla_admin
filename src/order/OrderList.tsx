// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid rowClick='show'>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="user" />
            <TextField source="order_date" />
            <TextField source="total_amount" />
            <TextField source="status" />
        </Datagrid>
    </List>
);