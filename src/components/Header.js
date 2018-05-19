import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseService from "../services/CourseService";

class Header extends React.Component {
    constructor(){
        super();

        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.addCourse = this.addCourse.bind(this);
    }

    titleChanged(event){
        this.setState({
            course: { title: event.target.value }
        });
    }
    addCourse(){
        this.courseService
            .createCourse(this.state.course)
            .then(function (response){console.log(response)});
    }
    render() {
        return (
            <div>
            <nav className="navbar navbar-default navbar-fixed-top bg-primary text-white">

                <div className="navbar-header">
                    <label className="navbar-brand text-white" >WebSiteName</label>
                </div>
                <form className="form" >
                    <input className="input px-2" type="text" onChange={this.titleChanged}></input>
                    <button className="btn btn-danger px-2" type='button' onClick={this.addCourse}> Add Course</button>
                </form>


            </nav>
            </div>

        )}}
        export default Header;