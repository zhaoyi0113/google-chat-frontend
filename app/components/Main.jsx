import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Main extends React.Component {
  render() {
    return <div style={{display: 'flex', height: '100%', width: '100%'}}>
			<button style={{alignSelf: 'center', margin: 'auto', width: '100px', height: '50px'}} onClick={() => this.props.login()}>Login</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
