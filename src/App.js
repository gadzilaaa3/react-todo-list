import { GithubOutlined, BookOutlined } from '@ant-design/icons';
import { Layout, Row, Col } from 'antd';
import React from 'react';
import NavBar from './components/NavBar';
import TodoContainer from './components/TodoContainer';
const { Content, Footer } = Layout;

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

const items = [
	getItem('GitHub', '0', <GithubOutlined />),
	getItem('Todo', '1', <BookOutlined />),
];

const App = () => {

	return (
		<>
			<Row
				align={'middle'}
			>
				<Col span={20} offset={2}>
					<Layout
						style={{
							minHeight: '100vh',
						}}
					>
						<NavBar items={items} />

						<Layout className="site-layout">
							<Content
								style={{
									margin: '20px 20px',
								}}
							>
								<TodoContainer />
							</Content>
							<Footer
								style={{
									textAlign: 'center',
								}}
							>
								Created by gadzilaaa3 ©{new Date().getFullYear()}
							</Footer>
						</Layout>
					</Layout>
				</Col>
			</Row>
		</>
	);
};

export default App;
