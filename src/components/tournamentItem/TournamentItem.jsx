import React from 'react';
import './TournamentItem.less';

const TournamentItem = ({ name, type, status, prizePool, time, players }) => {
    const isCanceled = status === 'CANCELED';

    return (
        <div className='tournament__item'>
            <div className={`left-column ${isCanceled ? 'left-column_grey' : ''}`}>
                {status}
            </div>
            <div className='right-column'>
                <div className='center-block'>
                    <div>
                        <div className='badges'>
                            <p className='type'>{type}</p>
                        </div>
                        {/* <img></img> */}
                        <p className='name'>{name}</p>
                    </div>

                    <button className={`button ${isCanceled ? 'button_grey' : ''}`}>{isCanceled ? 'CANCELLED' : 'JOIN TABLE'}</button>
                </div>
                <div className='bottom-block'>
                    <div className='bottom-block__item time'>{time}</div>
                    <div className='bottom-block__item players'>{players.current}/{players.max}</div>
                    <div className='bottom-block__item prizePool'> {prizePool}</div>
                </div>
            </div>

        </div>
    )
}

export default TournamentItem;