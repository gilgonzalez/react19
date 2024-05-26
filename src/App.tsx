import reactLogo from './assets/react.svg'
import './App.css'
import { version} from "react"
import Seo from './components/Seo'
import Form from './components/Form'

function App() {

 

  return (
    <>
    <Seo title='REACT 19' description='Description desde SEO'/>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h5 style={{marginBottom:10}}>React 19 </h5>
        <small style={{color:"yellow", fontSize:12}}>Version : {version}</small>
      </div>
       <Form/>
      
      
     
    </>
  )
}

export default App
