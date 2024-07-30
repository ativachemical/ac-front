import React, { useState, useEffect } from "react";
import { InputComplex } from "../inputComplex";
import { Align, Gap, ScrollX } from "../../../style";
import * as Styled from "./style";

// Funções de parsing e formatação para TSV
const parseTSVToData = (text) => {
  const normalizedText = text.replace(/\r\n/g, '\n');
  const [headersLine, ...rowsLines] = normalizedText.trim().split("\n");
  const headers = headersLine.split("\t");
  const rows = rowsLines.map((row) => row.split("\t"));
  return { headers, rows };
};

const formatDataToTSV = (data) => {
  const headersLine = data.headers.join("\t");
  const rowsLines = data.rows.map((row) => row.join("\t"));
  return [headersLine, ...rowsLines].join("\n");
};

export function InputTable({ type = "tsv", values = "", isEdit = true, onInputValuesChange }) {
  const [productData, setProductData] = useState({ headers: [], rows: [] });
  const [inputText, setInputText] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (type === "tsv" && values) {
      const parsedData = parseTSVToData(values);
      setProductData(parsedData);
      setInputText(values);
      setShowInput(true);
    } else if (values === "") {
      setShowInput(false);
    }
  }, [values, type]);

  useEffect(() => {
    if (onInputValuesChange) {
      onInputValuesChange(formatDataToTSV(productData));
    }
  }, [productData, onInputValuesChange]);

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
              <Align justify={"center"}>
                {!showInput && (
                  <Styled.PlusIcon onClick={handleAddData} />
                )}
              </Align>
            </>
          )}

          {!isEdit && productData.headers.length > 0 && productData.rows.length > 0 && (
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
