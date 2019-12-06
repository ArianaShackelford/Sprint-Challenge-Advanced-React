import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = props => {
    return (
        <div>
            {props.players.map(player =>(
                <PlayerCard key={player.id} player={player}/>
            ))}
        </div>
    )
}

export default PlayerList;