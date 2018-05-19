import React from 'react';
import CourseList from './CourseList';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header'
class CourseManager extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                    <h1>Course Manager</h1>
                    <CourseList/>
            </div>
        )
    }
}
export default CourseManager;