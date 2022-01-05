
// in src/posts.js
import {
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Show, RichTextField, TabbedShowLayout, Tab,
    SimpleList
} from 'react-admin';

const PokemonTitle = ({ record }: any) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PokemonFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Pokemon" reference="pokemon" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];


export const PokemonCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput multiline source="type" />
        </SimpleForm>
    </Create>
);



export const PokemonShow = (props: any) => {
    console.log(props)
    return (
        <Show {...props}>
            <TabbedShowLayout>
                <Tab label="Pokemon">
                    <TextField source="name" />
                    <TextField source="id" />
                    <TextField label="Type" source="types[0].type.name" />
                    <RichTextField source="height" />
                </Tab>
                <Tab label="Powers">
                    <TextField label="Ability" source="abilities[1].ability.name" />
                    <TextField label="Ability" source="abilities[0].ability.name" />
                </Tab>
                <Tab label="History">
                    <TextField label="Game versions" source="game_indices[0].version.name" />
                    <TextField label="" source="game_indices[1].version.name" />
                    <TextField label="" source="game_indices[2].version.name" />
                </Tab>

            </TabbedShowLayout>

        </Show>
    )
};

export const pokemonEdit = (props: any) => (
    <Edit title={<PokemonTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput label="Name" source="name" />
            <TextInput label="Type" source="types[0].type.name" />
        </SimpleForm>
    </Edit>
);