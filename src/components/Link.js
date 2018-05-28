import React from 'react'

const Link = ({widget, preview, linkURLChanged,linkTextChanged}) =>
{
    let selectElem
    let inputElem
    let inputelem

    return(
        <div>
            <div hidden={preview}>
                <h2> Link </h2>
                <textarea onChange={() => linkURLChanged(widget.id, inputElem.value)}
                           value={widget.href}
                           ref={node => inputElem = node}/>
                <br/>
                <h2> Link Text</h2>
                <input onChange={() => linkTextChanged(widget.id, inputelem.value)}
                          value={widget.name}
                          ref={node => inputelem = node}/>
                <h3>Preview</h3>
            </div>

            <a href={widget.href} target="_blank"> {widget.name}</a>

        </div>
    )
}
export default Link;