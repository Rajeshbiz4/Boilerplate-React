import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { parse } from 'query-string'
import { fetchUserAction } from './logic'
import { Loader } from '../../components'
import User from '../user'

const styleObj = {
  padding: '10px',
  margin: '10px'
}

class DashBoard extends Component {
  constructor(props) {
    super(props);
    const q = parse(this.props.location.search)
    this.state = {
      query: q.q || ''
    };
  }

  componentDidMount() {
    if (this.state.query) {
      this.props.fetchUserAction({ q: this.state.query })
    }
  }

  componentWillReceiveProps(nextProps) {
    const oldQuery = parse(this.props.location.search)
    const newQuery = parse(nextProps.location.search)
    if (oldQuery.q !== newQuery.q) {
      this.setState({
        query: newQuery.q
      }, () => {
        this.props.fetchUserAction({ q: this.state.query })
      })
    }
  }

  renderList() {
    if (this.props.gene.flag) {
      return this.props.gene.data.map((item, index) => (
        <User key={index} item={item} />
      ))
    }
    return null
  }
  render() {
    return (
      <div style={styleObj}>
        <Loader loading={this.props.gene.loading} error={this.props.gene.error}>
          {/* Total Results : 260
          {this.renderList()} */}
        </Loader>
      </div>
    )
  }
}

DashBoard.propTypes = {
  geneAction: PropTypes.func,
  gene: PropTypes.object.isRequired,
}

DashBoard.defaultProps = {
}

const mapStateToProps = state => ({
  gene: state.gene
})

export default withRouter(connect(mapStateToProps, { fetchUserAction })(DashBoard))
