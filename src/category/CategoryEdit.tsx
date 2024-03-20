// in src/posts.js
import {BooleanInput, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="description" />
       </SimpleForm>
    </Edit>
);