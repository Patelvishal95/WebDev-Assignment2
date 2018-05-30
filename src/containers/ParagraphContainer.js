import React from  'react'
import {connect} from 'react-redux'
import Paragraph from "../components/Paragraph";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    widgetNameChanged: (widgetId, widgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,widgetName)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})
const ParagraphContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Paragraph)
export default ParagraphContainer;
