import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const generatePassword =useCallback(() =>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*()_+"

    for (let i=1; i < length; i++){
     const charNum = Math.floor(Math.random() * str.length +1)
     pass +=str.charAt(charNum)
    }

    setPassword(pass)

  }, [length,number,char])

  useEffect(() => {
    generatePassword()
  }, [length,number,char])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  return (
    <div>
      <div className="container">
        <h1 className="header"> Password Generate </h1>
        <div className="box-container">
          <input
            type="text"
            className="input"
            value={password}
            placeholder="password"
            readonly
            ref = {passwordRef}
          />
          <button 
             onClick={copyPasswordToClipboard}
             className="btn"> copy </button>
        </div>
        <div className="range-container"> 
            <div className="range"> 
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="input-range"
                onChange={(e) => setLength(e.target.value)}
                name=""
                id=""
                />
               <label for="length"> length: {length}</label>
            </div>
             <div className="checkbox"> 
              <input
                type="checkbox"
                defaultchecked={number}
                onChange={() => {
                  setNumber((prev)=> !prev)
                }}
                name=""
                id=""
                />
               <label for="number"> Numbers </label>
            </div>
             <div className="character"> 
              <input
                type="checkbox"
                defaultchecked={char}
                onChange={() => {
                  setChar((prev)=> !prev)
                }}
                name=""
                id=""
                />
               <label for="char"> Character </label>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
