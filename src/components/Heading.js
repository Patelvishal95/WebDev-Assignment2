import React from  'react'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged,widgetNameChanged}) => {
    let selectElem
    let inputElem
    let inputElem1
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading</h2>
                <div className="row">
                    <label className=" col-3 font-weight-bold mr-2">Widget Name</label>
                    <input className="col-8"
                           onChange={() => widgetNameChanged(widget.id, inputElem1.value)}
                           value={widget.widgetName}
                           placeholder="Enter Widget Name here"
                           ref={node => inputElem1 = node}/>
                </div>
              <div className="row mt-2">
                <label className=" col-3 font-weight-bold mr-2">Heading</label>
                <input className="col-8"
                        onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       placeholder="Enter Heading title here"
                       ref={node => inputElem = node}/>
              </div>
              <div className="row mt-2">
              <label className="col-3 font-weight-bold mr-2">Heading size</label>
                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
              </div>
                <h4>Preview</h4>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
}
export default Heading;