import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as PlayerActions from './actions';

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(PlayerActions, dispatch) });

class Players extends Component {
    componentDidMount() {
        this.props.actions.getPlayersList();
    }

    render() {
        return <h1>Players</h1>;
    }
}

Players.propTypes = {
    actions: PropTypes.shape({
        getPlayersList: PropTypes.func
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Players);
