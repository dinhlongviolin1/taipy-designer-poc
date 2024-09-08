import { useCallback, useEffect, useState } from "react";
import Text from "./components/Text";
import Button from "./components/Button";
import Input from "./components/Input";

type ControlType = "text" | "button" | "input";
type ValueType = "string" | "number";
interface Control {
  controlType: ControlType;
  valueType: ValueType;
}

const App = () => {
  const [number, setNumber] = useState<number>(0);
  const [str, setStr] = useState<string>("Hello World");
  const [controls, setControls] = useState<Control[]>([]);

  const addControl = useCallback(
    (controlType: ControlType, valueType: ValueType) => {
      setControls((controls) => [...controls, { controlType, valueType }]);
    },
    [],
  );

  const removeAll = useCallback(() => {
    setNumber(0);
    setStr("Hello World");
    setControls([]);
  }, []);

  const resetDefault = useCallback(() => {
    setNumber(0);
    setStr("Hello World");
    setControls([]);
    addControl("text", "string");
    addControl("button", "string");
    addControl("input", "string");
    addControl("text", "number");
    addControl("button", "number");
    addControl("input", "number");
  }, [addControl]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).taipyApp = { addControl, removeAll, resetDefault };
    resetDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {controls.map((v, i) => {
        const controlType = v.controlType;
        const valueType = v.valueType;
        const value = valueType === "string" ? str : number;
        const key = `${controlType}-${valueType}-${i}`;
        if (controlType === "text") {
          return <Text key={key} text={`${valueType} = ${value}`} />;
        }
        if (controlType === "input") {
          const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            if (valueType === "string") {
              setStr(value);
            } else {
              setNumber(parseInt(value));
            }
          };
          return <Input key={key} value={value} onChange={onChange} />;
        }
        if (controlType === "button") {
          const onClick = () => {
            if (valueType === "string") {
              setStr("Hello World" + Math.ceil(Math.random() * 100).toString());
            } else {
              setNumber((prev) => prev + 1);
            }
          };
          return (
            <Button
              key={key}
              text={valueType === "string" ? "Change text" : "Increment"}
              onClick={onClick}
            />
          );
        }
      })}
    </>
  );
};

export default App;
