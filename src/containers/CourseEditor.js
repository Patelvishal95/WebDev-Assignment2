import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {widgetReducer} from "../reducers/widgetReducer"
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import App from '../containers/widgetList'
import ModuleList from './ModuleList';
import LessonTabs from './LessonsTab';
import CourseServiceClient from '../services/CourseServiceClient';


let store = createStore(widgetReducer);
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
    componentWillReceiveProps (newprops){
        this.setState({moduleId:newprops.match.params.moduleId});

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
            <div className="fill">
                <div className="row bg-dark fill">
                    <div className="col-3 fill">
                        <h2 className="navbar navbar-light  text-light">Course: {this.state.courseName}</h2>
                    </div>
                    <div className="col-7 float-right pt-2 pb-2">
                        <Route path="/course/:courseId/edit/:moduleId"
                               component={LessonTabs}>
                        </Route>
                    </div>
                </div>
            <div className="row flex-fill mh-100">
                <div className="col-3 mt-2 h-100 flex-fill">
                    <ModuleList selectedmodule = {this.selectedModule} courseId={this.state.courseId}/>
                </div>
                <div className="col-9 mt-2 bg-light mh-100">
                    <Provider store={store}>
                    <Route path="/course/:courseId/edit/:moduleId/lesson/:lessonId"
                    component={App}>
                    </Route>
                    </Provider>
                </div>

            </div>
            </div>
        </Router>
    );}
}
export default CourseEditor;