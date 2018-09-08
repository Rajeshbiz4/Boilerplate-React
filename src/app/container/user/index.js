import React, { Component } from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';


const styleObj = {
    width: '72%',
    height: '25%',
    'margin-left': '9%',
    display: 'flex',
    padding: '15px',
    'background-color': '#fff',
    'text-align': 'left'
}
class User extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.expanded = this.expanded.bind(this)
    }
    expanded(){
        console.log('expanded');
    }

    render() {
        const item = this.props.item
        return (
            <div>
            <div style={styleObj}>
                <img src={item.avatar_url} />
                <div>
                    <h3>{item.login}</h3>
                    <div>Profile URL:{item.repos_url}</div>
                    <div> Id:{item.id}</div>
                </div>
            </div>
            <Accordion>
            <AccordionItem title={`Show Details`} expanded={item === 1} onClick={this.expanded}>
                <div>
                    {item.login}
                </div>
            </AccordionItem>
        </Accordion>
        </div>
        )
    }
}

User.propTypes = {}

User.defaultProps = {}

export default User
