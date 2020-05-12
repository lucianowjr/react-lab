import React, { Component } from "react";
import api from "./api";

class App extends Component {
	state = {
		livros: [],
	};

	async componentDidMount() {
		const response = await api.get();
		console.log(response);
		this.setState({ livros: response.data.documents });
	}

	render() {
		const { livros } = this.state;

		return (
			<div>
				<h1>Listar os Filmes:</h1>
				<ul
					style={{
						listStyleType: "none",
						marginLeft: 0,
						marginTop: 30,
						padding: 0,
					}}
				>
					{livros.map((livro) => (
						<li key={livro.name} style={{ marginBottom: 50 }}>
							<h2>
								<strong>Título: </strong>
								{livro.fields.title.stringValue}
							</h2>
							<h4>
								<strong>Autor: </strong>
								{livro.fields.author.stringValue}
							</h4>
							<h4>
								<strong>ISBN: </strong>
								{livro.fields.isbn.stringValue}
							</h4>
							<h4>
								<strong>Páginas: </strong>
								{livro.fields.pages.stringValue}
							</h4>
							<h4>
								<strong>URL: </strong>
								<a
									href={livro.fields.url.stringValue}
									target="_blank"
									rel="noopener noreferrer"
								>
									{livro.fields.url.stringValue}
								</a>
							</h4>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
