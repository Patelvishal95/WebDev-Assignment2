import React from  'react'

const Image = ({widget, preview, imageURLChanged}) => {
    let inputElem
    return(

        <div>
            <div hidden={preview}>
                <h2> Image </h2>
                <div className="row">
                    <label className="col-3 font-weight-bold">Image URL</label>
                <input  className="col-8"
                        onChange={() => imageURLChanged(widget.id, inputElem.value)}
                        value={widget.src}
                        placeholder="Enter Image URL here"
                        ref={node => inputElem = node}/>
                </div>
                <h4>Preview</h4>
            </div>
            <img className="img-fluid" src={widget.src} alt={widget.src}/>


        </div>
    )
}
export default Image;