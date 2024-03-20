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

export const FeedBackList = () => (
    <List>
        <ListToolbar />
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="order_id" reference="order" />
            <ReferenceField source="user_id" reference="user" />
            <TextField source="rating" />
            <TextField source="comment" />
            <TextField source="feedback_date" />
        </Datagrid>
    </List>
);