// in src/posts.jsx
import { ReferenceField, Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';

export const AddressShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="order_id" reference='order'/>
            <TextField source="country" />
            <TextField source="city" />
            <TextField source="address" />
            <TextField source="postal_code" />
        </SimpleShowLayout>
    </Show>
    )
