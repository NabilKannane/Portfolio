import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            
              <Card>

                 <img src="https://via.placeholder.com/400x250" />
                 <SousCard >
                 <Title>New Project I</Title>
                 <Parag>Lorem</Parag>
                  <Btn>View all Project</Btn>
                  </SousCard>
              </Card>
            
          </div>
          <div>

          <Card>
                 <img src="https://via.placeholder.com/400x250" />
                 <SousCard >
                 <Title>New Project I</Title>
                 <Parag>Lorem</Parag>
                  <Btn>View all Project</Btn>
                  </SousCard>
              </Card>

          </div>
          <div>

          <Card>
                 <img src="https://via.placeholder.com/400x250" />
                 <SousCard >
                 <Title>New Project I</Title>
                 <Parag>Lorem</Parag>
                  <Btn>View all Project</Btn>
                  </SousCard >
              </Card>

          </div>
          <div>

          <Card>
                 <img src="https://via.placeholder.com/400x250" />
                 <SousCard >
                 <Title>New Project I</Title>
                 <Parag>Lorem</Parag>
                  <Btn>View all Project</Btn>
                  </SousCard >
              </Card>

          </div>
          <div>

          <Card>
                 <img src="https://via.placeholder.com/400x250" />
                 <SousCard >
                 <Title>New Project I</Title>
                 <Parag>Lorem</Parag>
                  <Btn>View all Project</Btn>
                  </SousCard>
              </Card>

          </div>
          <div>

          <Card>
                 <img src="https://via.placeholder.com/400x250" />
                 <SousCard >
                 <Title>New Project I</Title>
                 <Parag>Lorem</Parag>
                  <Btn>View all Project</Btn>
                  </SousCard>
              </Card>

          </div>
        </Slider>
      </div>
    );
  }
}


export const Card = styled.div`
width : 400px;
text-align : left;
padding: 5px;
padding-top : 20px;
padding-bottom : 7.5px;
box-shadow : black 10px 5px 40px;
margin-top : 20px;
margin-bottom : 40px;
border-radius : 5px;
`;


export const SousCard = styled.div`
`;


export const Title = styled.h3`
margin : 15px;
color : #4a5cfc;
`;


export const Parag = styled.p`
margin : 10px;

`;

export const Btn = styled.button`
background : transparent;
border : solid #4a5cfc;
padding : 10px;
color : #4a5cfc;
width : 100%;
border-radius : 5px;
`;
