import React from 'react';
import Note from './Note';

class Fret extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.idx}</td>
                {this.props.notes.map((note,i)=>
                    <Note note={note} scaleType={this.props.scaleType} key={i} root={this.props.root} />    
                )}
            </tr>
        )
    }
}

export default Fret;