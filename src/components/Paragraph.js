import React from  'react'

const Paragraph = ({widget, preview, paragraphTextChanged,widgetNameChanged}) => {
    let inputElem
    let inputElem1
    return(

        <div>
            <div hidden={preview}>
                <h2> Paragraph </h2>
                <div className="row">
                    <label className=" col-3 font-weight-bold">Widget Name</label>
                    <input className="col-8"
                           onChange={() => widgetNameChanged(widget.id, inputElem1.value)}
                           value={widget.widgetName}
                           placeholder="Enter Widget Name here"
                           ref={node => inputElem1 = node}/>
                </div>
                <div className="">
                    <label className="font-weight-bold">Paragraph content</label>
                    <br/>
                <textarea className="w-100"
                          onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                          placeholder="Your paragraph content goes in here!"
                       ref={node => inputElem = node}/>
                </div>
                <h4>Preview</h4>
            </div>
            <p>{widget.text}</p>


        </div>
    )
}
export default Paragraph;