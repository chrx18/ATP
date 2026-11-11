import { useEffect, useState } from 'react';
import { obtenerDoubles } from '../service/atpService';
import PlayerCard from '../components/PlayerCard';

function Doubles() {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        obtenerDoubles()
            .then(data => setJugadores(data))
            .catch(error => console.log(error.message));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mb-3 mt-1">ATP TOP 10 DOUBLES</h1>

            <div className="row">
                {jugadores.map(jugador => (
                    <div className="col-md-4 mb-4 mx-auto" key={jugador.id}>
                        <PlayerCard jugador={jugador} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doubles;