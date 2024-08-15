import React, { useCallback } from "react"
import { InputComplex } from "../inputComplex"
import { Align, Gap } from "../../../style"
import * as Styled from "./style"
import { Text } from "../../text"

export function DynamicInputs({
  type = "topic",
  inputValues = [],
  isEdit = true,
  fixed = false,
  onChange, // Alterado de onInputValuesChange para onChange
}) {
  const handleAddInput = useCallback(() => {
    const newInput = { id: Date.now() + Math.random(), name: "", value: "" }
    onChange([...inputValues, newInput])
  }, [inputValues, onChange])

  const handleRemoveTopic = useCallback(
    (index) => {
      const updatedInputs = inputValues.filter((_, i) => i !== index)
      onChange(updatedInputs)
    },
    [inputValues, onChange]
  )

  const handleChange = useCallback(
    (id, field, value) => {
      const updatedInputs = inputValues.map((input) =>
        input.id === id ? { ...input, [field]: value } : input
      )
      onChange(updatedInputs)
    },
    [inputValues, onChange]
  )

  return (
    <>
      {type === "topic" && (
        <>
          {inputValues.map((input, index) => (
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
                  <Text text={`${input.name}:`} bold responsive />
                  <Text text={input.value} maxW={"100%"} />
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
  )
}
