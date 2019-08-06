import React, {Component} from "react";
import {FaMapMarker} from "react-icons/fa";
import "./scss/Hidder.scss";

export default class AddressText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            zip: "",
            country: "",
            county: "",
            hidden: true
        }
    }

    componentDidMount() {
        this.fetchLocation();
    }

    fetchLocation = () => {
        const countryUrl = `https://restcountries.eu/rest/v2/alpha/${this.props.location.country}`;
        const cityUrl = `https://geo.api.gouv.fr/communes?codePostal=${this.props.location.zip}&format=json`;
        let cityName = "", countyCode = "";

        fetch(countryUrl)
            .then(response => response.json())
            .then((data) => this.setState({country: data["name"]}))
            .catch((e) => console.log("error", e));

        fetch(cityUrl)
            .then(response => response.json())
            .then(data => {
                countyCode = data[0]["codeDepartement"];
                cityName = data[0]["nom"];
                fetch(`https://geo.api.gouv.fr/departements?code=${countyCode}&fields=nom&format=json`)
                    .then(response => response.json())
                    .then((data) => {
                        this.setState({city: cityName, county: data[0]["nom"]});
                        setTimeout(() => {
                            this.setState({hidden: false});
                        }, 100);
                    })
                    .catch((e) => console.log("error", e));
            })
            .catch((e) => console.log("error", e));
    };

    render() {
        const state = this.state;
        const text = `${state.city}, ${state.county === state.city ? '' : state.county + ", "} ${state.country}`;
        return <h6 className="address">
            <a
                href={`https://www.google.com/maps/place/${this.props.location.zip}+${this.state.city}/`}><FaMapMarker/></a>
            <span className={this.state.hidden ? 'address-hidden' : ''}>{text}</span>
        </h6>;
    }
}