import React from 'react';
import { Layout, Avatar } from 'antd';
const { Header } = Layout;

class AppHeader extends React.Component<any, any> {

    render() {

        const avatarUrl = "https://png.pngtree.com/svg/20161212/f93e57629c.svg";
        const user = {
            firstName: 'Gastón',
            lastName: 'Elordi'
        };

        return (
            <Header className="header">
                <Avatar src={avatarUrl} />
                {(user.firstName[0] + user.lastName[0]).toUpperCase()}
            </Header>
        );
    }
}

export default AppHeader;