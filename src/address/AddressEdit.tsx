// in src/posts.js
import {ReferenceInput, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';

export const AddressEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="order_id" reference='order'/>
            <TextInput source="country" />
            <TextInput source="city" />
            <TextInput source="address" />
            <TextInput source="postal_code" />
       </SimpleForm>
    </Edit>
);