// in src/posts.js
import {BooleanInput, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="username" validate={required()} />
            <TextInput source="password" validate={required()} />
            <TextInput source="email" validate={required()} />
            <BooleanInput source="is_admin" />  
     </SimpleForm>
    </Edit>
);