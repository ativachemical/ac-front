import styled from 'styled-components'
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { BaseIcon } from '../../style';

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  user-select: none;
`;

export const PageNumber = styled.div`
  margin: 5px 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? 'var(--accent-color)' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : 'var(--accent-color)')};
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  font-size:14px;

  &:hover {
    background-color: var(--accent-color);
    opacity:.85;
    color:var(--solid-color);
  }
`;


export const ArrowLeftIcon = styled(BaseIcon).attrs({
    as: ArrowLeft,
})`
width:22px;
border-radius: 5px;
&:hover {
    background-color: var(--bg-secondary-color);
}
`
export const ArrowRightIcon = styled(BaseIcon).attrs({
    as: ArrowRight,
})`
width:22px;
border-radius: 5px;
&:hover {
    background-color: var(--bg-secondary-color);
}
`

