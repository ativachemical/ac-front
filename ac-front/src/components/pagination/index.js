import React, { useState } from 'react';
import * as Styled from './style.js';

export function Pagination({ totalPages, jumpPerPage = 5, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevious = () => {
    const previousPage = Math.max(1, currentPage - jumpPerPage); // Avança para a página anterior de 5 em 5
    setCurrentPage(previousPage);
    onPageChange(previousPage);
  };

  const handleNext = () => {
    const nextPage = Math.min(totalPages, currentPage + jumpPerPage); // Avança para a próxima página de 5 em 5
    setCurrentPage(nextPage);
    onPageChange(nextPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const halfJumpPerPages = Math.floor(jumpPerPage / 2);
    const startPage = Math.max(1, currentPage - halfJumpPerPages);
    const endPage = Math.min(totalPages, startPage + jumpPerPage - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Styled.PageNumber key={i} onClick={() => handleClick(i)} active={i === currentPage}>
          {i}
        </Styled.PageNumber>
      );
    }

    return pageNumbers;
  };

  return (
    <Styled.PaginationContainer>
      {currentPage > 1 && (
        <Styled.ArrowLeftIcon onClick={handlePrevious}/>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <Styled.ArrowRightIcon onClick={handleNext}/>
      )}
    </Styled.PaginationContainer>
  );
}
