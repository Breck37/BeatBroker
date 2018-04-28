import React, {Component} from 'react';
import "./App.css";
import "./Display.css"

export default class Display extends Component {


render(){
    return (
        <div className={this.props.song.heard === false ? "songlist" : "songHeard"}>
           <h2>{this.props.song.artist}</h2>
           <h3>{this.props.song.title}</h3>
           <h4>{this.props.song.album}</h4>
          <h5> {this.props.song.length}</h5>
           <img className="display" src={this.props.song.artwork} alt="" /><br/>
           <button onClick={()=>this.props.deleteBeat(this.props.song.id)} className='delete-button'>Delete</button><br />
           <button onClick={()=>this.props.editBeat(this.props.song.id)}>Already Heard?</button>
        </div>
    )
}

}

// this.props.deleteBeat(this.props.song.id)
// className="display"