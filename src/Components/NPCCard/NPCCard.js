import Card from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';

class NPCCard extends React.Component {
    render() {
        const npcData = this.props;
        return (
           <Card>
               <CardContent>
                    <img src={npcData.image} alt='what the npc looks like'/>
                    <Typography variant='h5'>{npcData.name}</Typography>
                    <Typography variant='h5'>{npcData.location}</Typography>
               </CardContent>
           </Card> 
        );
    }
}

export default NPCCard;