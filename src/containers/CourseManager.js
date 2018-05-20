import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from '../containers/CourseList';

class CourseManager extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <CourseList />
        )
    }
}
export default CourseManager;