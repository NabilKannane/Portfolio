import React from 'react'
import styled from 'styled-components'

export default function TitleSection(props) {

  return (
    <Title>
        <TitleH2 className='Title-Section'>{props.title}</TitleH2>
        <p>{props.tparagraphe}</p>
    </Title>
  )
}


export const Title = styled.div`
color : #fff;
text-align : center;
padding-top : 50px;
padding-bottom : 50px;
`

export const TitleH2 = styled.h3`
font-size : 1.75rem;
color : var(--sndcolor);
margin-bottom : 10px;
`

