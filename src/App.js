import React, { Component } from "react";
import "./App.css";
import axios from "axios"; 
import "react-select/dist/react-select.css";
import Search from "./Search";
import NewSong from "./NewSong";
import Display from "./Display";
import Symbol from "./Symbol";
import Head from "./HeadSymbol";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      newSongs: [],
      songs: [this.props.songs],
    };
    this.handleChange = this.handleChange.bind(this);
    this.bringBeats = this.bringBeats.bind(this);
    this.addSong = this.addSong.bind(this);
    this.deleteBeat = this.deleteBeat.bind(this);
    this.editBeat = this.editBeat.bind(this);
    this.read = this.read.bind(this);
  }

  bringBeats(){
    axios.get(`/api/bringbeats/${this.state.selectedOption}`).then(response=>{
      this.setState({
        newSongs: response.data})
  })
}
  read(songs){
    axios.put(`/api/showall`, songs).then(songs=>{
     this.setState({
       songs: songs
     })
   }).catch(err=>console.log(err))
  }
 addSong(obj){
   axios.post('/api/beatsadded', obj).then(response=>{
     this.setState({
       newSongs: response.data
     })
   });
 }

 deleteBeat(id){
   axios.delete(`/api/deletebeat/${id}`).then(response=>{
     this.setState({
       newSongs: response.data
     })
   })
 }

 editBeat(id){
   axios.put(`/api/editbeat/${id}`).then(response=>{
     this.setState({
       newSongs: response.data
     })
   }).catch(err=>console.log(err))
 }

  handleChange(value) {
    if(value!=='Default'){
    this.setState({
      selectedOption: value
    }, this.bringBeats, this.read)
  };
  }



  render() {
    
    let display = this.state.newSongs.map((element, index) =>{
      return (<Display key={element.id} song={element} deleteBeat={this.deleteBeat} editBeat={this.editBeat} read={this.read}/>)
    })
    
    return (
      <main className="App">
        <header className="App-header">
        <span className="input">
        <NewSong addSong={this.addSong} /> 
        </span>
        <span className='top-contents'>
          <Head />
          <div>
          <h1 className='title'>
          <b>Welcome to Da Beat Broker</b>
          </h1>
          <h3 className='subtitle'>
          <i>Wheelin' and Dealin' beats since 2017</i>
          </h3>
          </div>
          </span>
        </header>
        <div className='body'>
  
        <div className='innerdiv'></div>
         
        <div className="search">
        <Search changes={this.handleChange} all={this.read}/> 
        {display}
        </div>
        <footer>
        <Symbol><i>DevBeats Designs</i></Symbol>
        </footer>
        <div className='innerdiv2'>{' '}</div>
        
        </div>
        {/* <Symbol><i>DevBeats Designs</i></Symbol> */}

      </main>
    );
  }
}

export default App;
