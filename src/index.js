import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-toggle/css/bootstrap-toggle.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/customcss.css'
import CourseManager from "./containers/CourseManager";

ReactDOM.render(
    <div>
    <CourseManager/>
    </div>
    ,
    document.getElementById('root')
);
