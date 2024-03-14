import React from "react";
import Body from "./Components/Body";
import { data } from "./data";
import zingTouch from "zingtouch"

class App extends React.Component {
  constructor(){
    super()

    this.state={
      menuQueue:[0],
      selectedMenu:0,
      selectedOption:0,
      menuArray:Object.values(data)[0],
      currentSong: new Audio(data.Songs[0].song),
      singlePage:false
    }

    this.wheelRef = React.createRef();
    this.zingtouch = null
    this.distance = 0;
    this.sensitivity = 30;
    this.currentSongIndex = 0;
    this.songsArray = data.Songs;


  }

  

  componentDidMount(){
    const wheel = this.wheelRef.current;
    this.zingtouch = new zingTouch.Region(wheel);
    this.bindGesture();
  }

  // binding Rotate Gesture with the wheel div
  bindGesture=()=>{
    const wheel = this.wheelRef.current;
    const myGesture = new zingTouch.Rotate();
    
    this.zingtouch.bind(wheel, myGesture, (event)=>{

      const menuArray = Object.values(data)[this.state.selectedMenu];

      if(!this.state.currentSong.paused){
        return
      }
      if(Math.floor(event.detail.distanceFromOrigin)===0){
        this.distance = 0;
      }
      
      if(Math.abs(this.distance - event.detail.distanceFromOrigin)>this.sensitivity){
        const menuName = Object.keys(data)[this.state.selectedMenu];
        
        let newState;
        if(this.distance - event.detail.distanceFromOrigin < 0){
          newState  = (this.state.selectedOption + 1) % menuArray.length;
        }else{
          newState = (this.state.selectedOption - 1 + menuArray.length) % menuArray.length;
        }

        this.setState(()=>{
          if(menuName === "Songs"){
            this.currentSongIndex = newState;
            return {
              currentSong: new Audio(this.songsArray[newState].song),
              selectedOption: newState
            }
          }else{
            return { selectedOption: newState }
          }
        });
        this.distance = event.detail.distanceFromOrigin;
      }
    })
  }


  // Handling Okay button click

  okayBtnHandle = (option) => {
    let newMenuQueue = this.state.menuQueue;
    const length = newMenuQueue.length;
    
    // Returns if there is no sub-page availble
    if (newMenuQueue[length - 1] === newMenuQueue[length - 2]) { 
      return;
    }

    const newSelectedMenu = Object.values(data)[this.state.selectedMenu][option].index;
    newMenuQueue.push(newSelectedMenu);
    
    // Check if there is no sub-menu available, means it a single page
    if (newSelectedMenu === this.state.selectedMenu) {
      this.setState({
        singlePage: true,
        menuQueue: newMenuQueue,
        selectedMenu: newSelectedMenu,
        menuArray: Object.values(data)[option],
      })
      return;
    }

    // If sub-menu available
    this.setState({
      singlePage: false,
      menuQueue: newMenuQueue,
      selectedMenu: newSelectedMenu,
      selectedOption: 0,
      menuArray: Object.values(data)[option],
    });
  } 

  // Handling Menu Button click

  menuBtnHandle=()=>{
    let newMenuQueue = this.state.menuQueue;

    // Checks if the song is playing or we're at the root node
    if (newMenuQueue.length === 1 || !this.state.currentSong.paused) {
      return;
    }
    // Removing the currect menu & going back to the previous menu 
    newMenuQueue.pop();
    const newSelectedMenu = newMenuQueue[newMenuQueue.length - 1]
    this.setState({
      menuQueue:newMenuQueue,
      selectedMenu:newSelectedMenu,
      selectedOption:0,
      menuArray: Object.values(data)[newSelectedMenu],
      singlePage:false
    })
  }

  // Handling Play & Pause button click

  playBtn = () => {
    if (this.state.currentSong.paused) {
      this.state.currentSong.play();
    } else {
      this.state.currentSong.pause();
    }
  }

  // Handling Next button click

  nextBtnHanddle=()=>{
    this.state.currentSong.pause();
    this.currentSongIndex = (++this.currentSongIndex % this.songsArray.length)
    const newCurrectSong = new Audio(this.songsArray[this.currentSongIndex].song)
    newCurrectSong.play()
    this.setState({
      currentSong:newCurrectSong
    })
  }

  // Handling Previous button click

  prevBtnHanddle=()=>{
    this.state.currentSong.pause();
    this.currentSongIndex = (this.currentSongIndex === 0? this.songsArray.length - 1 : --this.currentSongIndex)
    const newCurrectSong = new Audio(this.songsArray[this.currentSongIndex].song)
    newCurrectSong.play()
    this.setState({
      currentSong:newCurrectSong
    })
  }

  // sending all state & function through props
  render(){
    return (
      <div className="App">
          <Body state={this.state} 
                wheelRef={this.wheelRef} 
                okayBtnHandle={this.okayBtnHandle} 
                menuBtnHandle={this.menuBtnHandle}
                currentSongIndex={this.currentSongIndex}
                playBtn={this.playBtn}
                nextBtnHanddle={this.nextBtnHanddle}
                prevBtnHanddle={this.prevBtnHanddle}/>
      </div>
    );
  }
}

export default App;
