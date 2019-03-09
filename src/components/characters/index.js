import React, { Component } from 'react';
import { Loader } from 'react-feather';
import qs from 'query-string';
import CharacterCard from 'components/character-card';
import Pagination from './pagination';

class Characters extends Component {
	state = {
		people: [],
		isLoading: false,
		error: null,
		previous: null,
		next: null,
	}

	componentDidMount() {
        const { location: { search } } = this.props;
        const pageNum = qs.parse(search).page || '';
		this.getCharacters(`https://swapi.co/api/people/?page=${pageNum}`);
	}

	getCharacters = (url) => {
        const { history, location: { pathname } } = this.props;
        const pageNum = qs.parseUrl(url).query.page;

        history.push({
            pathname,
            search: `?page=${pageNum}`
        });

        this.setState({ isLoading: true });
        
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ isLoading: false, people: data.results, previous: data.previous, next: data.next });
			})
			.catch(error => {
				this.setState({ isLoading: false, error });
			})
	}
	
	renderError() {
		if (this.state.error) {
			return <p>Failed to load characters data</p>
		}
	}

	renderPagination = (previous, next) => {
        if (previous == null && next == null) return null;

        return (
            <div className="wrapper">
                <Pagination previous={previous} next={next} getCharacters={this.getCharacters}/>
            </div>
        )
	}

	render() {
		const { people, isLoading, previous, next } = this.state;
		
		return (
			<div className="wrapper">
				<div className="title">Characters</div>
				{this.renderError()}
				{this.renderPagination(previous, next)}
				<hr className="separator" noshade="true"/>
				{
					isLoading
					? <Loader className="icon-loading" size={30} />
					:	<ul className="grid">
							{people.map((character, index) => {
								return  <li className="grid__item" key={index}>
											<CharacterCard data={character}/>
										</li>
							})}
						</ul>		
				}
			</div>
		)
	}
}

export default Characters;