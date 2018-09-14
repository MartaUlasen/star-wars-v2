import React, { Component } from 'react';
import { Loader, User } from 'react-feather';

class Character extends Component {
	state = {
		id: this.props.match.params.id,
		character: [],
		isLoading: false,
		error: null,
	}
	
    componentDidMount() {
		this.setState({ isLoading: true  });
		const url = 'https://swapi.co/api/people/' + this.state.id + '/';
		
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ isLoading: false, character: data });
			})
			.catch(error => {
				this.setState({ isLoading: false, error });
			})
	}
	
	renderError() {
		if (this.state.error) {
			return <p>Failed to load people data</p>
		}
	}

	rederCharacter() {
		const character = this.state.character;

		return (
			<div className="character wrapper">
				<table className="table table-striped table-hover table-bordered">
					<tbody>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">
								<User className="icon-user" size={80} />
							</td>
							<td className="js-director col-8 col-md-9 col-lg-10" >{character.name}</td>
						</tr>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Gender:</td>
							<td className="js-director col-8 col-md-9 col-lg-10" >{character.gender}</td>
						</tr>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Birthday:</td>
							<td className="col-8 col-md-9 col-lg-10">{character.birth_year}</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
		
	}

	render() {
		const isLoading = this.state.isLoading;
		return (
			<div>
				{this.renderError()}
				{isLoading
					? <Loader className="icon-loading" size={20} />
					: this.rederCharacter()
				}
			</div>				
        );
    }
}

export default Character;