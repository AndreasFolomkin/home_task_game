const entityList = [
    {
        id: 1,
        color: "black",
        isActive : false
    },
    {
        id: 2,
        color: "blue",
        isActive : false
    },
    {
        id: 3,
        color: "green",
        isActive : false
    },
    {
        id: 4,
        color: "red",
        isActive : false
    },
    {
        id: 5,
        color: "yellow",
        isActive : false
    },
    {
        id: 6,
        color: "purple",
        isActive : false
    },
];

let initialScore = localStorage.getItem('score');

export const initialBestScore = initialScore ? JSON.parse(initialScore) : 0;

export const initialEntityList = entityList;
