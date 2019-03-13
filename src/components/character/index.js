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
			<div className="character wrapper">
				<table className="table table-striped table-hover table-bordered">
					<tbody>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">
								<User className="icon-user" size={80} />
							</td>
							<td className="js-director col-8 col-md-9 col-lg-10" >{data.name}</td>
						</tr>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Gender:</td>
							<td className="js-director col-8 col-md-9 col-lg-10" >{data.gender}</td>
						</tr>
						<tr className="row">
							<td className="col-4 col-md-3 col-lg-2">Birthday:</td>
							<td className="col-8 col-md-9 col-lg-10">{data.birth_year}</td>
						</tr>
					</tbody>
				</table>
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