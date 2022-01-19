import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} =props.country;
    const flagStyle = {height:'50px'};
    const countryStyle ={border:'1px solid red',margin:'10px',padding:'10px'};
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h2>Name : {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population : {population}</p>
            <h4>Region : {region}</h4>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;