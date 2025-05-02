import React, { useState } from 'react';
import * as Styled from './style';
import { DownloadProductCard } from '../../../cards/downloadProduct';

const list = [
  {
    name: 'João Silva',
    email: 'joao.silva@email.com',
    company: 'Empresa X',
    phone_number: '(11) 98765-4321',
    product_id: '12345',
    product_name: 'Produto A',
    created_at: '2025-01-10 14:20:30.123',
  },
  {
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    company: 'Empresa Y',
    phone_number: '(21) 99876-5432',
    product_id: '67890',
    product_name: 'Produto B',
    created_at: '2025-01-11 09:15:05.456',
  },
  {
    name: 'Carlos Souza',
    email: 'carlos.souza@email.com',
    company: 'Empresa Z',
    phone_number: '(31) 99887-6543',
    product_id: '11223',
    product_name: 'Produto C',
    created_at: '2025-01-12 11:30:45.789',
  },
];


export function DownloadProductCardList({ list }) {
  // Estado para manter o índice do item ativo
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Styled.Cards>
      {list.map((item, index) => (
        <DownloadProductCard
          key={index}
          name={item.name}
          email={item.email}
          company={item.company}
          phone_number={item.phone_number}
          product_id={item.product_id}
          product_name={item.product_name}
          created_at={item.created_at}
          isBorderActive={activeIndex === index} // Verifica se o item é o ativo
          onClick={() => setActiveIndex(index)} // Altera o item ativo ao clicar
        />
      ))}
      {list.length === 0 && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Nenhum histórico de download.
        </p>
      )}
    </Styled.Cards>
  );
}
