// in src/posts.jsx
import { ReferenceField, Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';
import { JsonField } from "react-admin-json-view";

export const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="user" />
            <TextField source="order_date" />
            <TextField source="total_amount" />
            <TextField source="status" />
            <JsonField
            source="items"
            jsonString={false} // Set to true if the value is a string, default: false
            reactJsonOptions={{
            // Props passed to react-json-view
            name: null,
            collapsed: true,
            enableClipboard: false,
            displayDataTypes: false,
            }}
            />
        </SimpleShowLayout>
    </Show>
    )

