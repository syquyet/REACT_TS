import { useDeferredValue, useEffect, useState } from "react";

function UseEffectExample() {
  const [height, setHeight] = useState<number>(0);
  const [weigth, setWeigth] = useState<number>(0);
  const [BMI, setBMI] = useState<number>(0);
  const [type, setType] = useState<string>("");
  console.log(111111, height);
  console.log(2222, weigth);

  //   useEffect(() => {
  //     console.log("dsaddsds");
  //   }, []);
  const AddWeightHeight = () => {
    setBMI(Number((weigth / (height * height)).toFixed(1)));
    console.log(3333, BMI);
    switch (true) {
      case BMI < 18.5:
        setType("gầy");

        break;
      case BMI < 25:
        setType("Bình thường");

        break;
      case BMI >= 25:
        setType("Béo");

        break;

      default:
        break;
    }
  };
  return (
    <>
      <h1>UseEffectExample</h1>
      <input
        type="text"
        placeholder="height"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setHeight(Number(event.target.value))
        }
      />
      <br />
      <input
        type="text"
        placeholder="weight"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setWeigth(Number(event.target.value))
        }
      />
      <br />
      <button onClick={AddWeightHeight}>add</button>
      <p>
        chỉ sô BMI:{BMI} phân loại:{type}
      </p>
    </>
  );
}

export default UseEffectExample;
