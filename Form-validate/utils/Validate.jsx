

export default function Validate (values){
  let errors ={}

// --  Username  ---
  if(!values.username.trim()){
      errors.username = "Username required"
  }

  // -- Email ---
  if(!values.email.trim()){
      errors.email = "Email required"
  }
  else if(!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(values.email)){
      errors.email = "Email address is invalid"
  }

  // -- password -- 
  if(!values.password.trim()){
      errors.password = "Password is required"
  }
  else if(values.password.length < 6){
      errors.password = "Password needs to be 6 characters or more"
  }

  // -- confirm password --
  if(!values.password2.trim()){
      errors.password2 = "Password is required"
  }
  else if(values.password2 !== values.password){
      errors.password2 = "Password does not match"
  }
  return errors
}