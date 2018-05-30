import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from './WidgetContainer'
import Draggable from 'react-draggable';

class WidgetList extends Component {

    constructor(props) {
        super(props)

        this.props.findAllWidgets(this.props.match.params.lessonId)
        this.state = {lessonId: ''};
        this.setState({lessonId:this.props.match.params.lessonId})
        this.save=this.save.bind(this);
    }
    componentDidUpdate(newprops){
        if(this.props.match.params.lessonId!==newprops.match.params.lessonId){
            this.props.findAllWidgets(this.props.match.params.lessonId)
            if(this.props.needsSaving){
                var action = window.confirm('Do you want to save the changes')
                if(action){
                    this.props.save(newprops.match.params.lessonId)
                }
            }
        }
    }
    componentWillUnmount(){
        if(this.props.needsSaving){
            var action = window.confirm('Do you want to save the changes')
            if(action){
                this.props.save(this.props.match.params.lessonId)
            }
        }
    }

    save(){
        this.props.save(this.props.match.params.lessonId);
        this.setState({saved:1})
    }
    render() {
        return(
            <div className="container flex-fill col">
                <div className="row-3 clearfix align-right">
                    {this.props.unique && <label className="switch pull-right my-auto">
                        <input type="checkbox" onClick={this.props.preview}/>
                        <span className="slider round"></span>
                    </label> }
                    {this.props.unique && <h5 className="pull-right my-auto">Preview</h5>}
                    {this.props.unique && <button className="btn btn-success pull-right"  onClick={this.save}>
                        Save
                    </button>}
                    {!this.props.unique && <h4 className="bg-danger text-white">All Widget Names Should be Unique and add widget names to every widget</h4>}
                </div>
                {/*<draggable className="container height-100 width-100 px-0">*/}
                <ul className="list-unstyled px-0">
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         preview={this.props.previewMode}
                                         key={widget.id}/>
                    ))}
                </ul>
                {/*</draggable>*/}
                <button className="btn btn-danger float-right mx-0" onClick={this.props.addWidget}>   +     </button>
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview,
    lessonId:state.lessonId,
    unique:state.unique,
    needsSaving:state.needsSaving,
    state:state
})
const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: (lessonId) => actions.findAllWidgets(dispatch,lessonId),
    addWidget: () => actions.addWidget(dispatch),
    save: (lessonId) => actions.save(dispatch,lessonId),
    preview: () => actions.preview(dispatch)
})
const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList)

export default App