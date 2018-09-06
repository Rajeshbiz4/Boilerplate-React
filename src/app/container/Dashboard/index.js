import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { parse, stringify } from 'query-string'
import { fetchUserAction } from './logic'
import { Loader, NoDataFound } from '../../components'

const styleObj = {
  border: 'solid 1px #ddd',
  padding: '10px',
  margin: '10px',
  'border-radius': '5px'
}

class DashBoard extends Component {
  constructor(props) {
    super(props);
    const q = parse(this.props.location.search)
    this.state = {
      query : q.q || ''
    };
  }

  componentDidMount(){
     if(this.state.query){
       this.props.fetchUserAction({q:this.state.query})
     }
  }

  componentWillReceiveProps(nextProps){
    const oldQuery = parse(this.props.location.search)
    const newQuery = parse(nextProps.location.search)
    if(oldQuery.q !== newQuery.q){
       this.setState({
      query : newQuery.q
       }, () => {
        this.props.fetchUserAction({q:this.state.query})
       })
    }
  }
  render() {
    return (
      <div style={styleObj}>
        <Loader loading={this.props.gene.loading} error={this.props.gene.error}>
           YO
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

export default withRouter(connect(mapStateToProps, { fetchUserAction })(DashBoard))
