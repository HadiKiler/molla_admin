// in src/posts.jsx
import { ReferenceField, Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';

export const FeedBackShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="order_id" reference="order" />
            <ReferenceField source="user_id" reference="user" />
            <TextField source="rating" />
            <TextField source="comment" />
            <TextField source="feedback_date" />
        </SimpleShowLayout>
    </Show>
    )

