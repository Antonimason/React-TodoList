import React from 'react';

import './Card.css'
import Label from '../Label/Label';
import { VscIssues} from 'react-icons/vsc';
function Card (props) {
    
    const deleteTask = (dato) => {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].description === dato) {
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    let color;
    const label = (col) => {

        if (col === "urgent") {color = (<Label 
            name = "red"
            icon = <VscIssues/>
            color = "red"
          />)
        } else if (col === "normal"){
            color = (<Label 
                name = "green"
                icon = <VscIssues/>
                color = "green"
              />)
        } else if (col === "medium"){
            color = (<Label 
                name = "blue"
                icon = <VscIssues/>
                color = "blue"
              />)
        } else {
            color = (<Label 
                name = "blue"
                icon = <VscIssues/>
                color = "blue"
              />)
        }
    }
    
    return(
        <div className = "card--container">
            <div className="card-label" onLoad={label(props.label)}>{color}</div>
            <div className="card-info">
                <h2 className="card-name">{props.name}</h2>
                <p className="card-task">{props.task}</p>
            </div>
            <div className="card-date">{props.date}</div>
            <button type="submit" className="card-delete" onClick={(e)=>{deleteTask(props.task)

            }}>{props.image}</button>
        </div>
    )
}
export default Card