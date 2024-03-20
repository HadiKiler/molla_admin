// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <BooleanField source="is_admin" />
            <EmailField source="email" />
            <TextField source="register_date" />
        </Datagrid>
    </List>
);