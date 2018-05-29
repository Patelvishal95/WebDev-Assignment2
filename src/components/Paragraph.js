import React from  'react'

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
    let inputElem
    return(

        <div>
            <div hidden={preview}>
                <h2> Paragraph </h2>
                <input  onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}/>
                <h4>Preview</h4>
            </div>
            <p>{widget.text}</p>


        </div>
    )
}
export default Paragraph;