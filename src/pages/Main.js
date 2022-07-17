import React, { useState } from "react";
import Country from "../components/Country";
import Modal from "../components/Modal";
import countries from "../data/countries";
import { useApp, useAppUpdate } from "../context/AppContext";


export default function Main(props) {

    const appContext = useApp()
    const appContextUpdate = useAppUpdate()

    const {lightModeActive, id, isModalActive, isOverlayActive, filteredCountries, activeFilter, activeSearch} = appContext
    const {setId, setModalActive, setOverlayActive, setFilteredCountries, setActiveFilter, setActiveSearch, handleClickModalShow, handleClickModalHide, handleFilterChange, handleSearchChange, setLightModeActive} = appContextUpdate

    const countriesElements = filteredCountries.map(e => {
        return(
            <Country
                key={e.id}
                e={e}
            />
        )
    })

    const styles = {
        backgroundColor: lightModeActive ? "white" : "#a1a1a1ff",
        color: lightModeActive ? "#212224ff" : "white"
    }

    const stylesNavbar = {
        backgroundColor: lightModeActive ? "#f8f8f8" : "#212224ff"
    }

    // if(fetchedData) {

    return(
        <div className="main">
            <div 
                style={stylesNavbar}
                className="navbar">
                <input
                    style={styles} 
                    onChange={handleSearchChange}
                    value={activeSearch}
                    placeholder="Search for a country.." 
                    className="search" />
                <select
                    style={styles} 
                    onChange={handleFilterChange}
                    value={activeFilter} 
                    className="filter">                       
                    <option value="All">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>
                </select>
            </div>
            <div className="countries-elements" >
               {countriesElements} 
            </div>
            <div>
                <Modal 
                    country={countries[id]}
                    countriesAll={countries}
                />
            </div>
            <div
                onClick={() => {
                    setModalActive(false)
                    setOverlayActive(false)
                }}
                className={`${isOverlayActive ? "overlay" : "overlay hidden"}`}></div>
        </div>
    )
    // } else {
    //     return null
    // }
}