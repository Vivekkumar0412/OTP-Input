import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const otp_input_count = 5;
  const [otpArr, setOtpArr] = useState(new Array(otp_input_count).fill(""));
  const otpRef = useRef([]);
  const handleInputChange = (value, index) => {
    if (isNaN(value)) return;
    let newValue = value.trim();
    let newArr = [...otpArr];
    newArr[index] = newValue.slice(-1);
    setOtpArr(newArr);
    newValue && otpRef.current[index +1]?.focus()
    console.log(otpArr, "otp array");
  };

  const handleKeyDownFun=(e,index)=>{
    if(!e.target.value && e.key === "Backspace"){
      otpRef.current[index -1].focus();
    }
  }
  useEffect(() => {
    console.log("useffeect running")
    otpRef.current[0]?.focus();
  }, []);
  return (
    <>
      <h1 className="test">OTP INPUT</h1>
      {otpArr &&
        otpArr.length > 0 &&
        otpArr.map((otp, index) => (
          <input
            className="otp-input"
            key={index}
            ref={(input)=> (otpRef.current[index] = input)}
            type="text"
            value={otpArr[index]}
            onChange={(e) => handleInputChange(e.target.value, index)}
            onKeyDown={(e)=> handleKeyDownFun(e,index)}
          />
        ))}
    </>
  );
}

export default App;
