import * as constants from "../constants/index"

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const listTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LIST_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)
export const listTypeChanged = (dispatch, widgetId, ListType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: ListType})
)
export const imageURLChanged = (dispatch, widgetId, imageURL) => (
    dispatch({
        type: constants.IMAGE_URL_CHANGED,
        id: widgetId,
        src: imageURL})
)
export const linkURLChanged = (dispatch, widgetId, href) => (
    dispatch({
        type: constants.LINK_URL_CHANGED,
        id: widgetId,
        href: href})
)
export const linkTextChanged = (dispatch, widgetId, name) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        name: name})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
)

export const findAllWidgets = (dispatch,lessonId) => {
    fetch('http://localhost:8080/api/lesson/'+lessonId+'/widget')
        .then(response => (
            response.json())
            .then(widgets => dispatch({
                type: constants.FIND_ALL_WIDGETS,
                widgets: widgets })))
}
export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
)
export const save = (dispatch,lessonId) => (
    dispatch({type: constants.SAVE,lessonId:lessonId})
)
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)

export const deleteWidget = (dispatch,widget) => (dispatch({type: constants.DELETE_WIDGET, id: widget.id})
)
export const increaseOrder = (dispatch,widget) =>{
    return dispatch({type: constants.INCREASE_ORDER_WIDGET, order1: widget.order1})}

export const decreaseOrder = (dispatch,widget) =>{
    return dispatch({type: constants.DECREASE_ORDER_WIDGET, order1: widget.order1})}

export const selectWidgetType = (dispatch,widget,selectElement) =>(dispatch({
    type: constants.SELECT_WIDGET_TYPE,
    id: widget.id,
    className: selectElement.value
}))

export const sortWidgets = (dispatch) => (dispatch({type :constants.SORT_WIDGETS}))
export const setXYAxis =(dispatch,y,widgetId) => (dispatch({
    type:constants.SET_XY_AXIS,
    y:y,
    widgetId:widgetId
}))

export const widgetNameChanged =(dispatch,widgetId,widgetName) => {
    dispatch({
        type:constants.WIDGET_NAME_CHANGED,
        widgetId:widgetId,
        widgetName:widgetName})
    dispatch({type:constants.CHECK_UNIQUE})}
