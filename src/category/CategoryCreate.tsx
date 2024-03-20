// in src/posts.js
import * as React from 'react';
import {BooleanInput, Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
                <TextInput source="name" validate={required()} />
                <TextInput source="description" />
        </SimpleForm>
    </Create>
);