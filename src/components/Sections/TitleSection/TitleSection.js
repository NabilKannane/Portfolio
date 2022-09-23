import React from 'react'
import styled from 'styled-components'

import "./TitleSection.css"

export default function TitleSection(props) {

  return (
    <Title>
        <h2 className='Title-Section'>{props.title}</h2><br/>
        <p>{props.tparagraphe}</p>
    </Title>
  )
}


export const Title = styled.div`
color : black;
text-align : center;

`
