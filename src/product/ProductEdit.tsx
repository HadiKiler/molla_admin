// in src/posts.js
import {ReferenceInput,ImageInput,ImageField, Edit, SimpleForm, TextInput, required } from 'react-admin';

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="category_id" reference="category" />
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" />
            <TextInput source="price" validate={[required()]} />
            <ImageInput source="image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);