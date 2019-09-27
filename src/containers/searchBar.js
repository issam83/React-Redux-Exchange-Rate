import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCountries, fetchRateExchange} from '../actions/index'
const lodash = require('lodash')

class SearchBar extends Component {
    
componentWillMount() {
    this.props.fetchCountries();
    
    }

renderSelectCountries(){
    return (
        <select 
        className='form-control searchBar'
        onChange={e => this.onChangeCountry(e)}>
            {this.props.countries.map(c => {
                return (
             <option value={c.code} key={c.code}>
             {c.name}       
             </option>
                )}    
            )}
          </select>
    )
}

onChangeCountry = (e) => {
    const countryCode = e.target.value
    const country = lodash.find(this.props.countries, {code: countryCode})
    this.props.fetchRateExchange(country)
    console.log('object', e.target.value)
}
    render() {
        return (
            <form className='form-group'>
               {this.renderSelectCountries()}
            </form>
        )
    }
}

const mapStateToProps = store => {
     return {
        countries: store.countryReducer.countries
    }
}

const mapDispatchToProps = {
    fetchCountries,
    fetchRateExchange
    }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
