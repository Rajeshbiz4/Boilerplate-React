import React, { Component } from 'react'
import { NoDataFound } from '../../components'
import Header from '../header'
import DashBoard from '../Dashboard'

class Main extends Component {

  render() {
    return (
      <div>
         <Header />
         <DashBoard />
         <NoDataFound />
      </div>
    )
  }
}

Main.propTypes = {}

Main.defaultProps = {}

export default Main
