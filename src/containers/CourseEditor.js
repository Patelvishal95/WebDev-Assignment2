import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import ModuleList from './ModuleList';
import LessonTabs from './LessonsTab';
import CourseServiceClient from '../services/CourseServiceClient';
class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '',
            moduleId:'',courseName:''};
        this.courseService= CourseServiceClient.instance;
        this.selectCourse = this.selectCourse.bind(this);
        this.getCourseName();
    }

    getCourseName(){
        this.courseService
            .findCourseById(this.props.match.params.courseId).then( (response) =>{
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
                <div className="row bg-dark">
                    <div className="col-3">
            <h2 className="navbar navbar-light  text-light">Course: {this.state.courseName}</h2>
                    </div>
                    <div className="col-7 float-right pt-2 pb-2">
                        <Route path="/course/:courseId/edit/:moduleId"
                               component={LessonTabs}>
                        </Route>
                    </div>
                </div>
            <div className="row ">
                <div className="col-3">
                    <ModuleList selectedmodule = {this.selectedModule} courseId={this.state.courseId}/>
                </div>

            </div>
            </div>
        </Router>
    );}
}
export default CourseEditor;