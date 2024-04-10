// in src/posts.jsx
import { ReferenceField, Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';

export const LogShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="user" />
            <TextField source="action" />
            <TextField source="action_date" />
            <TextField source="user_ip" />
        </SimpleShowLayout>
    </Show>
    )

