
import Useform from '../hooks/Useform'
import Validate from '../utils/Validate'


 const Formsignup = () =>{
const { handleChange, values, handleSubmit, errors } = Useform(Validate) 

    return(
          <div className="form-content-right"> 
             <form className="form" onSubmit={handleSubmit}> 
                <h1> Get Started with us today! create your account </h1>
                 <div className="form-inputs"> 
                    <label htmlFor="username" className="form-label"> Username </label> 
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username"
                        onChange={handleChange}
                         value={values.username}
                        />
                         {errors.username && <p> {errors.username} </p>}
                 </div>

                  <div className="form-inputs">
                    <label htmlFor="email" className="form-label"> Email </label> 
                    <input
                      id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                         onChange={handleChange}
                          value={values.email}
                        />
                           {errors.email && <p> {errors.email}</p>}
                  </div>

                   <div className="form-inputs">
                     <label htmlFor="password" className="form-label"> password </label> 
                     <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                         onChange={handleChange}
                         value={values.password}
                        />
                         {errors.password && <p> {errors.password} </p>}
                   </div>

                    <div className="form-inputs">
                      <label htmlFor="password2" className="form-label"> confirm password </label> 
                      <input
                        id="password2"
                        type="password2"
                        name="password2"
                        className="form-input"
                        placeholder="Enter your confirm password"
                         onChange={handleChange}
                          value={values.password2}
                        />
                         {errors.password2 && <p> {errors.password2} </p>}
                    </div>
                    <button className="form-input-btn" type="submit"> Sign up </button>
                    <span className="form-input-login">  
                       Already have an account? Login <a href="#">here </a>
                    </span>
             </form>
          </div>
    );
};

export default Formsignup







