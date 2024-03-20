// in src/posts.jsx
import { Show, SimpleShowLayout, BooleanField, TextField,ImageField, EmailField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="username" />
            <TextField source="password" />
            <EmailField source="email" />
            <BooleanField source="is_admin" />
            <ImageField source="image" title="title" />
        </SimpleShowLayout>
    </Show>
    )