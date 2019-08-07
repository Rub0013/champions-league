import React, { Component } from 'react';
import { connect } from 'react-redux';
import produce from 'immer';
import { Table, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import './index.css';
import ManageLeaguesModal from '../../components/manage-leagues-modal/ManageLeagueModal';
import * as LeaguesActions from './actions';
import { selectLeagues, selectLoading } from './selectors';

const mapStateToProps = createStructuredSelector({
    loading: selectLoading(),
    leagues: selectLeagues()
});

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(LeaguesActions, dispatch) });

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Teams',
        dataIndex: 'teams',
        key: 'teams',
        render: () => {
            return 'Arsenal';
        }
    },
    {
        title: 'Action',
        key: 'action'
    }
];

class Leagues extends Component {
    constructor(props) {
        super(props);
        this.state = { visibleAddLeagueModal: false };
        this.toggleAddLeagueModal = this.toggleAddLeagueModal.bind(this);
        this.createLeague = this.createLeague.bind(this);
    }

    componentDidMount() {
        this.props.actions.getLeaguesList();
    }

    toggleAddLeagueModal() {
        this.setState(state =>
            produce(state, draftState => {
                draftState.visibleAddLeagueModal = !state.visibleAddLeagueModal;
            })
        );
    }

    createLeague(data) {
        this.props.actions.addLeague(data);
    }

    render() {
        return (
            <div>
                <div className="league-table-actions">
                    <Button
                        loading={this.props.loading}
                        type="primary"
                        onClick={() => this.toggleAddLeagueModal()}
                    >
                        Create League
                    </Button>
                </div>
                <Table loading={this.props.loading} columns={columns} dataSource={this.props.leagues} />
                <ManageLeaguesModal
                    title={'Add League'}
                    closeModal={this.toggleAddLeagueModal}
                    visible={this.state.visibleAddLeagueModal}
                    manageLeague={this.createLeague}
                />
            </div>
        );
    }
}

Leagues.propTypes = {
    actions: PropTypes.shape({
        addLeague: PropTypes.func,
        getLeaguesList: PropTypes.func
    }),
    leagues: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            key: PropTypes.number,
            teams: PropTypes.array
        })
    ),
    loading: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leagues);
