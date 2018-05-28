import React from  'react'
import {connect} from 'react-redux'
import * as constants from "../constants/index"

import HeadingContainer from './HeadingContainer'
import ParagraphContainer from './ParagraphContainer'
import ListContainer from './ListContainer'
import ImageContainer from './ImageContainer'
import LinkContainer from './LinkContainer'
import * as actions from "../actions";

const WidgetContainer = ({widget, preview, dispatch,deleteWidget,increaseOrder,decreaseOrder,selectWidgetType}) => {
    let selectElement
    return(
        <li className="list-group-item m-2">
            <div hidden={preview}>
                {/*{widget.id} {widget.className}*/}

                <button className="m-1 btn btn-sm btn-danger float-right fa fa-close" onClick={() =>deleteWidget(widget)}> </button>
                <select className="m-1 float-right" value={widget.className}
                        onChange={e => selectWidgetType(widget,selectElement)
                        } ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select><button className=" m-1 bg-warning fa fa-arrow-up float-right"
                                 onClick={() => ( decreaseOrder(widget))}> </button>
                <button className=" mt-1 bg-warning fa fa-arrow-down float-right"
                        onClick={() => (increaseOrder(widget))}> </button>




            </div>
            <div className='border m-2 container-fluid'>
                {widget.className==='Heading' && <HeadingContainer widget={widget}/>}
                {widget.className==='Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.className==='List' && <ListContainer widget={widget}/>}
                {widget.className==='Image' && <ImageContainer widget={widget}/>}
                {widget.className==='Link' && <LinkContainer widget={widget}/>}
            </div>
        </li>
    )
}
const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    deleteWidget: (widget) => actions.deleteWidget(dispatch,widget),
    increaseOrder:(widget) => {actions.increaseOrder(dispatch,widget)
        actions.sortWidgets(dispatch)    },
    decreaseOrder:(widget) => { actions.decreaseOrder(dispatch,widget)
        actions.sortWidgets(dispatch)   },
    selectWidgetType:(widget,selectElement) => actions.selectWidgetType(dispatch,widget,selectElement)
})
const WidgetContainerconnect = connect((state => ({
    preview: state.preview
})), dispatcherToPropsMapper)(WidgetContainer)
export default WidgetContainerconnect
