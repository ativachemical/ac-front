import React, { useState, useEffect } from "react"
import { InputComplex } from "../inputComplex"
import { Align, Gap, ScrollX } from "../../../style"
import * as Styled from "./style"
import { Text } from "../../text"

// Funções de parsing e formatação para TSV
const parseTSVToData = (text) => {
  const [headersLine, ...rowsLines] = text.trim().split("\n")
  const headers = headersLine.split("\t")
  const rows = rowsLines.map((row) => row.split("\t"))
  return { headers, rows }
}

const formatDataToTSV = (data) => {
  const headersLine = data.headers.join("\t")
  const rowsLines = data.rows.map((row) => row.join("\t"))
  return [headersLine, ...rowsLines].join("\n")
}

// Funções de parsing e formatação para JSON
const parseJSONToData = (json) => JSON.parse(json)
const formatDataToJSON = (data) => JSON.stringify(data, null, 2)

export function InputTable({ type = "tsv", values = [], isEdit = true }) {
  const [productId, setProductId] = useState(values)

  const initialInputText =
    type === "tsv"
      ? values?.headers && values?.rows
        ? formatDataToTSV(values)
        : ""
      : type === "json"
      ? values?.headers && values?.rows
        ? formatDataToJSON(values)
        : ""
      : ""

  const [inputText, setInputText] = useState(initialInputText)

  useEffect(() => {
    if (values?.headers && values?.rows) {
      setInputText(
        type === "tsv" ? formatDataToTSV(values) : formatDataToJSON(values)
      )
    }
  }, [values, type])

  const handleInputChange = (event) => {
    const newText = event.target.value
    setInputText(newText)

    const newData =
      type === "tsv" ? parseTSVToData(newText) : parseJSONToData(newText)
    setProductId((prevState) => ({
      ...prevState,
      headers: newData.headers,
      rows: newData.rows,
    }))
  }

  const handleRemoveData = () => {
    setProductId("")
    setInputText("")
  }

  const handleAddData = () => {
    setProductId(" ")
    setInputText(" ")
  }

  return (
    <>
      {type === "tsv" && (
        <>
          {isEdit && (
            <>
              <Gap wrapResponsive>
                {productId && (
                  <>
                    <InputComplex
                      type="textarea"
                      height="300px"
                      onChange={handleInputChange}
                      value={inputText}
                    />
                    <Styled.LessIcon onClick={handleRemoveData} />
                  </>
                )}
              </Gap>
              <Align justify={"center"}>
                {!productId && <Styled.PlusIcon onClick={handleAddData} />}
              </Align>
            </>
          )}

          {!isEdit && productId && (
            <ScrollX>
              <Styled.Table>
                <thead>
                  <tr>
                    {productId.headers &&
                      productId.headers.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {productId.rows &&
                    productId.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((data, dataIndex) => (
                          <td key={dataIndex}>{data}</td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </Styled.Table>
            </ScrollX>
          )}
        </>
      )}
    </>
  )
}
