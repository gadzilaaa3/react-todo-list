import React from 'react';
import { theme } from 'antd';

const TodoContainer = ({ }) => {

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<div
			style={{
				padding: 24,
				minHeight: 360,
				background: colorBgContainer,
			}}
		>
			Content
		</div>
	)
};

export default TodoContainer;
