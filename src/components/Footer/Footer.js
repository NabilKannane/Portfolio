import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Footerdiv>Created by nabil kannane 2022</Footerdiv>
  )
}



export const Footerdiv = styled.div`
background : black;
padding : 10px;
font-size : 0.8rem;
border-bottom : solid 5px var(--sndcolor);
text-align : center;
position : relative;
bottom : 0%;
`;