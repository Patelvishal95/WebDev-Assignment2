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
         < textarea onChange={() => listTextChanged(widget.id, inputElem.value)}
                 value={widget.text}
                 ref={node => inputElem = node}/>
         <select
             onChange={() => listTypeChanged(widget.id, selectElem.value)}
         value={widget.listType}
         ref={node => selectElem = node}>
         <option value="1">Unordered list</option>
         <option value="2">Ordered List</option>
     </select>
         <h3>Preview</h3>
     </div>
     {widget.listType == 1 && <ul>{renderlist(widget.text)}</ul>}
     {widget.listType == 2 && <ol>{renderlist(widget.text)}</ol>}


</div>
)
    }
export default List;