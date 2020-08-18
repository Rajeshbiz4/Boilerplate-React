import React, { Component } from "react";
import PropTypes from "prop-types";
import { parse, stringify } from "query-string";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { withRouter } from "react-router-dom";

class TabView extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentTab:0
    };
  }

  

  setCurrentTab(currentTab) {
    this.setState({
      currentTab
    });
  }

  

  renderTabList() {
    return this.props.data.map((item, i) => <Tab key={i}>{item.name}</Tab>);
  }

  renderContentList() {
    return this.props.data.map((item, i) => (
      <TabPanel key={i}> {i} </TabPanel>
    ));
  }

  render() {
    return (
      <div>
        <Tabs
          selectedIndex={this.state.currentTab}
          onSelect={(index) => this.setCurrentTab(index)}
        >
          <TabList>{this.renderTabList()}</TabList>
          <div className="tab-container tab-ontology tab-content">
            {this.props.childComponent}
          </div>
          {this.renderContentList()}
        </Tabs>
      </div>
    );
  }
}
TabView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  childComponent: PropTypes.object.isRequired,
};

TabView.defaultProps = {
  location: PropTypes.shape({
    search: null,
  }),
  history: {
    push: () => "",
  },
};

export default withRouter(TabView);
