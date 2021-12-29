// in src/posts.js
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
} from 'react-admin';

export const PostList = (props:any) => {
    return (
        <List  {...props}>

                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
        </List>
    );
}