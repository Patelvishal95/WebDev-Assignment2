import React from 'react';

class CourseRow extends React.Component {


    render() {
        return (

            <tr id={this.props.course.id}>
                <td className="" >{this.props.course.title}</td>
                <td> {this.props.course.created.substring(0,10)}</td>
                <td> {this.props.course.modified.substring(0,10)}</td>
                <td><button className="btn btn-danger btn-block align " onClick={this.props.deletefunction}>Delete</button></td>
            </tr>

    )}}

export default CourseRow;