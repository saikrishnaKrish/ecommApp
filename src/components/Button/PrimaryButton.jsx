import React from 'react'

const PrimaryButton = (props) => {
  const {id,style,text,handleBtnClick,className,disabled} = props;
  return (
        <button style={style} id={id} onClick={handleBtnClick} className={className} disabled={disabled}> {text}</button>
  )
}

export default PrimaryButton