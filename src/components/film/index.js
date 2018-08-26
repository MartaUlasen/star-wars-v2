import React, { Component } from 'react';
import { Loader } from 'react-feather';

class Film extends Component {
    componentDidMount() {
        console.log(this.props.match.params)
    }

    render() {
        return (<Loader className="icon-loading" font={20} />)

        return (
            <div className="film">
                <h4 className="film-title">
                    Episode
                    <span className="js-episode film-episode">4</span>:
                    <span className="js-title text-uppercase film-title">A new hope</span>
                </h4>
                <table className="table table-striped table-hover table-bordered">
                    <tbody>
                        <tr className="row">
                            <td className="col-4 col-md-3 col-lg-2">Director:</td>
                            <td className="js-director col-8 col-md-9 col-lg-10" >George Lucas</td>
                        </tr>
                        <tr className="row">
                            <td className="col-4 col-md-3 col-lg-2">Produser:</td>
                            <td className="js-producer col-8 col-md-9 col-lg-10">Gary Kurtz, Rick McCallum</td>
                        </tr>
                        <tr className="row">
                            <td className="col-4 col-md-3 col-lg-2">Date of reliase:</td>
                            <td className="js-release-date col-8 col-md-9 col-lg-10">1975-05-25</td>
                        </tr>
                        <tr className="row">
                            <td className="col-4 col-md-3 col-lg-2">Characters:</td>
                            <td className="col-8 col-md-9 col-lg-10">
                                <ul className="characters js-characters"></ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="stage">
                    <div className="js-opening-crawl stage__crawl-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eligendi dolorem repellendus? Temporibus, molestias, molestiae, saepe, quae id eveniet iste beatae cum aliquam nihil dolorum debitis dolor quas delectus repellat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, impedit, laudantium, in minima ipsa ullam cumque soluta tempore totam inventore perspiciatis neque ea numquam autem beatae dignissimos enim consequatur natus!</div>
                </div>
            </div>
        );
    }
}

export default Film;
