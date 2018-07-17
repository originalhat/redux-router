import React from 'react'
import {connect} from "react-redux";
import {fetchThings} from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.doFetchThings(this.props.fetchType);
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.posts)}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      posts: state.posts
    }
  },
  (dispatch) => {
    return {
      doFetchThings: (fetchType) => {
        dispatch(fetchThings(fetchType))
      }
    }
  }
)(Home);

