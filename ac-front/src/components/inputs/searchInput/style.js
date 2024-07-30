import styled from 'styled-components';
import { Search, Filter, List, Table, Close, Refresh, Settings, Plus } from '../../../assets/icons/index'
import { BaseIcon } from '../../../style';


export const Center = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const Input = styled.input`
  width: 100%;
  height:100%;
  margin: 0 auto; /* Center the input */
  background-color: var(--bg-secondary-color);
  padding: 10px 20px 10px 20px; /* Adjust padding as needed */
  color: var(--text-solid);
  border-radius: 32px;
  font-size: 16px;
  border: none;

  &::placeholder {
    color: var(--txt-primary);
  }

  &:focus {
    border: 2px solid var(--text-secondary);
    outline: none;
  }

  &:focus,
  &:valid {
    outline: none;
  }
`;

export const SearchIcon = styled(BaseIcon).attrs({
  as: Search,
})`
  fill: var(--text-solid);
`;

export const FilterIcon = styled(BaseIcon).attrs({
  as: Filter,
})`
  fill: var(--text-solid);
`;


export const All = styled.div`
user-select:none;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  // align-items: center;
  gap:10px;
  height:38px;
  @media(width < 768px){
    gap:10px;
  }
`;

export const BgIcon = styled.div`
  display: flex;
  height:100%;
  align-items: center;
  background-color: var(--bg-secondary-color);
  padding:0 5px 0 5px;
  gap: 20px;
  border-radius: 12px;

  svg {
    cursor: pointer;
  }
`;

export const SpaceTop = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`

export const CloseIcon = styled(BaseIcon).attrs({
  as: Close,
})`
  fill: var(--accent-color);
`;

export const PlusIcon = styled(BaseIcon).attrs({
  as: Plus,
})`
fill: var(--text-apresentation-color);
`;

export const ListIcon = styled(BaseIcon).attrs({
  as: List,
})`
  fill: var(--accent-color);
  width:25px;
`;

export const TableIcon = styled(BaseIcon).attrs({
  as: Table,
})`
  fill: var(--accent-color);
  width:25px;
`;

export const RefreshIcon = styled(BaseIcon).attrs({
  as: Refresh,
})`
  fill: var(--accent-color);
  width:25px;
`;

export const SettingsIcon = styled(BaseIcon).attrs({
  as: Settings,
})`
  fill: var(--accent-color);
  width:25px;
`;

