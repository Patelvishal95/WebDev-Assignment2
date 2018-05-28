import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions"
import WidgetContainer from './WidgetContainer'

class WidgetList extends Component {
  constructor(props) {
    super(props)
    this.props.findAllWidgets()
  }
  render() {
    return(
      <div className="container">
          <div className="row">
        <h1>Widget List {this.props.widgets.length}</h1>

          <button  type="button" className="btn btn-toggle" data-toggle="button" aria-pressed="false"
                   onClick={this.props.preview}>
              Preview
          </button>
        <button className="btn btn-success " hidden={this.props.previewMode} onClick={this.props.save}>
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
  findAllWidgets: () => actions.findAllWidgets(dispatch),
  addWidget: () => actions.addWidget(dispatch),
  save: () => actions.save(dispatch),
  preview: () => actions.preview(dispatch)
})
const App = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default App