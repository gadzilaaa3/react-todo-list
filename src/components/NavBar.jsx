import { Layout, Menu } from 'antd';
import React from 'react';
const { Sider } = Layout;

const NavBar = ({ items }) => {
	const [collapsed, setCollapsed] = React.useState(false);

	const onSelectMenu = (e) => {
		console.log(e);
	};

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onSelectMenu} />
		</Sider>
	)
};

export default NavBar;
