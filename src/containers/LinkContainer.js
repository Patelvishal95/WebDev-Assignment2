import React from  'react'
import {connect} from 'react-redux'
import Link from "../components/Link";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    linkURLChanged: (widgetId, href) =>
        actions.linkURLChanged(dispatch, widgetId, href),
    linkTextChanged: (widgetId, name) =>
        actions.linkTextChanged(dispatch, widgetId, name)
})
const stateToPropsMapper = state => ({
    preview: state.preview
})
const ImageContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Link)
export default ImageContainer;