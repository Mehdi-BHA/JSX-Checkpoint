import Imagesrc from './media/imageInSrc.jpg';
import Video from "./media/myVideo.mp4";
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Mehdi Ben Hadj Ali</h1><br/>
        <img src={Imagesrc} alt="src"/>
        <br/>
        <img src="/media/imageInPublic.jpeg" alt="public"/>
      </div>
      <video controls src={Video} type="video/mp4" />
    </div>
  );
}

export default App;
