import React from 'react';
import ModuleService from '../services/ModuleService';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.onModuleSelected = this.onModuleSelected.bind(this);
        this.moduleService = ModuleService.instance;
    }
    delete (event){
        console.log(event.target.parentNode.getAttribute('id'));
        this.moduleService
            .deleteModule(event.target.parentNode.getAttribute('id'));

    }
    onModuleSelected(event){
        this.props.moduleclicked(event.target.getAttribute('id'));
    }
    render() {
        return (
            <li onMouseDown={this.onModuleSelected} id={this.props.id} className="list-group-item">
                {this.props.module.title}
                <span className="float-right" >
                    <i className="fa fa-trash" onClick={this.delete}></i>
                </span>
            </li>
        );
    }
}