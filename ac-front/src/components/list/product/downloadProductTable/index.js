import React, { useState, useEffect, useCallback } from "react"
import * as Styled from "./style"
import { ProductCard } from "../card"
import { Gap, ScrollX } from "../../../../style"
import { Pagination } from "../../../pagination"
import { useSelector, useDispatch } from "react-redux"
import { DownloadButton, DownloadProductCardList, DownloadProductModal, ProductModalById, SearchInput } from "../../../index"
import { toggleIsModalByIdOpen } from "../../../../redux/product/slice"
import api from "../../../../services/ac-api"
import { getLocalStorage } from "../../../../utils"

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

export function DownloadProductTable({ list = [] }) {
    const headers = ["Nome", "Email", "Empresa", "Telefone", "ID do Produto", "Produto", "Data de Criação"];
    
    return (
        <ScrollX>
            <Styled.Table>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.company}</td>
                            <td>{item.phone_number}</td>
                            <td>{item.product_id}</td>
                            <td>{item.product_name}</td>
                            <td>{new Date(item.created_at).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Styled.Table>
        </ScrollX>
    );
}

