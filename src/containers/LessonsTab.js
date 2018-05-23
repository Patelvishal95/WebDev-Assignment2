import React from 'react'
import LessonService from '../services/LessonService'
export default class LessonTabs
    extends React.Component {

    constructor(){
        super();
        this.lessonService = LessonService.instance;
        this.addLesson = this.addLesson.bind(this);
        this.lessonSelected = this.lessonSelected.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.state = {
            highlight:'',
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
        this.lessonService.findAllLesson(moduleId).then(
             (response) => {
                this.setState({Lessson:response});

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
        var toadd = event.target.parentNode.childNodes[0].value;
        console.log(toadd)
        if(toadd===''){
            toadd = 'Lesson Template'
        }
        this.lessonService
            .addLesson({
                    title : toadd
                },this.state.moduleId).then(() => {this.findAllLesson(this.state.moduleId)});
    }
    lessonSelected(event){
        this.setState({highlight:event.target.getAttribute('id')})
    }
    deleteLesson(event){
        var confirmation = window.confirm("Are you sure you want to delete "+event.target.parentNode.getAttribute('id'))
        if(confirmation)
        {console.log(event.target.parentNode.getAttribute('id'));
        this.lessonService.deleteLesson(event.target.parentNode.getAttribute('id'),this.state.moduleId)
            .then(()=>(this.findAllLesson(this.state.moduleId)));}
    }
    renderListofLessons(){
        let lessons = this.state.Lessson.map(function(lesson){
            if(this.state.highlight===lesson.id){return  <li className="nav-item"><a className="nav-link active" onClick={this.lessonSelected}
                                                                                     href="#" id={lesson.id}>{lesson.title}<i className=" pl-2 fa fa-trash" onClick={this.deleteLesson}></i></a></li>;}
            else{
            return  <li className="nav-item"><a className="nav-link" onClick={this.lessonSelected}
                                                href="#" id={lesson.id}>{lesson.title}<i className=" pl-2 fa fa-trash" onClick={this.deleteLesson}></i></a></li>;}
        },this);
        return lessons;
    }
    render() {
        return(
        <ul className="nav nav-tabs">
            {/*<li className="nav-item"><a className="nav-link active"*/}
                                        {/*href="#">Module is {this.state.moduleId} </a></li>*/}
            {this.renderListofLessons()}
            <li className="nav-item pt-2 pl-1">
                <input className="nav-item" id="moduleid"/>
                <i className="fa fa-plus btn" on onClick={this.addLesson}/>
            </li>
        </ul>
    );}}