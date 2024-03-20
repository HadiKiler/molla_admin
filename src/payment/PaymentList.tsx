// in src/posts.jsx
import {ReferenceField, FilterForm, SearchInput, List,ImageField ,Datagrid, TextField, EmailField, BooleanField } from 'react-admin';
import { Stack } from '@mui/material';

const Search = [
    <SearchInput source="q" alwaysOn />,
];
const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={Search} />
    </Stack>
)

export const PaymentList = () => (
    <List>
        <ListToolbar />
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="order_id" reference="order" />
            <TextField source="method" />
            <TextField source="amount" />
            <TextField source="payment_date" />
        </Datagrid>
    </List>
);