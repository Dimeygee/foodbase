import React, { useEffect, useRef, useState } from "react";
import OtpInput from "./otpinput";
import { View } from "react-native"

const OtpForm = ({ setOtp }) => {
  const [codes, setCode] = useState({
    code1: "",
    code2: "",
    code3: "",
    code4: ""
  });

  const [pasted, isPasted] = useState([]);

  const [arr, setArr] = useState([]);

  const { code1, code2, code3, code4 } = codes;


  const div = useRef(null);
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)



  /*useEffect(() => {
    const hanldePaste = (e) => {
      let pastedValue = e.clipboardData.getData("text").slice(0, 4);
      isPasted(pastedValue);
    };

    window.addEventListener("paste", hanldePaste);

    return () => {
      window.removeEventListener("paste", hanldePaste);
    };
  }, []);*/

  useEffect(() => {
    if (code4) {
      div.current._children[3].focus();
      div.current._children[3].blur();
    }

    if (arr[0] === "") {
      setArr([]);
    }

    if (arr.length === 4) {
      isPasted([]);
      let newarr = arr.slice().toString().split(",").join("");
      setOtp(newarr);
    }
  }, [code4, arr]);

  useEffect(() => {
    if (pasted.length) {
      let callback = new Promise((resolve, reject) => {
        let codes = {};
        let otp = [];
        for (let i = 0; i < pasted.length; i++) {
          codes[`code${i + 1}`] = pasted[i];
          otp[i] = pasted[i];
        }
        resolve({ codes: codes, otp: otp });
      });
      callback
        .then((res) => {
          setCode(res.codes);
          setOtp(res.otp.toString().split(",").join(""));
        })
        .catch((err) => console.log(err));
    }
  }, [pasted]);

  const Change = (index, nativeEvent ) => {

    let value = nativeEvent.text.slice(0, 1)

    setCode({ ...codes, ["code" + index]: value });

        //console.log(index, nativeEvent.key )


        if (nativeEvent.key === "Backspace" && nativeEvent.text !== "") return true;

        if (nativeEvent.text !== "" && index !== 4) {
            if(index === 0) ref1.current.focus()
            if(index === 1) ref2.current.focus()
            if(index === 2) ref3.current.focus()
            if(index === 3) ref4.current.focus()
        }   

        if (
            nativeEvent.text === "" &&
            index !== 0
            //nativeEvent.key === "Backspace"
        ) {
            if(index === 4) ref3.current.focus()
            if(index === 3) ref2.current.focus()
            if(index === 2) ref1.current.focus()
        }

        let newarr = arr.slice()
        let newindex = index - 1;
        newarr[newindex] = nativeEvent.text;
        setArr(newarr);
  };

  return (
    <View style={[{
        flex: 1, 
        flexDirection: "row", 
        justifyContent: "space-between"
        }]} 
    ref={div}>
      <OtpInput value={code1} Change={Change} index={1} ref={ref1} />
      <OtpInput value={code2} Change={Change} index={2} ref={ref2}/>
      <OtpInput value={code3} Change={Change} index={3} ref={ref3} />
      <OtpInput value={code4} Change={Change} index={4} ref={ref4} />
    </View>
  );
};

export default OtpForm;
