import './App.css';
import React, {useEffect, useState} from "react";
import MainPage from "./Pages/MainPage";

function App() {
    const [playerName, setPlayerName] = useState("");
    const [bestScore, setBestScore] = useState(0);
    const [isAuthorized, setAuthorized] = useState(false);

    useEffect(() => {
        setBestScore(localStorage.getItem("score"))
    }, [bestScore]);

    function handleSubmit(event) {

        event.preventDefault()
        setAuthorized(!isAuthorized);
    }

    console.log(playerName)

    return (
        <div className="App">
            {isAuthorized ? <MainPage name={playerName} bestScore={bestScore} />
                :
                <form onSubmit={handleSubmit}>
                    <p>Best Score : {bestScore}</p>
                    insert your name
                    <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
                    <input type="submit" value="submit"/>
                </form>
            }


        </div>
    );
}

export default App;
