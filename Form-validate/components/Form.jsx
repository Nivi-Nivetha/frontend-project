
import Formsignup from "./Formsignup"
import "./form.css"
import pick from '../pick.jpg'

function Form(){
    return(
        <div>
        <div className="form-container"> 
        <span className="close-btn"> X </span>
        <div className="form-content-left"> 
          <img src={pick} alt="left" className="form-img"/>
        </div>
         <Formsignup />
        </div>
        
         </div>
    );
}

export default Form;
