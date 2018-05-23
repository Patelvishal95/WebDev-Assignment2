import React from 'react'
import LessonService from '../services/LessonService'
export default class LessonTabs
    extends React.Component {

    constructor(){
        super();
        this.lessonService = LessonService.instance;
        this.addLesson = this.addLesson.bind(this);
        this.state = {
            courseId:'',
            moduleId:'',
            lessontoadd:'',
            lesson: { title: '' },
            Lessson:[{id:1, title:'Lesson 1'},
                {id:1, title:'Lesson 2'},
                {id:1, title:'Lesson 3'}]
        };
    }

    componentDidMount(){
        this.selectModule
        (this.props.match.params.moduleId);
        this.findAllLesson(this.props.match.params.moduleId);
    }

    findAllLesson(moduleId){
        console.log("in find all lesson")
        this.lessonService.findAllLesson(moduleId).then(
            function (response) {
                console.log(response);
            }
        )
    }
    selectModule(moduleId) {
        this.setState({moduleId:moduleId});
    }

    componentWillReceiveProps(newprops){
        this.selectModule
        (newprops.match.params.moduleId);
        this.findAllLesson(newprops.match.params.moduleId);
    }

    addLesson(event){
        this.setState({
            lesson: {
                title : event.target.parentNode.childNodes[0].value
            }
        });

        this.lessonService
            .addLesson({
                    title : event.target.parentNode.childNodes[0].value
                },this.state.moduleId);
    }

    renderListofLessons(){
        let lessons = this.state.Lessson.map(function(lesson){
            return  <li className="nav-item"><a className="nav-link active"
                                                href="#">{lesson.title}</a></li>;
        },this);
        return lessons;
    }
    render() {
        return(
        <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active"
                                        href="#">Module is {this.state.moduleId} </a></li>
            {this.renderListofLessons()}
            <li className="nav-item pt-2 pl-1">
                <input className="nav-item" id="moduleid"/>
                <i className="fa fa-plus btn" on onClick={this.addLesson}/>
            </li>
        </ul>
    );}}