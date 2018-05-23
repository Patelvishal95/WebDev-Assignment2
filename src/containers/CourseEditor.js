import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import ModuleList from './ModuleList';
import LessonTabs from './LessonsTab';
import CourseService from '../services/CourseService';
class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '',
            moduleId:'',courseName:''};
        this.courseService= CourseService.instance;
        this.selectCourse = this.selectCourse.bind(this);
        this.getCourseName();
    }

    getCourseName(){
        this.courseService
            .getCourseName(this.props.match.params.courseId).then( (response) =>{
            this.setState({courseName:response.title});
            console.log("after set state")
        })
    }
    componentWillReceiveProps (){
        this.selectCourse
        (this.props.match.params.courseId);
    }
    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }
    render() { return(
        <Router>
            <div>
            <h2 className="navbar navbar-light bg-dark text-light">Course: {this.state.courseName}</h2>

            <div className="row ">
                <div className="col-3">
                    <ModuleList selectedmodule = {this.selectedModule} courseId={this.state.courseId}/>
                </div>
                <div className="col-8">
                    <Route path="/course/:courseId/edit/:moduleId"
                           component={LessonTabs}>
                    </Route>
                </div>
            </div>
            </div>
        </Router>
    );}
}
export default CourseEditor;