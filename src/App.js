import React from 'react';
import TaskListContextProvider from './context/TaskListContext';
import TaskList from './componenet/TaskList';
import TaskForm from "./componenet/TaskForm"
import Header from "./componenet/Header"

import "./App.css"

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
}

export default App;
