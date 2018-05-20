import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';
import TableHead from '../components/TableHead';

class CourseList extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.onClick = this.onClick.bind(this);

        this.titleChanged = this.titleChanged.bind(this);
        this.AddCourse = this.AddCourse.bind(this);
    }
    componentDidMount() {
        this.findAllCourses();
    }
    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }
    onClick (event){
        this.deleteCourse(event.target.parentNode.parentNode.getAttribute('id'))

    }

    deleteCourse(id) {
        this.courseService.deleteCourse(id).then(() => { this.findAllCourses(); });

    }


    courseRows() {

        var rows = this.state.courses.map(function(course) {
            return <CourseRow key={course.id} course={course} deletefunction={this.onClick} />
        },this);
        return (
            rows
        )}

    AddCourse(course){
        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); })};

    titleChanged(event){
        this.setState({
            course: { title: event.target.value,
                created:new Date(),
                modified:new Date()
            }
        });
    }

    render() {

        return (
            <div className="flex-fill">
                <nav className="navbar navbar-default navbar-fixed-top bg-primary text-white">

                    <div className="navbar-header">
                        <label className="navbar-brand text-white" >Course Manager</label>
                    </div>
                    <form className="form" >
                        <input className="input px-2" type="text" onChange={this.titleChanged}></input>
                        <button className="btn btn-danger px-2" type='button' onClick={this.AddCourse}> Add Course</button>
                    </form>
                </nav>
                <table className="table table-hover" id='table'>
                    <TableHead/>
                    <tbody id="tbody">
                    {this.courseRows()}
                    </tbody>
                </table>
            </div>
        )}


}
export default CourseList;
