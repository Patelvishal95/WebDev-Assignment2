import React from 'react'

const Link = ({widget, preview, linkURLChanged,linkTextChanged}) =>
{
    let inputElem
    let inputelem

    return(
        <div>
            <div hidden={preview}>
                <h2> Link </h2>
                <div className="row">
                    <label className="col-3 font-weight-bold">Link URL</label>
                <textarea className="col-8"
                          placeholder="Enter Link URL"
                            onChange={() => linkURLChanged(widget.id, inputElem.value)}
                           value={widget.href}
                           ref={node => inputElem = node}/>
                </div>
                <div className="row mt-2">
                <label className="col-3 font-weight-bold"> Link Text</label>
                <input className="col-8"
                       placeholder="Enter Link Text to Display"
                       onChange={() => linkTextChanged(widget.id, inputelem.value)}
                          value={widget.name}
                          ref={node => inputelem = node}/>
                </div>
                <h4>Preview</h4>
            </div>

            <a href={widget.href} target="_blank"> {widget.name}</a>

        </div>
    )
}
export default Link;