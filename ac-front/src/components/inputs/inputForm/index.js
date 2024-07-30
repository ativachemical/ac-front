import React, { useState } from 'react'
import * as Styles from './style'

export function InputForm({ type, name, placeholder, value, onChange }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  
  const handlesetIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  
  const inputType = isShowPassword && name === 'password' ? 'text' : type;
  
  return (
    <Styles.Content>
      {name === "user" && <Styles.UserIcon />}
      {name === "email" && <Styles.EmailIcon />}
      {name === "password" && !isShowPassword && <Styles.LockIcon onClick={handlesetIsShowPassword} />}
      {name === "password" && isShowPassword && <Styles.LockOpenIcon onClick={handlesetIsShowPassword} />}
      <Styles.Input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Styles.Content>
  );
}