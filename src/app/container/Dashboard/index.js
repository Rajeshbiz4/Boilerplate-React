import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { geneAction } from './logic'
import { Loader, NoDataFound } from '../../components'

class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      flag: false
    };
  }

  render() {
    return (
      <div>
        <h1>github</h1>
        <Loader loading={this.props.gene.loading} error={this.props.gene.error}>
          <NoDataFound />
        </Loader>
      </div>
    )
  }
}

DashBoard.propTypes = {
  geneAction: PropTypes.func.isRequired,
  gene: PropTypes.object.isRequired,
}

DashBoard.defaultProps = {
}

const mapStateToProps = state => ({
  gene: state.gene
})

export default connect(mapStateToProps, { geneAction })(DashBoard)
