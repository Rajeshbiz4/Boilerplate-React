import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";
// import { NoDataFound } from '../../components'


const options = ['one', 'two', 'three']
const defaultOption = options[0]
class Header extends Component {
  constructor(){
      super();
      this.state = {
        inputValue: 'yo',
      };
      this._onSelect = this._onSelect.bind(this);
      this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _onSelect(){
      console.log('_onSelect')
  }

  _handleKeyPress(e) {
    if (e.key === 'Enter') {
        this.props.history.push(`?q=${e.target.value}`);
    }
  }

  render() {
    return (
         <header className="App-header">
         <div className='header-container'>
         <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
         <div className="Dropdown-root"><input type='text' className='Dropdown-control' onKeyPress={this._handleKeyPress} /></div>
         {/* <input type='text' /> */}
         </div>
         </header>
    )
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default withRouter(Header)
