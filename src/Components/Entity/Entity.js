import React from 'react';
import "./Entity.css";

function Entity({id, color, isActive,onCheck}) {

    return (

        <div className="entity"   style= {isActive ? {backgroundColor: color} :{backgroundColor: "gray"}} onClick={()=>onCheck(id)} >
            {id}
        </div>


    )
}

export default Entity;
