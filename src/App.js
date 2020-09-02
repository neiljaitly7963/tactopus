import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data : []
    }
  }

  componentDidMount(){
		fetch('https://picsum.photos/list')
		.then(response => response.json())
		.then(data => {
      let newData = data.splice(0, 2)
      this.setState({data:newData})
    });
  }
  
   download = (url) => {
    var element = document.createElement("a");
    var file = new Blob(
      [
        url
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };


  render(){
  return (
    <div className="App">
      <header className="App-header">


      {
        this.state.data.map((image) => {
          return(
            <div className="box">
            <img src={`${image.post_url}/download`} />
            <div><button onClick={() => this.download(`${image.post_url}/download`)}>Download</button> <span>{image.author}</span></div>
          </div>
          )
        })
      }

      </header>
    </div>
  );
  }
}

export default App;
