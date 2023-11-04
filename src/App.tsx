import './App.css'
import imageBannerBG from './assets/home.plants.pc.bg.masked.jpg'
import imagePortrait from './assets/Adam.portrait.prof.final.jpg'



function App() {

  return (
    <>
       
        <div className="Banner">
            <div className="BannerText">
                <div className="BannerTextDyrker">Dyrker <span className="BannerTextSmukkePlanter">SMUKKE</span></div>
                <div className="BannerTextSmukkePlanter">PLANTER<span className="BannerTextMed"> med</span></div>
                <div className="BannerTextKærlighed">KÆRLIGHED</div>
                <div className="f26b">Lorem Ipsum: what to do </div>
                <div className="f12">Lorem Ipsum: what to do, This command will typically start your development server, and you can view your React app in a web browser with the image displayed. </div>
            </div>
            <div className="Velkommentext">Velkommen_ </div>
        </div>
        <div className="InfoAP">
          <div className = "InfoAPText">
            <div className="f32b">Adam Pho</div>
            <div className="f32bg">Væksthusgartner</div>
            <div className="f16">Lorem Ipsum: what to do, This command will typically start your development server, and you can view your React app in a web browser with the image displayed.</div>
          </div>
          <img className = "InfoAPImage" src={imageBannerBG} alt="My Image" />
        </div>
        <div className ="Profile">
          <img className = "ProfileImage" src={imagePortrait} alt="My Image" />
          <div className ="ProfileText">
            <div className="f16b">Lidt Om Mig</div>
            <div className="f16">Lorem Ipsum: what to do, This command will typically start your development server, and you can view your React app in a web browser with the image displayed.</div>
          </div>
        </div>
        <div className ="Erfaring">
          <div className="ErfaringText">
            <div className="f32bg">Erfaring</div>
            <div className="f16g">* Lorem Ipsum: what to do, This command will typically start your development server, and you can view your React app in a web browser with the image displayed.</div>
            <div className="f16g">* Lorem Ipsum: what to do, This command will typically start your development server, and you can view your React app in a web browser with the image displayed.</div>
            <div className="f16g">* Lorem Ipsum: what to do, This command will typically start your development server, and you can view your React app in a web browser with the image displayed.</div>
          </div>
        </div>  
        <div className="Kontakt">
          <div className="KontaktText">
            <div className="f16b">Kontakt</div>
            <div className="f12"> Tlf: 12 34 56 78</div>
            <div className="f12"> Email: eksempel@gmail.com</div>
          </div>
        </div>
        
    </>
  )
}

export default App
