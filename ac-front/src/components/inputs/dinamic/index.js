import React, { useState, useEffect } from "react";
import { InputComplex } from "../inputComplex"; // Ajuste o caminho conforme necessário
import { Align, Gap } from "../../../style"; // Ajuste o caminho conforme necessário
import * as Styled from "./style"; // Ajuste o caminho conforme necessário
import { Text } from "../../text"; // Ajuste o caminho conforme necessário

export function DynamicInputs({
  type = "topic",
  inputValues = [],
  isEdit = true,
  fixed = false,
  onInputValuesChange,
}) {
  const [inputs, setInputs] = useState(() => {
    if (inputValues.length > 0 && Array.isArray(inputValues)) {
      return inputValues;
    }
    return [];
  });

  useEffect(() => {
    if (onInputValuesChange) {
      onInputValuesChange(inputs);
    }
  }, [inputs, onInputValuesChange]);

  const handleAddInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { id: Date.now() + Math.random(), name: "", value: "" },
    ]);
  };

  const handleRemoveTopic = (index) => {
    setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  };

  const handleChange = (id, field, value) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, [field]: value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  return (
    <>
      {type === "topic" && (
        <>
          {inputs.map((input, index) => (
            <Gap wrapResponsive key={input.id}>
              {isEdit ? (
                <>
                  {!fixed ? (
                    <InputComplex
                      maxW="200px"
                      type="text"
                      value={input.name}
                      onChange={(e) =>
                        handleChange(input.id, "name", e.target.value)
                      }
                    />
                  ) : (
                    <Text text={`${input.name}:`} bold maxW={"200px"} />
                  )}
                  <InputComplex
                    type="textarea"
                    value={input.value}
                    onChange={(e) =>
                      handleChange(input.id, "value", e.target.value)
                    }
                  />
                  {!fixed && (
                    <Styled.LessIcon onClick={() => handleRemoveTopic(index)} />
                  )}
                </>
              ) : (
                <>
                  <Text text={`${input.name}:`} bold />
                  <Text text={input.value} />
                </>
              )}
            </Gap>
          ))}

          <Align justify={"center"}>
            {!fixed && isEdit && <Styled.PlusIcon onClick={handleAddInput} />}
          </Align>
        </>
      )}
    </>
  );
}
