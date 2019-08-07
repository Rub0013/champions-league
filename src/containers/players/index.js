import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActions from './actions';
const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(PlayerActions, dispatch) });

class Players extends Component {
    render() {
        return <h1>Players</h1>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Players);
