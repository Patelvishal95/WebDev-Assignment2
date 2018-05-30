import React from  'react'
import {connect} from 'react-redux'
import Heading from "../components/Heading";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    widgetNameChanged: (widgetId, widgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,widgetName)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})
const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading)
export default HeadingContainer;
