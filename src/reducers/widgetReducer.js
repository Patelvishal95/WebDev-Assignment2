import * as constants from "../constants/index"

export const widgetReducer = (state = {widgets: [], preview: false,unique:true,needsSaving:false}, action) => {
    let newState
    function GetSortOrder(id) {
        return function (a, b) {
            if (a[id] > b[id]) {
                return 1;
            } else if (a[id] < b[id]) {
                return -1;
            }
            return 0;
        }
    }

    switch (action.type) {

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview,
                unique : state.unique,
                needsSaving:state.needsSaving
            }

        case constants.LIST_TYPE_CHANGED:
            return {
                needsSaving:true,
                unique:state.unique,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.IMAGE_URL_CHANGED:
            return {unique:state.unique,needsSaving:true,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.LINK_URL_CHANGED:
            return {unique:state.unique,needsSaving:true,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.href = action.href
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.LINK_TEXT_CHANGED:
            return {unique:state.unique,needsSaving:true,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LIST_TEXT_CHANGED:
            return {unique:state.unique,needsSaving:true,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.HEADING_TEXT_CHANGED:
            return {unique:state.unique,needsSaving:true,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.PARAGRAPH_TEXT_CHANGED:
            return {unique:state.unique,needsSaving:true,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_SIZE_CHANGED:
            return {unique:state.unique,needsSaving:true,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.SELECT_WIDGET_TYPE:
            let newState = {unique:state.unique,needsSaving:true,
                widgets: state.widgets.filter((widget) => {
                    if (widget.id === action.id) {
                        widget.className = action.className
                        if (widget.className == 'List') {
                            widget.listType = 'Unordered';
                            widget.text = '';
                        }
                        if (widget.className == 'Image') {
                            widget.src = ''
                        }
                        if (widget.className == 'Link') {
                            widget.href = ''
                            widget.name = ''
                        }
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:
            fetch('http://localhost:8080/api/widget/'+action.lessonId, {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            })
            var newState1 = Object.assign({},state);
            newState1.needsSaving = false;
            return newState1

        case constants.FIND_ALL_WIDGETS:
            var newState2 = Object.assign({}, state);
            newState2.needsSaving = false;
            if (action.widgets.status === 500) {
                return newState2
            }
            else {
                newState2.widgets = action.widgets.sort(GetSortOrder('order1'))
                return newState2
            }

        case constants.DELETE_WIDGET:
            let newStatewidgets = Object.assign({}, state)
            let order=0
            let widgets = state.widgets.filter(widget =>(
                widget.id!==action.id
            ));
            newStatewidgets.widgets.map(widget =>{
                if(widget.id === action.id){
                    order=widget.order1;
                }
            })
            return {needsSaving:true,
                unique:state.unique,
                widgets: widgets.map(widget => {
                    if(widget.order1>order){
                        widget.order1=widget.order1-1;
                        return Object.assign({}, widget)
                    }
                    return Object.assign({}, widget)
                }           )
            }
        case constants.INCREASE_ORDER_WIDGET:
            if(action.order1 === state.widgets.length){
                return {unique:state.unique,needsSaving:true,
                    widgets:state.widgets.map(widget => {
                        return Object.assign({}, widget)
                    })
                }
            }
            else{
                return {unique:state.unique,needsSaving:true,
                    widgets:state.widgets.map(widget => {
                        if (widget.order1 === action.order1) {
                            widget.order1 = widget.order1+1
                        }
                        else if(widget.order1=== (action.order1 + 1)){
                            widget.order1 = widget.order1-1
                        }
                        return Object.assign({}, widget)
                    })
                }}
        case constants.DECREASE_ORDER_WIDGET:
            if(action.order1 === 1){
                return {unique:state.unique,needsSaving:true,
                    widgets:state.widgets.map(widget => {
                        return Object.assign({}, widget)
                    })
                }}
            else {

                return {unique:state.unique,needsSaving:true,
                    widgets: state.widgets.map(widget => {
                        if (widget.order1 === action.order1) {
                            widget.order1 = widget.order1 - 1
                        }
                        else if (widget.order1 === (action.order1 - 1)) {
                            widget.order1 = widget.order1 + 1
                        }
                        return Object.assign({}, widget)
                    })
                }
            }
        case constants.ADD_WIDGET:
            return {unique:state.unique,needsSaving:true,
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        order1: state.widgets.length + 1,
                        className: 'Heading',
                        size: '1'
                    }
                ]
            }

        case constants.SORT_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = newState.widgets.sort(GetSortOrder('order1'))
            return newState

        case constants.WIDGET_NAME_CHANGED:
            return {unique:state.unique,
                needsSaving:true,
                widgets: state.widgets.map(widget =>{
                    if (widget.id === action.widgetId) {

                        widget.widgetName=action.widgetName
                        return Object.assign({}, widget)
                    }else{
                        return Object.assign({}, widget)
                    }
                })}
        case constants.CHECK_UNIQUE:
            if(state.widgets.length===1||state.widgets.length===0){
                return {
                    widgets:state.widgets,
                    preview:state.preview,
                    unique:true,
                    needsSaving:true
                }
            }
            for(var flag1 in state.widgets){
                for(var flag2 in state.widgets){
                    if(flag1===flag2){continue;}
                    if(state.widgets[flag1].widgetName===state.widgets[flag2].widgetName){

                        return {needsSaving:true,
                            widgets:state.widgets,
                            preview:state.preview,
                            unique:false
                        }
                    }
                }
            }
            return {needsSaving:state.needsSaving,
                widgets:state.widgets,
                preview:state.preview,
                unique:true
            }
        default:
            return state
    }
}