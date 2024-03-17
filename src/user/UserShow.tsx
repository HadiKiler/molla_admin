// in src/posts.jsx
import { Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="username" />
            <TextField source="password" />
            <EmailField source="email" />
            <BooleanField source="is_admin" />
        </SimpleShowLayout>
    </Show>
    )