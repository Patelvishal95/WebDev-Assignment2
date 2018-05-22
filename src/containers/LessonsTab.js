import React from 'react'
import LessonService from '../services/LessonService'
export default class LessonTabs
    extends React.Component {

    constructor(){
        super();
        this.LessonService = LessonService.instance;
    }

    findallLesson(){
       var lessons =  this.LessonService.findAllLesson();
       console.log(lessons);
    }
    render() { return(
        <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active"
                                        href="#">Active Tab</a></li>
            <li className="nav-item"><a className="nav-link"
                                        href="#">Another Tab</a></li>
        </ul>
    );}}