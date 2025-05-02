import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from "./style"

export function DownloadButton ({idx, onClick, text }){
    return (
        <Styled.DownloadButtonContent
            key={idx}
            rel="noopener noreferrer"
            onClick={onClick}
        >
            <Styled.DownloadIcon />
            {text}
        </Styled.DownloadButtonContent>
    );
};

