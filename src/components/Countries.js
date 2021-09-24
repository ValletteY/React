import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(
        "https://restcountries.com/v3/all?fields=name;population;region;capital;flag"
        )
        .then((res) => {
            setData(res.data);
        });
            
        }, []);
            

    return (
        <div className="countries">
            <ul className="countries-list">
                {data.map((country) => (
                    <li>{country.name.common}</li>
                ))}

            </ul>
        </div>
    );
};

export default Countries;