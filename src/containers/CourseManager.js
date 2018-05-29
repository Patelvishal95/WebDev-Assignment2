import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from '../containers/CourseList';
import CourseEditor from '../containers/CourseEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class CourseManager extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (

            <Router>
                <div>
                <Route path="/courses"
                   component={CourseList}>
                </Route>
                <Route path="/course/:courseId/edit"
                       component={CourseEditor}>
                </Route>
                </div>
            </Router>

        )
    }
}
export default CourseManager;