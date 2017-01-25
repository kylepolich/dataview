import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class MainView extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
      children: PropTypes.object
  }

  render() {
    return (
        <div className="thinking-capp">
          <div className="container-fluid">
            <div className="row row-centered">
            </div>
            <div className="row row-centered">
            </div>
            {this.props.children}
          </div> 
        </div>
    )
  }
}

export default connect(state => ({ ui: state.ui }))(MainView)
