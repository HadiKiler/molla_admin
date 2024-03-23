// in src/posts.js
import * as React from 'react';
import {ImageField,ImageInput, Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="description" />
                <ImageInput source="image" accept="image/*" validate={[required()]}>
                    <ImageField source="src" title="title" />
                </ImageInput>
        </SimpleForm>
    </Create>
);