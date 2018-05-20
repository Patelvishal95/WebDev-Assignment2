import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ModuleList from "../containers/ModuleList";

class CourseRow extends React.Component {
constructor()
{
    super()
    this.courseClicked = this.courseClicked.bind(this);
}

courseClicked(event){
    console.log(event.target.parentNode.getAttribute('id'));

}
    render() {
        return (
            <tr id={this.props.course.id}>
              <Router>
                  <td  onClick={this.courseClicked} >
                      <Link to={`/course/${this.props.course.id}/edit`}>

                          {this.props.course.title}
                          </Link>
                  </td>

                </Router>
                <td> {this.props.course.created.substring(0,10)}</td>
                <td> {this.props.course.modified.substring(0,10)}</td>
                <td><button className="btn btn-danger btn-block align " onClick={this.props.deletefunction}>Delete</button></td>
            </tr>

    )}}

export default CourseRow;