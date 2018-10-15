import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Footer extends React.Component {
	render() {
		return (
				<ul className="inline_box">
					<li className="nav_item"><Link to='home'>首页</Link></li>
					<li className="nav_item"><Link to='class'>分类</Link></li>
					<li className="nav_item"><Link to='mine'>我的</Link></li>
				</ul>
		)
	}
}