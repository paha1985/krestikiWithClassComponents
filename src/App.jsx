import { Component } from 'react';
import { Information } from './Information';
import { Field } from './Field';
//import styles from './app.module.css';

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPlayer: 'X',
			isGameEnded: false,
			isDraw: false,
			field: Array(9).fill(null),
			counter: 0,
		};

		this.cellClick = this.cellClick.bind(this);

		console.log(this.state);
	}

	krestik(cells) {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
				this.setState({ ...this.state, isGameEnded: true });
				return true;
			}
		}
		return false;
	}

	//componentDidMount() {}
	clear() {
		this.setState({
			currentPlayer: 'X',
			isGameEnded: false,
			isDraw: false,
			field: Array(9).fill(null),
			counter: 0,
		});
	}

	cellClick(index) {
		const fieldCopy = [...this.state.field];
		if (this.state.isGameEnded || this.state.isDraw || fieldCopy[index]) return;
		fieldCopy[index] = this.state.currentPlayer;

		// this.krestik(fieldCopy);
		// console.log(this.krestik(fieldCopy));
		this.setState({
			isDraw: this.state.counter === 8,
			isGameEnded: this.krestik(fieldCopy),
			currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
			counter: this.state.counter + 1,
			field: fieldCopy,
		});

		// console.log(this.state);
	}

	render() {
		return (
			<div className="flex items-center justify-center flex-col bg-slate-950 w-full min-h-screen">
				<Information
					player={this.state.currentPlayer}
					gameOver={this.state.isGameEnded}
					draw={this.state.isDraw}
				/>
				<Field click={this.cellClick} cells={this.state.field} />
				<button
					class="bg-white hover:bg-blue-500 text-slate-950 font-bold py-2 px-4 rounded mt-4"
					onClick={() => this.clear()}
				>
					Начать заново
				</button>
			</div>
		);
	}
}
