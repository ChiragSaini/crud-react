import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import EditForm from './routes/EditForm';
import CreateUser from './routes/CreateUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} key="home" />
            <Route path="/edit/:id" exact element={<EditForm />} key="edit" />
            <Route path="/create" exact element={<CreateUser />} key="create" />
        </Routes>
    </Router>,
    document.getElementById('root')
);
