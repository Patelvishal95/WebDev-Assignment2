import React from 'react'

const List = ({widget, preview, listTextChanged, listTypeChanged}) =>
{
    let selectElem
    let inputElem
    const renderlist = (text) => {
        var items = text.split('\n')
        return items.map((item)=>(<li id="item">{item}</li>))

    }

    return(
        <div>
            <div hidden={preview}>
                <h2> List </h2>
                <div className="row">
                    <label className="font-weight-bold col-3">List Content</label>
         < textarea className="col-8 w-100"
             onChange={() => listTextChanged(widget.id, inputElem.value)}
                    value={widget.text}
                    placeholder="Enter list content here separate list items with enter"
                    ref={node => inputElem = node}/>
                </div>
                <div className="row mt-2">
                    <label className="font-weight-bold col-3">List Content</label>
                    <select className="col-8 w-100"
                        onChange={() => listTypeChanged(widget.id, selectElem.value)}
                        value={widget.listType}
                        ref={node => selectElem = node}>
                        <option value="Unordered">Unordered list</option>
                        <option value="Ordered">Ordered List</option>
                    </select>
                </div>
                <h3>Preview</h3>
            </div>
            {widget.listType === 'Unordered' && <ul>{renderlist(widget.text)}</ul>}
            {widget.listType === 'Ordered' && <ol>{renderlist(widget.text)}</ol>}


        </div>
    )
}
export default List;