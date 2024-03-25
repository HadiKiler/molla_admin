// in src/posts.js
import {ReferenceInput,SelectInput,ImageField, Edit, SimpleForm, TextInput, required } from 'react-admin';

export const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="user" />
            {/* <TextInput source="status" validate={[required()]} /> */}
            <SelectInput source="status" choices={[
                { id: 'cart', name: 'Cart' },
                { id: 'sending', name: 'Sending' },
                { id: 'completed', name: 'Completed' },
            ]} validate={[required()]} />
        </SimpleForm>
    </Edit>
);