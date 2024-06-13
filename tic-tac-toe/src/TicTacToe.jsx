import React, { useEffect, useState } from 'react'
import './tictactoe.css'

let turns = 0;
export default function TicTacToe() {
    useEffect(() => {
        document.title = "Tic Tac Toe"
        setWin(checkResult())
    }, [turns])

    const [player1Turn, setPlayer1Turn] = useState(true)
    const [win, setWin] = useState('')
    const [tiles, setTiles] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ])

    const click = (i, j) => {
        if (tiles[i][j].length == 0) {
            const tempTile = [...tiles]
            tempTile[i] = [...tempTile[i]]
            tempTile[i][j] = player1Turn ? 'O' : 'X'
            setPlayer1Turn(e => !e)
            setTiles(tempTile)
            turns += 1
        }
    }

    const checkResult = () => {
        //this is for row checking
        for (let i = 0; i < 3; i++) {
            if (tiles[i][0] &&
                tiles[i][0] === tiles[i][1] &&
                tiles[i][1] === tiles[i][2]) {
                return tiles[i][0] == "O" ?
                    "Player 1 wins" : "Player 2 wins";
            }
        }
        //this is for column checking
        for (let j = 0; j < 3; j++) {
            if (tiles[0][j] &&
                tiles[0][j] === tiles[1][j] &&
                tiles[1][j] === tiles[2][j]) {
                return tiles[0][j] == "O" ?
                    "Player 1 wins" : "Player 2 wins";
            }
        }
        //this is for diagnal checking
        if (tiles[0][0] &&
            tiles[0][0] === tiles[1][1] &&
            tiles[1][1] === tiles[2][2]) {
            return tiles[0][0] == "O" ?
                "Player 1 wins" : "Player 2 wins";
        }
        //this is for diagnal checking
        if (tiles[0][2] &&
            tiles[0][2] === tiles[1][1] &&
            tiles[1][1] === tiles[2][0]) {
            return tiles[0][2] == "O" ?
                "Player 1 wins" : "Player 2 wins";
        }
        if (turns > 8) {
            return "Draw";
        }
        return ""
    }
    const restartGame = () => {
        turns = 0
        setWin('');
        setTiles([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
    }
    return (
        <div className='game-container'>
            <h3>Tic Tac Toe</h3>
            {win.includes("win") && <img src='./c2.gif' />}
            <p>Player {player1Turn ? '1' : '2'} turn</p>
            {
                tiles.map((row, index) => {
                    return <div key={index} className='flex'>
                        {row.map((e, index2) => {
                            return <div
                                className='cell'
                                key={index2}
                                onClick={
                                    () => {
                                        click(index, index2)
                                    }}
                            >{e}</div>
                        })}
                    </div>
                })
            }
            <p>{win.includes("win") ? `${win}🥳` : win}</p>
            <button onClick={restartGame}>Restart</button>
        </div>
    )
}
