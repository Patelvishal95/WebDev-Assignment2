import React from 'react';
class CourseRow extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div>
            <tr><td>Course Row</td></tr>
            <tr><td>{this.props.course.title}</td></tr>
            </div>
    )}}

export default CourseRow;