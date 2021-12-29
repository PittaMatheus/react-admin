import { Show, TextField, RichTextField, TabbedShowLayout, Tab } from 'react-admin';

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