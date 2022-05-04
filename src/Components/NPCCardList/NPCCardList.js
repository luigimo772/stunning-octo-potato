import NPCCard from '../NPCCard/NPCCard';
import Container from '@material-ui/core/Container';

const NPCCardList = (props) => (
    <Container>
        {props.npcData.map(npc => <NPCCard key={npc.id} {...npc}/>)}
    </Container>
);

export default NPCCardList;