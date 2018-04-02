import React from 'react'
import { Col } from 'reactstrap'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  padding: 40px;
  height: 100%;
  background: #FCE4EC;
`

class CuteNotFoundPage extends React.Component {
  render() {
    return(
      <ErrorContainer>
        <Col style={{margin: "20px"}} sm="12" md={{ size: 4, offset: 4 }} >
           <h1 style={{color: "rgb(212, 148, 147)"}}>oopsie woopsie we're sowwy (◕ᴗ◕✿)</h1>
           <p>
             Uwu we made a wucky wucky! The code monkeys at our headquaters are working VEWY HAWD to fix this!
           </p>
        </Col>
      </ErrorContainer>
    )
  }
}

export default CuteNotFoundPage
