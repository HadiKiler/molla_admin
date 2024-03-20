// in src/posts.jsx
import { ReferenceField, Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';

export const PaymentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="order_id" reference="order" />
            <TextField source="method" />
            <TextField source="amount" />
            <TextField source="payment_date" />
        </SimpleShowLayout>
    </Show>
    )

