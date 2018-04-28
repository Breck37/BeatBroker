import React, { Component } from 'react';



class NewSong extends Component {
    constructor(){
        super()
            this.state = {
                type: '',
                artist: '',
                title: '',
                album: '',
                length: '',
                artwork: '',
            
        }
    }
    typeChange(val){
        this.setState({
            type: val
        })
    }
    artistChange(val){
        this.setState({
            artist: val
        })
    }
    titleChange(val){
        this.setState({
            title: val
        })
    }
    albumChange(val){
        this.setState({
            album: val
        })
    }
    lengthChange(val){
        this.setState({
            length: val
        })
    }
    artworkChange(val){
        this.setState({
            artwork: val
        })
    }

    clearFields(){
       this.setState({
        type: '',
        artist: '',
        title: '',
        album: '',
        length: '',
        artwork: '',
       })
    }

    render(){
        let {type, artist, title, album, length, artwork} =  this.state;
        return (
            <div id='new-song'>
                Type:<br/>
                <select className="new" value={this.state.type} onChange={event => this.typeChange(event.target.value)}>
                <option value="Default">Select</option>
                <option value="Motivation">Get Motivated</option>
                <option value="Chill">Chill Hard</option>
                <option value="Dance">Dance It Up</option>
                <option value="Up">Feeling Good</option>
                <option value="In-between">Eh... In-Between</option>
                <option value="Down">Not My Day</option>
                </select><br/>
                {/* <input className="input" onChange={event => this.idChange(event.target.value)}/> */}
                Artist:<br/>
                <input className="input" value={this.state.artist} onChange={event => this.artistChange(event.target.value)}/><br/>
                Title:<br/>
                <input className="input" value={this.state.title} onChange={event => this.titleChange(event.target.value)}/><br/>
                Album: <br/>
                <input className="input" value={this.state.album} onChange={event => this.albumChange(event.target.value)}/><br/>
                Length:<br/>
                <input className="input" value={this.state.length} onChange={event => this.lengthChange(event.target.value)}/><br/>
                Artwork URL:<br/>
                <input className="input" value={this.state.artwork} onChange={event => this.artworkChange(event.target.value)}/><br/>
                <button className='button' onClick={()=>{
                 this.props.addSong({type, artist, title, album, length, artwork}); this.clearFields()}}>Submit Song</button>
            </div>   
        );
    }
    

}


export default NewSong;