// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField } from 'react-admin';

export const AddressList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="order_id" reference='order'/>
            <TextField source="country" />
            <TextField source="city" />
            <TextField source="postal_code" />
        </Datagrid>
    </List>
);