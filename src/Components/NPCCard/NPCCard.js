import Card from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';

class NPCCard extends React.Component {
    render() {
        const npcData = this.props;
        return (
           <Card maxWidth='xs' variant='outlined'>
               <CardContent align='left'>
                    <img src={npcData.image} alt='what the npc looks like'/>
                    <Typography color='textSecondary'>
                        Name 
                    </Typography>
                    <Typography variant='h6'>{npcData.name}</Typography>
                    <Typography color='textSecondary'>
                        Location 
                    </Typography>
                    <Typography variant='h6'>{npcData.location}</Typography>
                    <Typography color='textSecondary'>
                        Quote 
                    </Typography>
                    <Typography variant='h6'>{npcData.quote}</Typography>
               </CardContent>
           </Card> 
        );
    }
}

export default NPCCard;