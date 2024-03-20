// in src/posts.js
import * as React from 'react';
import {BooleanInput,ImageField,ImageInput, Create, SimpleForm, TextInput, DateInput, required, EmailField } from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" validate={required()} />
                <TextInput source="password" validate={required()} />
                <TextInput source="email" validate={required()} />
                <BooleanInput source="is_admin" />  
                <ImageInput source="image" accept="image/*" validate={[required()]}>
                    <ImageField source="src" title="title" />
                </ImageInput>
        </SimpleForm>
    </Create>
);