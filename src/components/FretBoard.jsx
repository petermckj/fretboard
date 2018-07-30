import React from 'react';
import Fret from './Fret.jsx';
import {notes,SCALES, calculateScale} from '../modules/scale';

class FretBoard extends React.Component{
    constructor(props){
        super(props);
        let scale = calculateScale("G",SCALES.MAJOR,this.props.neck);
        this.state = {
            "root": "G",
            "scale": scale,
            "scaleType": SCALES.MAJOR
        };
        // This binding is necessary to make `this` work in the callback
        this.scaleChange = this.scaleChange.bind(this);
        this.scaleTypeChange = this.scaleTypeChange.bind(this);
    }
    scaleChange(event){
        let root = event.target.value;
        let scale = calculateScale(root,this.state.scaleType,this.props.neck);
        this.setState({"root": root, "scale":scale});
    }
    scaleTypeChange(event){
        let type = event.target.value;
        let scale = calculateScale(this.state.root,SCALES[type],this.props.neck);
        this.setState({ "scale":scale, "scaleType": SCALES[type]});
    }
    render(){
        return <div>
        <select onChange={this.scaleChange} value={this.state.root}>
            {notes.map((note,i)=>
                <option value={note} key={i} >{note}</option>
            )}
        </select>
        <select onChange={this.scaleTypeChange}>
            {Object.keys(SCALES).map((key,i) =>
                 <option value={key} key={i}>{key.replace("_"," ")}</option>
            )}
        </select>
        <table border="0">
                <tbody>
                {this.props.neck.map((fret,i) => 
                    <Fret notes={fret} selected={this.state.scale} root={this.state.root} scaleType={this.state.scaleType} key={i} idx={i}/>
                )}
                </tbody>
        </table>
        </div>
    }
}

export default FretBoard;