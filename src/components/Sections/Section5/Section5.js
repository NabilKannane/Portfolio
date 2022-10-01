import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./Section5.css";
import styled from "styled-components";

export default function Section1() {
  return (
    <div className="section" id="hireme">
      <TitleSection
        title="Contact Me"
        tparagraphe=""
      />

      <Layers>
        <Layout1>
          <ContentL1>
          
          <h2><img src ="https://cdn-icons-png.flaticon.com/512/2584/2584606.png" width={50}/> I'am Excited </h2><br/>
          <p>
          to work on your next project leave a request
          </p>
          </ContentL1>

        </Layout1>

        <Layout2>
          <ContentL2>
            <label>Email</label>
            <br/>
            <Input/>
            <br/>
            <br/>
            <label>Objet</label>
            <br/>
            <Input/>
            <br/>
            <br/>
            <label>Description</label>
            <br/>
            <Input/>
            <br/>
            <br/>
            <Button>Leave a request</Button>

          </ContentL2>

        </Layout2>
      </Layers>
    </div>
    
  );
}

export const Layers = styled.div`
  display: flex;
  margin-bottom : 50px;
`;

export const Layout1 = styled.div`
  margin-right: 20px;
  width: 55%;
  height: 350px;
`;

export const ContentL1 = styled.div`
  margin : 80px;

`;

export const Layout2 = styled.div`
  margin-left: 20px;
  width: 45%;
  height: 350px;
  box-shadow: black 0px 0px 40px;
  border-radius: 10px;
`;

export const ContentL2 = styled.div`
  margin : 50px;

`;

export const Input = styled.input`
  width : 100%;
  padding-top : 2.5px;
  padding-bottom : 2.5px;
  border : none ;
  border-radius : 1px;
`;

export const Button = styled.button`
border : solid var(--sndcolor) 2px;
color : var(--sndcolor);
background : transparent;
padding : 5px;
width : 100%;

`;