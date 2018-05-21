import React from 'react';

export default class ModuleListItem
    extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.module);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                <span className="float-right" id={this.props.id}>
                    <i className="fa fa-trash"></i>
                    <i className="fa fa-pencil"></i>
                </span>
            </li>
        );
    }
}