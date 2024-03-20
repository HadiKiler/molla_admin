// in src/posts.js
import {ReferenceInput,ImageInput,ImageField, Edit, SimpleForm, TextInput, required } from 'react-admin';

export const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="user" />
            <TextInput source="status" validate={[required()]} />
        </SimpleForm>
    </Edit>
);