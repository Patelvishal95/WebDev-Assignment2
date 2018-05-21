import React from 'react';
import ModuleService from '../services/ModuleService';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.moduleService = ModuleService.instance;
    }
    delete (event){
        console.log(event.target.parentNode.getAttribute('id'));
        this.moduleService
            .deleteModule(event.target.parentNode.getAttribute('id'));

    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                <span className="float-right" id={this.props.id}>
                    <i className="fa fa-trash" onClick={this.delete}></i>
                </span>
            </li>
        );
    }
}