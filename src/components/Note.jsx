import React from 'react';
import {isNoteInScale} from '../modules/scale';

class Note extends React.Component{
    render(){
        let sel = () =>{
            if(this.props.root===this.props.note) return 'isRoot';
            else if(isNoteInScale(this.props.note,this.props.root,this.props.scaleType)) return 'selected';
            else return 'unselected';
        }
        return(
            <td className={sel()}>
                {this.props.note}
            </td>
        )
    }
}

export default Note;