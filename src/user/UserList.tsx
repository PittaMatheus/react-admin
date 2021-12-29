
import { ReactElement, ElementType, FC } from 'react';


import { List, Datagrid, TextField, EmailField } from 'react-admin';
// import MyUrlField from './MyUrlField';

import {
    ResourceComponentProps,
} from 'ra-core';

export interface ListProps extends ResourceComponentProps {

}


const UserList: FC<any> = props => {
    return (
    <List
     {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="url" />
        </Datagrid>
    </List>
    );
}

export default UserList