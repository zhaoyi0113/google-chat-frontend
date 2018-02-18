import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Chat extends React.Component {

	componentDidMount() {
		const token = this.props.location.query.token;
	}

  render() {
    return <div style={{display: 'flex', height: '100%', width: '100%'}}>
		chat
		</div>;
  }
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => {
			dispatch(actions.login())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
