import React from 'react';
import CourseEditor from "../containers/CourseEditor";
import LessonsTab from "../containers/LessonsTab"

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete (event){
        this.props.onModuleDelete(event.target.parentNode.parentNode.getAttribute('id'));
    }

    render() {
        return (
            <li  id={this.props.id} className="list-group-item">
                <Link to={`/course/${this.props.courseId}/edit/${this.props.module.id}`}  component={LessonsTab}>{this.props.module.title}</Link>
                <span className="float-right" >
                    <i className="fa fa-trash" onClick={this.delete}></i>
                </span>
            </li>
        );
    }
}