import React from 'react';

class TableHead extends React.Component {

    render() {
        return (
            <thead id='tablehead'>
            <tr>
            <th>Course Name</th>
            <th  >Date Created<i onClick={this.props.sortbycreated} className="fa fa-sort pl-1"/></th>
            <th >Date Modified<i onClick={this.props.sortbydatemodified} className="fa fa-sort pl-1"/></th>
            <th>&nbsp;</th>
            </tr>
            </thead>
        )
    }
}
export default TableHead;