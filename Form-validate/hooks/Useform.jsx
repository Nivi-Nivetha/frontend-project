import { useState } from 'react'


const Useform = (Validate) => {
   const [values, setValues] = useState({
       usename:"",
       email:"",
       password:"",
       password2:"",
   })

   const [errors, setErrors] = useState({})

   const handleChange = (e) =>{
       const {name,value} = e.target

       setValues((preValues)=>{
           return{
               ...preValues,
               [name]: value,
           }
       })
   }

   const handleSubmit = (e) =>{
       e.preventDefault()

       setErrors(Validate(values))
   }

   return {handleChange, values, handleSubmit, errors }
}

export default Useform