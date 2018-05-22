import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleSelected:'',
            module: { title: '' },
            modules: [
                {title: 'Module 1', id: 123},
                {title: 'Module 2', id: 234},
                {title: 'Module 3', id: 345},
                {title: 'Module 4', id: 456},
                {title: 'Module 5', id: 567},
                {title: 'Module 6', id: 678}
            ]
        };
        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.moduleSelector = this.moduleSelector.bind(this);
        this.setCourseId =
            this.setCourseId.bind(this);

        this.moduleService = ModuleService.instance;
    }
    setModules(modules) {
        this.setState({modules: modules})
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    createModule() {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.props.courseId, this.state.module)
    }
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }
    moduleSelector(id){
        console.log("module selected");
        console.log(id);
        this.setState({moduleSelected:id});
    }
    renderListOfModules() {
        let modules = this.state.modules.map(function(module){
            return <ModuleListItem moduleclicked={this.moduleSelector} module={module}
                                   id={module.id}/>
        },this);
        return modules;
    }


    render() {
        return (
            <div>
                <h3>Module List for course: {this.state.courseId}</h3>
                <input onChange={this.titleChanged}
                       value={this.state.module.title}
                       placeholder="title"
                       className="form-control"/>
                <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                <br/>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}