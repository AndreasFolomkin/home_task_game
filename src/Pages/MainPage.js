import React, {useState, useCallback} from 'react';
import {initialEntityList} from "../data/initialData";
import Entity from "../Components/Entity/Entity";
import "./MainPage.css";
import {initialBestScore} from "../data/initialData";


function MainPage({name,bestScore}) {
    const [entityList, setEntityList] = useState(initialEntityList);
    const [score, setScore] = useState(0);
    const [gameSequence, setGameSequence] = useState([]);
    const [countPlayerSequence, setCountPlayerSequence] = useState(1);

    function start() {
        let rnd = getRandom();
        let newEntityList = entityList;
        newEntityList[rnd].isActive = true;
        setEntityList([...newEntityList]);

        setTimeout(() => {
            newEntityList[rnd].isActive = false;
            setEntityList([...newEntityList]);
        }, 1000);
        setGameSequence([...gameSequence, newEntityList[rnd]]);
    }

    function continues() {
        let newEntityList = entityList;
        for (let i = 0; i < gameSequence.length; i++) {
            let index = newEntityList.findIndex((e) => {
                return e.id === gameSequence[i].id
            });
            setTimeout(() => {
                newEntityList[index].isActive = true;
                setEntityList([...newEntityList])
            }, 1000 * i)

            setTimeout(() => {
                newEntityList[index].isActive = false;
                setEntityList([...newEntityList])

            }, 1000 * i + 800)

        }
        setTimeout(() => {
            start()
        }, 1000 * gameSequence.length)
    }


    const handleClick = useCallback((id) => {
        setCountPlayerSequence(prevState => prevState + 1);
        setScore(prevState => prevState + 10);
        check(id)
    }, [countPlayerSequence, gameSequence]);


    function check(id) {
        if (gameSequence[countPlayerSequence - 1].id === id && countPlayerSequence === gameSequence.length) {
            alert("Excellent");
            setCountPlayerSequence(1);
            continues()
        } else if (gameSequence[countPlayerSequence - 1].id !== id) {
            alert("Error");
            setCountPlayerSequence(1);
            setGameSequence([]);
            if(score>initialBestScore)
            localStorage.setItem("score",JSON.stringify(score));
            setScore(0);

        }
    }

    function getRandom() {
        let max = entityList.length - 1;
        let rand = Math.random() * (max);
        return Math.round(rand);
    }

    return (
        <div>
            <div className="entity-list">
                {entityList.map((entity) => <Entity id={entity.id} color={entity.color} isActive={entity.isActive} key={entity.id} onCheck={handleClick}/>)}
            </div>
            <button onClick={() => start()}>Start</button>
            <div> Name : {name}</div>
            <div> Total Score : {score}</div>
            <div> Best Score : {bestScore}</div>
        </div>

    )
}

export default MainPage;
