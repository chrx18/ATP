function PlayerCard({ jugador }) {
    return (
        <div className="card shadow h-100 border-3">
            <img src={jugador.avatar} className="card-img-top" alt={jugador.player} />
            <img src={jugador.flag} alt="Bandera" width="45" className="d-block mx-auto my-2" />

            <div className="card-body text-center">
                <h5 className="card-title">
                    #{jugador.rank} {jugador.player}
                </h5>

                <p className="card-text">
                    Edad: {jugador.age}
                </p>

                <p className="card-text">
                    Puntos: {jugador.points}
                </p>

                <p className="card-text">
                    Torneos: {jugador.tourn_played}
                </p>
            </div>
        </div>
    );
}

export default PlayerCard;