import styled from 'styled-components'
import {User, Email, Lock, LockOpen} from '../../../assets/icons/index'

export const Input = styled.input`
background-color: var(--bg-secondary-color);
border:2px solid var(--bg-secondary-color);
padding: 7px 40px;
color: var(--text-solid);
border-radius:10px;
font-size:15px;
text-align:center;

&::placeholder{
    color:var(--text-color);
}

&:focus{
    border:2px solid var(--text-secundary-color);
}

&:focus, 
&:valid {
    outline: none;
}
`

export const UserIcon = styled(User)`
    margin-left:10px;
    position: absolute;
`

export const EmailIcon = styled(Email)`
    margin-left:10px;
    position: absolute;
`

export const LockIcon = styled(Lock)`
    margin-left:10px;
    position: absolute;
    cursor: pointer;
`
export const LockOpenIcon = styled(LockOpen)`
    margin-left:10px;
    position: absolute;
    cursor: pointer;
    rotate:20deg;
`

export const Content = styled.div`
    display:flex;
    align-items: center;
`