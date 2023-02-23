import React from 'react'
import styled from "styled-components";

const Title = styled.h1`
    font-size:40px;
    color:${({theme})=> theme.colors.primary}
`

function CSSJS(){
  return (
    <div> 
    <Title>
       Styled With Styled Component
    </Title>
    </div>
  )
}

export default CSSJS