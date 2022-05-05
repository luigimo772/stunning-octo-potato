import NPCCard from '../NPCCard/NPCCard';
import Container from '@material-ui/core/Container';

const NPCCardList = (props) => (
    <Container>
        {props.allNPCs.map(npc => <NPCCard key={npc.id} {...npc}/>)}
    </Container>
);

export default NPCCardList;