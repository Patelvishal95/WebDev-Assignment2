import React from 'react';

import ModuleList from './ModuleList';
import LessonTabs from './LessonsTab';

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '',
            lessons:[
                {title: 'Lesson 1',id: 1},
                {title: 'Lesson 2',id: 2},
                {title:'Lesson 3', id: 3}
            ]};
        this.selectCourse = this.selectCourse.bind(this);

    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }
    render() { return(
        <div>
            <h2>Editing course: {this.state.courseId}</h2>
            <div className="row">
                <div className="col-3">
                    <ModuleList courseId={this.state.courseId}/>
                </div>
                <div className="col-8">
                    <LessonTabs />
                </div>
            </div>
        </div>
    );}
}
export default CourseEditor;