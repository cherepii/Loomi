import React, { Component } from 'react'

import { ErrorText, ErrorWrapper } from './styles'

export class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if(this.state.hasError){
      return <ErrorMessage />
    }

    return (
      this.props.children
    )
  }
}

const ErrorMessage = () => {
  return (
    <ErrorWrapper>
      <ErrorText>Упс, что то пошло не так. Мы уже работам с этим...</ErrorText>
    </ErrorWrapper>
  )
}

export default ErrorBoundary;