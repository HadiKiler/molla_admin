// in src/posts.js
import * as React from 'react';
import {ReferenceInput,ImageInput,FileField, FileInput, Create, SimpleForm, TextInput, DateInput, required, ImageFieldClasses, ImageField } from 'react-admin';

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="category_id" reference="category" />
            <TextInput source="name" validate={[required()]} />
            <TextInput source="description" />
            <TextInput source="price" validate={[required()]} />
            <ImageInput source="image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
