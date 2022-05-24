import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
    return (
        <div className="App">
            <ToDoList title={"What to do"}/>  {/* ToDoList({title: "What to do"}) это то, что под капотом*/}
            <ToDoList title={"What to learn"}/>
            <ToDoList title={"What to buy"}/>
            <ToDoList title={"What to read"}/> 
            {/* <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={false}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div> */}
        </div>
    );
}

export default App;
