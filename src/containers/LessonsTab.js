import React from 'react'
import LessonServiceRename from '../services/LessonServiceRename'
export default class LessonTabs
    extends React.Component {

    constructor(){
        super();
        this.lessonService = LessonServiceRename.instance;
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
            if(this.state.highlight==lesson.id){
                return  <li className="nav-item bg-secondary">
                    <a className="text-white nav-link active" onClick={this.lessonSelected}
                       href="#" id={lesson.id}>{lesson.title}
                       <i className=" pl-2 fa fa-trash" onClick={this.deleteLesson}/>
                    </a></li>;}

            else{
            return  <li className="nav-item">
                <a className="text-white nav-link" onClick={this.lessonSelected}
                                                href="#" id={lesson.id}>{lesson.title}
                 <i className=" pl-2 fa fa-trash" onClick={this.deleteLesson}/></a></li>;}
        },this);
        return lessons;
    }
    render() {
        return(
        <ul className=" nav">
            {this.renderListofLessons()}
            <li className="nav-item pt-2 pl-1" >
                <input placeholder="Lesson Name" className="nav-item" id="moduleid"/>
                <i className=" ml-2 pb-2 fa fa-plus btn bg-white" on onClick={this.addLesson}/>
            </li>
        </ul>
    );}}