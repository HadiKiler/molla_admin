// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField } from 'react-admin';

export const CategoryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="create_at" />
        </Datagrid>
    </List>
);