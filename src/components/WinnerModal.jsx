import { Square } from "./Square"

// eslint-disable-next-line react/prop-types
export function WinnerModal ({ resetGame, winner }) {
    if (winner === null) return null

    const winnerText = winner === false ? "Tie" : "Winner is:"

    return (
        <section className="winner">
          <div className="text">
            <h2>
            { winnerText }
            </h2>

            <header className="win">
            {winner && <Square>{winner}</Square>}
            </header>

            <footer>
            <button onClick={resetGame}>Play again</button>
            </footer>
          </div>
        </section>
    )
}