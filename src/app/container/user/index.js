import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Loader } from "../../components";
import { getUserDetailsAction } from "./logic";

const styleObj = {
  width: "72%",
  height: "25%",
  "margin-left": "9%",
  display: "flex",
  padding: "15px",
  "background-color": "#fff",
  "text-align": "left",
};
const repoItem = {
  padding: "10px",
  background: "#fff",
  border: "solid 1px #ddd",
  width: "72.7%",
  "margin-left": "9%",
  "text-align": "-webkit-left",
};

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowDetails: false,
    };
    this.expanded = this.expanded.bind(this);
  }
  expanded() {
    this.setState(
      {
        ShowDetails: !this.state.ShowDetails,
      },
      () => {
        if (this.state.ShowDetails) {
          this.props.getUserDetailsAction(this.props.item.login);
        }
      }
    );
  }
  renderRepositories() {
    return this.props.userDetail.data.map((item, index) => (
      <div key={index} style={repoItem}>
        <div>Name : {item.name}</div>
        <div>Created Date : {item.created_at}</div>
      </div>
    ));
  }

  render() {
    const item = this.props.item;
    return (
      <div style={{ "margin-bottom": "2%" }}>
        <div style={styleObj}>
          <img src={item.avatar_url} alt="no profile" />
          <div>
            <h3>{item.login}</h3>
            <div>Profile URL:{item.repos_url}</div>
            <div> Id:{item.id}</div>
            <input type="button" value="Show Details" onClick={this.expanded} />
          </div>
        </div>
        {this.state.ShowDetails ? (
          <Loader
            loading={this.props.userDetail.loading}
            error={this.props.userDetail.error}
          >
            {this.renderRepositories()}
          </Loader>
        ) : null}
      </div>
    );
  }
}

User.propTypes = {
  getUserDetailsAction: PropTypes.func.isRequired,
  userDetail: PropTypes.object.isRequired,
};

User.defaultProps = {};

const mapStateToProps = (state) => ({
  userDetail: state.userDetail,
});

export default withRouter(
  connect(mapStateToProps, { getUserDetailsAction })(User)
);
