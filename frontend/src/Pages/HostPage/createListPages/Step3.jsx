import React, { useContext, useEffect } from "react";
import StepPages from "../../../components/StepPages";
import { submitContext } from "../../../utils/submitContext";
const Step3 = () => {
  const {setSelected} = useContext(submitContext)
    useEffect(()=>{
      setSelected(false)
    },[])
  return (
    <div>
      <StepPages
        step={"Step 3"}
        head={"Finish up and publish"}
        para={
          "Finally, you’ll choose booking settings, set up pricing and publish your listing."
        }
        src={"/public/step-3.mp4"}
      />
    </div>
  );
};

export default Step3;
