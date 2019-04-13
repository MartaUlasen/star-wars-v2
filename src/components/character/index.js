import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter} from 'actions/character';
import { Loader, User } from 'react-feather';

class Character extends Component {
	state = {
		id: this.props.match.params.id,
	}
	
	componentDidMount = () => {
        const { fetchCharacter } = this.props;
        const { id } = this.state;
        fetchCharacter(id);
	}
	renderError() {
        const { error } = this.props;
		if (error) {
			return <p>Failed to load people data</p>
		}
	}

	rederCharacter() {
		const { data } = this.props;
		return (
            <div className="grid-20-80 wrapper">
                <div className="grid-20-80__item grid-20-80__item-title">
                    <User className="icon-user" size={80} />
                </div>
                <div className="grid-20-80__item">Name:</div>
                <div className="grid-20-80__item">{data.name}</div>
                <div className="grid-20-80__item">Gender:</div>
                <div className="grid-20-80__item">{data.gender}</div>
                <div className="grid-20-80__item">Birthday:</div>
                <div className="grid-20-80__item">{data.birth_year}</div>
            </div>
		)
	}

	render() {
		const { isLoading } = this.props;
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

const mapStateToProps = (state) => ({
    ...state.character,
});

const mapDispatchToProps = {
    fetchCharacter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);