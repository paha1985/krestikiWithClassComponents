//import styles from './information.module.css';
import React from 'react';
import { Component } from 'react';

export class Information extends Component {
	constructor(props) {
		super(props);
		this.setState({
			player: this.props.player,
			gameOver: this.props.gameOver,
			draw: this.props.draw,
		});
	}

	render() {
		return (
			<div className="text-red-50 pb-4 text-3xl">
				{this.props.gameOver
					? 'Победил игрок ' + (this.props.player === 'X' ? 'O' : 'X')
					: this.props.draw
						? 'Ничья'
						: 'Ход игрока ' + (this.props.player === 'X' ? 'X' : 'O')}
			</div>
		);
	}
}
