import React from  'react'

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
    let inputElem
    return(

        <div>
            <div hidden={preview}>
                <h2> Paragraph </h2>
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