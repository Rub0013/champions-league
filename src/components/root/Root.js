import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import Players from '../../containers/players';
import Leagues from '../../containers/leagues';
import './Root.css';

const { Header, Sider, Content } = Layout;

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            collapsed: !state.collapsed
        }));
    }

    render() {
        return (
            <Layout className="root-container">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <NavLink activeClassName="active" to="/leagues">
                                <Icon type="trophy" />
                                <span>Leagues</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink activeClassName="active" to="/leagues">
                                <Icon type="team" />
                                <span>Teams</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink activeClassName="active" to="/players">
                                <Icon type="user" />
                                <span>Players</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={() => this.toggle()}
                        />
                    </Header>
                    <Content className="content-container">
                        <Switch>
                            <Route exact path="/" render={() => <Redirect to="/leagues" />} />
                            <Route exact path="/leagues" component={Leagues} />
                            <Route exact path="/players" component={Players} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Root;
