// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid rowClick='edit'>
            <TextField source="id" />
            <ReferenceField source="category_id" reference="category" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <ImageField source="image" />
        </Datagrid>
    </List>
);