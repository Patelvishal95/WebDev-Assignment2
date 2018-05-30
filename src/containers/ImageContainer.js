import React from  'react'
import {connect} from 'react-redux'
import Image from "../components/Image";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    imageURLChanged: (widgetId, imageURL) =>
        actions.imageURLChanged(dispatch, widgetId, imageURL),
    widgetNameChanged: (widgetId, widgetName) =>
        actions.widgetNameChanged(dispatch,widgetId,widgetName)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})
const ImageContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Image)
export default ImageContainer;