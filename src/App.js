import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import styled from 'styled-components'
import { Filter } from "./components/FilterInput";
import { Select } from "./components/FilterSelect";
import { api } from "./services/api";
import Scrollbar from "react-scrollbars-custom";

function App() {
  const [ countries, setCountries ] = useState([])

  const [ error, setError ] = useState(null)

  const getAllCountries = async () => {
    try {
      const countries = await api.get('/all')
      
      const dataFormated = countries.data.map(country => ({
        name: country.name,
        capital: country.capital,
        nativeName: country.nativeName,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        countriesBorders: country.borders,
        subRegion: country.subregion,
        currencies: country.currencies,
        languages: country.languages,
        flag: country.flag,
      }))

      setCountries(dataFormated)
      setError(null)
    } catch (error) {
      setError({
        message: `Ops, something went wrong!`,
        message_error: error.message
      })
    }
  }

  const getCountryByName = async (NameCountry) => {
    try {
      const country = await api.get(`/name/${String(NameCountry)}`)

      const dataFormated = country.data.map(country => ({
        name: country.name,
        capital: country.capital,
        nativeName: country.nativeName,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        countriesBorders: country.borders,
        subRegion: country.subregion,
        currencies: country.currencies,
        languages: country.languages,
        flag: country.flag,
      }))

      setCountries(dataFormated)
      setError(null)
    } catch (error) {
      setError({
        message: `Ops, we can't find the country with this name, try again.`,
        message_error: error.message
      })

      console.log(error)
    }
  }


  useEffect(() => {
    getAllCountries()
  }, [])

  return (
    <>
      <Header />
      <Dashboard>
        <SearchContainer>
          <Filter getCountry={getCountryByName} />
          <Select />
        </SearchContainer>
        <GridContainer>
          <Scrollbar  style={ { width: '100%', height: '95%'} }>
            { error ? (
              <GridError>
                <div>
                  <div>
                    <p>{error?.message}</p>
                    <img src="/sad.png" alt="Page not found" /> 
                  </div>
                  <span>{error?.message_error}</span>
                </div>
              </GridError>
            ) : (
              <Grid>
              { countries?.map((country, index) => (
              <CountryCard key={`${index}-${country.name}`}>
                <img src={country.flag} alt={country.name} />
                <div>
                  <h2>{country.name}</h2>
                  <span>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                  </span>
                </div>
              </CountryCard>
            )) }
            </Grid>
            ) }
          </Scrollbar>
        </GridContainer>
      </Dashboard>
    </>
  );
}

const Dashboard = styled.main`
  max-width: 1440px;
  width: 100%;

  padding: 2.5rem 4rem;

  min-height: calc(100vh - 4rem);
  height: auto;
  background: var(--VeryDarkBlueBackground);

`

const GridContainer = styled.div`
  display: flex;
  height: 70vh;
  overflow-y: hidden;

  padding-top: 2rem;

  > div {
    width: 100%;
    height: 100%;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  
  gap: 5rem;
  
  height: auto;
  padding-top: 1rem;
`

const GridError = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 2rem;

  display: grid;
  place-items: center;

  > div {
    max-width: 45rem;
    width: 100%;
    height: 19rem;
    padding: 2rem;

    display: flex;

    background: var(--DarkBlue);
    border-radius: 10px;

    div {
      flex: .7;
      height: 100%;

      display: flex;
      flex-direction: column;

      justify-content: space-evenly;
      align-items: center;

      p {
  
        text-align: center;
        color: var(--WhiteHover);
        font-weight: 500;
        font-size: 2rem;
        font-family: 'Rajdhani', sans-serif;
      }

      i {
        font-size: 3rem;
      }
    }

    span {
      flex: .3;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding-left: 1rem;

      border-left: 1px solid var(--WhiteHover);

      text-align: center;
      color: var(--White);
      font-family: 'Rajdhani', sans-serif;
      font-weight: 100;
      font-size: 1.5rem;

      /* background: green; */
    }
  }

`

const CountryCard = styled.div`
  width: 15rem;
  min-height: 19rem;
  height: auto;

  display: flex;
  flex-direction: column;

  background: var(--DarkBlue);
  border-radius: 5px;
  cursor: pointer;

  img {
    flex: .4;
    min-width: 15rem;
    max-height: 9rem;
    border-radius: 5px 5px 0 0;
  }

  div {
    flex: .6;
    width: 100%;

    padding: 1rem;

    h2 {
      font-size: 1rem;
      color: var(--White);
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: .88rem;
      color: var(--White);

      p {
        & + p {
          margin-top: .2rem;
        }
      }

    }
  }
`

export default App;
