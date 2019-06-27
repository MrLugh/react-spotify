import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

class AppHeader extends React.Component<any, any> {

    render() {
        return (
            <Header className="header">Player</Header>
        );
    }
}

export default AppHeader;