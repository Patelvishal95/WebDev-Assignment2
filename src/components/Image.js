import React from  'react'

const Image = ({widget, preview, imageURLChanged}) => {
    let inputElem
    return(

        <div>
            <div hidden={preview}>
                <h2> Image </h2>
                {/*<input  onChange={() => imageURLChanged(widget.id, inputElem.value)}*/}
                        {/*value={widget.text}*/}
                        {/*ref={node => inputElem = node}/>*/}
                <input  onChange={() => imageURLChanged(widget.id, inputElem.value)}
                        value={widget.src}
                        ref={node => inputElem = node}/>
                <h4>Preview</h4>
            </div>
            <img src={widget.src} alt={widget.src}/>


        </div>
    )
}
export default Image;