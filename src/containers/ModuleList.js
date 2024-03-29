import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleServiceClient from '../services/ModuleServiceClient'

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleSelected:'',
            module: { title: '' },
            modules: [
                {title: 'Module 1', id: 123},
            ]
        };
        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.onModuleDelete = this.onModuleDelete.bind(this);
        this.setCourseId =
            this.setCourseId.bind(this);

        this.moduleService = ModuleServiceClient.instance;
    }
    setModules(modules) {
        this.setState({modules: modules})
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)});
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
        this.moduleService
            .createModule(this.props.courseId, this.state.module).then(
            () => this.findAllModulesForCourse(this.state.courseId));
    }
    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    renderListOfModules() {
        let modules = this.state.modules.map(function(module){
            return <ModuleListItem courseId={this.state.courseId} onModuleDelete={this.onModuleDelete} module={module}
                                   id={module.id}/>
        },this);
        return modules;
    }
    onModuleDelete(moduleid){
        this.moduleService
            .deleteModule(moduleid).then(() => {this.findAllModulesForCourse(this.state.courseId)});
    }



    render() {
        return (
            <div>
                {/*<h3>Module List for course: {this.state.courseId}</h3>*/}
                <input onChange={this.titleChanged}
                       value={this.state.module.title}
                       placeholder="Module Name"
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