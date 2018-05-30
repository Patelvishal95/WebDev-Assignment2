import React from  'react'
import imageSearch from 'node-google-image-search'
import * as GoogleImages from 'google-image'
const Image = ({widget, preview, imageURLChanged,widgetNameChanged}) => {
    let inputElem
    let inputElem1
    const searchImage= ()=> {
        // var results = imageSearch('cat', callback, 0, 5);
        // const GoogleImages = require('google-images');
        const client = new GoogleImages('001221429794074478325:zqzcnnimvmk', 'AIzaSyD-zkCt_CFOmqNJP99xxrIIxXmgnsoNSVU');
        console.log(client)
        client.search('Steve Angello')
            .then(images => {
                console.log(images)
                /*
                [{
                    "url": "http://steveangello.com/boss.jpg",
                    "type": "image/jpeg",
                    "width": 1024,
                    "height": 768,
                    "size": 102451,
                    "thumbnail": {
                        "url": "http://steveangello.com/thumbnail.jpg",
                        "width": 512,
                        "height": 512
                    }
                }]
                 */
            });

    }
    // function callback(results) {
    //     console.log(results)
    // }
    return(

        <div>
            <div hidden={preview}>
                <h2> Image </h2>
                <div className="row">
                    <label className=" col-3 font-weight-bold">Widget Name</label>
                    <input className="col-8"
                           onChange={() => widgetNameChanged(widget.id, inputElem1.value)}
                           value={widget.widgetName}
                           placeholder="Enter Widget Name here"
                           ref={node => inputElem1 = node}/>
                </div>
                <div className="row mt-2">
                    <label className="col-3 font-weight-bold">Image URL</label>
                <input  className="col-8"
                        onChange={() => imageURLChanged(widget.id, inputElem.value)}
                        value={widget.src}
                        placeholder="Enter Image URL here"
                        ref={node => inputElem = node}/>
                </div>

                <div>
                    <button type="button" onClick={searchImage}>Search</button>
                </div>
                <h4>Preview</h4>
            </div>
            <img className="img-fluid" src={widget.src} alt={widget.src}/>


        </div>
    )
}
export default Image;
