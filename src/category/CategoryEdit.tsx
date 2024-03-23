// in src/posts.js
import {ImageField,ImageInput, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, required } from 'react-admin';

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <TextInput source="description" />
            <ImageInput source="image" accept="image/*" validate={[required()]}>
                    <ImageField source="src" title="title" />
            </ImageInput>
       </SimpleForm>
    </Edit>
);