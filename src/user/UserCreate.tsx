// in src/posts.js
import * as React from 'react';
import {BooleanInput, Create, SimpleForm, TextInput, DateInput, required } from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" validate={required()} />
                <TextInput source="password" validate={required()} />
                <TextInput source="email" validate={required()} />
                <BooleanInput source="is_admin" />  
        </SimpleForm>
    </Create>
);