import React, { Component } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './store'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 70vw;
  height: auto;
  margin: 0 auto;
  padding: 4em;
  display: flex;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <PageContainer>
            <Form />
          </PageContainer>
        </div>
      </Provider>
    )
  }
}

export default App
