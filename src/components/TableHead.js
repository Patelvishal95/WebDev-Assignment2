import React from 'react';

class TableHead extends React.Component {

    render() {
        return (
            <thead id='tablehead'>
            <tr>
            <th>Course Name</th>
            <th>Date Created</th>
            <th>Date Modified</th>
            <th>&nbsp;</th>
            </tr>
            </thead>
        )
    }
}
export default TableHead;