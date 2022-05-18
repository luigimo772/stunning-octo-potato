import Card from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Typography from '@material-ui/core/Typography';

class NPCCard extends React.Component {
    render() {
        const npcData = this.props;
        return (
           <Card 
                maxWidth='xs' 
                variant='outlined' 
                style={{backgroundColor: "white"}}
            >
               <CardContent>
                    <img 
                        src={npcData.image} 
                        alt='what the npc looks like'
                    />
                    <Typography 
                        align='left' 
                        color='textSecondary'
                    >
                        Name 
                    </Typography>
                    <Typography 
                        align='left' 
                        variant='h6'
                    >
                        {npcData.name}
                    </Typography>
                    <Typography 
                        align='left' 
                        color='textSecondary'
                    >
                        Location 
                    </Typography>
                    <Typography
                        align='left' 
                        variant='h6'
                    >
                        {npcData.location}
                    </Typography>
                    <Typography
                        align='left' 
                        color='textSecondary'
                    >
                        Quote 
                    </Typography>
                    <Typography
                        align='left' 
                        variant='h6'
                    >
                        {npcData.quote}
                    </Typography>
               </CardContent>
           </Card> 
        );
    }
}

export default NPCCard;