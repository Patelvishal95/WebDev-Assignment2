import React from  'react'
import {connect} from 'react-redux'
import List from "../components/List";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    listTextChanged: (widgetId, newText) =>
         actions.listTextChanged(dispatch, widgetId, newText),

    listTypeChanged: (widgetId, listType) =>
        actions.listTypeChanged(dispatch, widgetId, listType),
    widgetNameChanged: (widgetId, widgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,widgetName)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})
const ListContainer = connect(stateToPropsMapper, dispathToPropsMapper)(List)
export default ListContainer;