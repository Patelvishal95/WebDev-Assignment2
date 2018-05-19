import React from 'react';
class CourseRow extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div>
            <tr><td id={this.props.course.id}>{this.props.course.title}</td></tr>
            </div>
    )}}

export default CourseRow;