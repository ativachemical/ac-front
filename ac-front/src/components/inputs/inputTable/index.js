import React, { useState, useEffect } from "react"
import { InputComplex } from "../inputComplex"
import { Align, Gap, ScrollX } from "../../../style"
import * as Styled from "./style"
import { Text } from "../../text"

// Funções de parsing e formatação para TSV
const parseTSVToData = (text) => {
  if (typeof text !== "string") {
    console.error("Expected text to be a string but received:", typeof text)
    return { headers: [], rows: [] }
  }

  const normalizedText = text.replace(/\r\n/g, "\n")
  const [headersLine, ...rowsLines] = normalizedText.trim().split("\n")
  const headers = headersLine.split("\t")
  const rows = rowsLines.map((row) => row.split("\t"))
  return { headers, rows }
}

const formatDataToTSV = (data) => {
  const headersLine = data.headers.join("\t")
  const rowsLines = data.rows.map((row) => row.join("\t"))
  return [headersLine, ...rowsLines].join("\n")
}

export function InputTable({
  type = "tsv",
  inputValue = "",
  isEdit = true,
  onChange, // Change prop name to match usage
}) {
  const [productData, setProductData] = useState({ headers: [], rows: [] });
  const [inputText, setInputText] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (type === "tsv" && typeof inputValue === "string" && inputValue) {
      const parsedData = parseTSVToData(inputValue);
      setProductData(parsedData);
      setInputText(inputValue);
      setShowInput(true);
    } else if (inputValue === "") {
      setShowInput(false);
    }
  }, [inputValue, type]);

  useEffect(() => {
    if (onChange) { // Adjust the function call
      onChange(formatDataToTSV(productData));
    }
  }, [productData, onChange]);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    if (type === "tsv") {
      const newData = parseTSVToData(newText);
      setProductData(newData);
    }
  };

  const handleRemoveData = () => {
    setShowInput(false);
    setProductData({ headers: [], rows: [] });
    setInputText("");
  };

  const handleAddData = () => {
    setShowInput(true);
    const emptyData = { headers: [], rows: [] };
    setProductData(emptyData);
    setInputText("");
  };

  return (
    <>
      {type === "tsv" && (
        <>
          {isEdit && (
            <>
              <Gap wrapResponsive>
                {showInput && (
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
              <Align justify={"center"} gap="5px" alignCenter>
                {!showInput && 
                  <>
                    <Styled.PlusIcon onClick={handleAddData} />
                    <Text text="Tabela"/>
                  </>
                }    
              </Align>
            </>
          )}

          {!isEdit &&
            productData.headers.length > 0 &&
            productData.rows.length > 0 && (
              <ScrollX>
                <Styled.Table>
                  <thead>
                    <tr>
                      {productData.headers.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {productData.rows.map((row, rowIndex) => (
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
  );
}

