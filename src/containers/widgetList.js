import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from './WidgetContainer'

class WidgetList extends Component {

  constructor(props) {
    super(props)
    this.props.findAllWidgets(this.props.match.params.lessonId)
      this.state = {selectlesson: ''};
      this.setState({selectlesson:this.props.match.params.lessonId})
      this.save=this.save.bind(this);
  }
    componentDidUpdate (newprops){
      console.log('in comns')
        if(newprops.match.params.lessonId!=this.state.selectlesson){
          this.runafterstatechange(newprops)
          }
    }
    runafterstatechange(newprops){
        this.setState({selectlesson:newprops.match.params.lessonId}),
            console.log("in find all widgets"),
        this.props.findAllWidgets(newprops.match.params.lessonId)

    }
    save(){
      this.props.save(this.state.selectlesson);
    }
  render() {
    return(
      <div className="container">
          <div className="row">
        <h1>Widget List {this.props.widgets.length}</h1>
              {/*<h1>Selected lesson {this.state.selectlesson}</h1>*/}
          <button  type="button" className="btn btn-toggle" data-toggle="button" aria-pressed="false"
                   onClick={this.props.preview}>
              Preview
          </button>
        <button className="btn btn-success " hidden={this.props.previewMode} onClick={this.save}>
          Save
        </button>
          </div>

<div >
        <ul className="">
          {this.props.widgets.map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.id}/>
          ))}
        </ul>
</div>
        <button className="btn btn-danger float-right mr-2" onClick={this.props.addWidget}>   +     </button>
      </div>
    )
  }
}

const stateToPropertiesMapper = (state) => ({
  widgets: state.widgets,
  previewMode: state.preview
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