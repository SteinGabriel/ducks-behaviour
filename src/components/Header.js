import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 9em;
  background: #6a1b9a;
  border-bottom: #38006b 4px solid;
`

const TitleContainer = styled.div`
  width: 65vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 5px;
`

const Subheading = styled.h4`
  color: #fff;
`

export default class Header extends Component {
  render() {
    return (
      <Container>
        <TitleContainer>
          <Title>Ducks Reasearch</Title>
          <Subheading>
            {`Hi! We are trying to understand more about ducks feed behaviour
            around the world and need your help.
            Please, fill all the fields above.`}
          </Subheading>
        </TitleContainer>
      </Container>
    )
  }
}
