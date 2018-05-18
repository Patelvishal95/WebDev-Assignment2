import React from 'react';
import CourseRow from './CourseRow';

class CourseList extends React.Component {
    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table>
                    <thead><tr><th>Title</th></tr></thead>
                    <tbody>
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                    </tbody>
                </table>
            </div>
        )}}
export default CourseList;
