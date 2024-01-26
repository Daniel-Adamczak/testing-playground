import React, { useState } from "react";

export const PasswordValidator = () => {
  const [validateInfo,setValidateInfo]=useState('')
  const [password,setPassword]=useState('')

const handleValidate=(e)=>{
e.preventDefault();
if(password.length<3){
  setValidateInfo('Hasło jest za krótkie min 3 znaki')
}
else if(password.length>8){
  setValidateInfo('Hasło jest za długie max 8 znaków')
}
else if(!password.includes('!')&&!password.includes('@')&&!password.includes('#')&&!password.includes('$')&&!password.includes('%')){
  setValidateInfo('Hasło powinno zawierać jeden ze znaków specjalnych ! @ # $ %')
}else{
  setValidateInfo('Hasło jest OK')
}
}

  return (
    <article>
      <p>Password validator</p>
      <input type="password" value={password} onChange={(e)=>{
        setValidateInfo('');
        setPassword(e.target.value)
        }}/>
      <p>{validateInfo}</p>
      
      <button onClick={handleValidate}>Validate</button>
    </article>
  );
};
