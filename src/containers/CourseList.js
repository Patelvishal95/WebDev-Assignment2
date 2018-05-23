import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseServiceClient from '../services/CourseServiceClient';
import TableHead from '../components/TableHead';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseEditor from "./CourseEditor";

class CourseList extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = CourseServiceClient.instance;
        this.state = {courses: []};
        this.onClick = this.onClick.bind(this);

        this.titleChanged = this.titleChanged.bind(this);
        this.AddCourse = this.AddCourse.bind(this);
        this.sortbycreatedate =this.sortbycreatedate.bind(this);
        this.sortbydatemodified=this.sortbydatemodified.bind(this);
        this.createdflag=0;
        this.modifiedflag=0;
        this.sorted=0;
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

    courseClicked(id){
        console.log(id)
    }
    courseRows() {
        console.log(this.sorted)
        var rows;
        if((this.sorted%2)==0) {
            rows = this.state.courses.map(function (course) {
                return <CourseRow date='' datecount='' key={course.id} course={course} courseclicked={this.courseClicked}
                                  deletefunction={this.onClick}/>
            }, this);
        }
        else
        {

            var yesterday = this.addDays(new Date(),-1)
            var lastweek = this.addDays(new Date(),-7)
            var sixmonthsago = ( this.addMonths(new Date(), -6));
            var yearago =  this.addMonths(new Date(), -12)

            var yesterdaycount = 0
            var lastweekcount = 0
            var sixmonthsagocount = 0
            var yearagocount =0

            rows = this.state.courses.map(function (course) {
                if(new Date(course.created).getTime()>yesterday){
                    yesterdaycount++;
                    console.log("yesterdaycount")
                    console.log(yesterdaycount)
                   return (<CourseRow key={course.id} date='yesterday' datecount={yesterdaycount}course={course} courseclicked={this.courseClicked}
                                            deletefunction={this.onClick}/>)

                }
                if(new Date(course.created).getTime()>lastweek){
                    lastweekcount++;
                    console.log("lastweekcount")
                    console.log(lastweekcount)
                    return (<CourseRow key={course.id} date='lastweek' course={course} datecount={lastweekcount} courseclicked={this.courseClicked}
                                            deletefunction={this.onClick}/>)

                }
                if(new Date(course.created).getTime()>sixmonthsago){
                    sixmonthsagocount++;
                    console.log("sixmonthsagocount")
                    console.log(sixmonthsagocount)
                    return (<CourseRow key={course.id} date='sixmonthsago' course={course}  datecount={sixmonthsagocount}courseclicked={this.courseClicked}
                                            deletefunction={this.onClick}/>)

                }
                if(new Date(course.created).getTime()>yearago){
                    yearagocount++;
                    console.log("yearagocount")
                    console.log(yearagocount)
                    return (<CourseRow key={course.id} date='yearago' course={course} datecount={yearagocount} courseclicked={this.courseClicked}
                                            deletefunction={this.onClick}/>)

                }
            }, this,yesterday,lastweek,sixmonthsago,yearago,yesterdaycount,lastweekcount,sixmonthsagocount,yearagocount);
        }
        return (
            rows
        )}
    addMonths(date, months) {
        date.setMonth(date.getMonth() + months);
        return date;
    }
    addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    }
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
sortbycreatedate(){
    if(((this.createdflag++)%2) === 0) {
        var array = this.state.courses;
    array.sort(function(a, b) {
        a = new Date(a.created);
        b = new Date(b.created);
        return a>b ? -1 : a<b ? 1 : 0;
    });
    this.setState({courses:array})
    }
    else{
        var array = this.state.courses;
        array.sort(function(a, b) {
            a = new Date(a.created);
            b = new Date(b.created);
            return a>b ? 1 : a<b ? -1 : 0;
        });
        this.setState({courses:array})
    }
    this.sorted++;
}
sortbydatemodified(){
    if(((this.modifiedflag++)%2) === 0) {
        var array = this.state.courses;
        array.sort(function(a, b) {
            a = new Date(a.modified);
            b = new Date(b.modified);
            return a>b ? -1 : a<b ? 1 : 0;
        });
        this.setState({courses:array})
    }
    else{
        var array = this.state.courses;
        array.sort(function(a, b) {
            a = new Date(a.modified);
            b = new Date(b.modified);
            return a>b ? 1 : a<b ? -1 : 0;
        });
        this.setState({courses:array})

    }
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
                    <TableHead sortbycreated={this.sortbycreatedate} sortbydatemodified={this.sortbydatemodified}/>
                    <tbody id="tbody">

                    {this.courseRows()}
                    </tbody>
                </table>
            </div>
        )}


}
export default CourseList;
