import React, { useEffect, useState } from 'react';
import Spinner from '../components/spinner/Spinner';
import PlayerInfo from '../components/playerInfo/PlayerInfo';
import Loader from '../components/loader/Loader';
import TournamentItem from '../components/tournamentItem/TournamentItem';
import './Mainpage.less';

const MainPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data.json`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <main className='main'>
            <h1 className='title'>Poker</h1>
            <Spinner />
            <PlayerInfo />
            <Loader />

            <section className='tournament'>
                {data.length > 0 && (
                    data.map((item) => (
                        <TournamentItem
                            key={item.id}
                            name={item.name}
                            type={item.type}
                            status={item.status}
                            players={item.players}
                            time={item.time} s
                            prizePool={item.prizePool}
                        />
                    ))
                )}
            </section>
        </main>
    )
}

export default MainPage;