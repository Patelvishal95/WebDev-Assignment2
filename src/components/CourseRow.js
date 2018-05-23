import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ModuleList from "../containers/ModuleList";
import CourseEditor from "../containers/CourseEditor";

class CourseRow extends React.Component {
constructor(props)
{
    super(props);
    this.courseClicked = this.courseClicked.bind(this);
}

courseClicked(event){
    console.log(event.target.parentNode.getAttribute('id'));

}
    generateElement(){
         if(this.props.date)
         {
             if(this.props.datecount===0)
             {
                 return this.generateSeperators();
             }
             else{
                 return this.normalRow();
             }

         }
         else{
         return this.normalRow();}
    }

    generateSeperators() {

        console.log("sperator")
        return this.normalRow();
}

normalRow(){
    return(<tr id={this.props.course.id}>

        <td>

            <Link to={`/course/${this.props.course.id}/edit`} component={CourseEditor}>

                {this.props.course.title}
            </Link>

        </td>


        <td> {this.props.course.created.substring(0,10)}</td>
        <td> {this.props.course.modified.substring(0,10)}</td>
        <td><button className="btn btn-danger btn-block align " onClick={this.props.deletefunction}>Delete</button></td>
    </tr>)
}
    render() {
    //
    // if(this.props.date)
    //     console.log("in course row")
    //     console.log(this.props)
        return (

            this.generateElement()



    )}}

export default CourseRow;