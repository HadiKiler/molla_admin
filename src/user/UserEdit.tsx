// in src/posts.js
import {BooleanInput, Edit, SimpleForm, TextInput,ImageField,ImageInput, required } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="username" validate={required()} />
            <TextInput source="password" validate={required()} />
            <TextInput source="email" validate={required()} />
            <BooleanInput source="is_admin" />  
            <ImageInput source="image" accept="image/*" validate={[required()]}>
                <ImageField source="src" title="title" />
            </ImageInput>
     </SimpleForm>
    </Edit>
);