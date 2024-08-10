import React from 'react';
import { Component } from 'react';

export class Field extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cells: this.props.cells,
		};
	}

	render() {
		return (
			<div className="flex flex-wrap w-72 h-72">
				{this.props.cells.map((cell, i) => (
					<button
						key={i}
						onClick={() => this.props.click(i)}
						className="min-w-24 min-h-24 bg-white border border-black text-3xl"
					>
						{cell}
					</button>
				))}
			</div>
		);
	}
}
