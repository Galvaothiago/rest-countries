import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components'

import { Header } from "./components/Header";
import styled from 'styled-components'
import { Filter } from "./components/FilterInput";
import { Select } from "./components/FilterSelect";
import { api } from "./services/api";
import Scrollbar from "react-scrollbars-custom";
import { Error } from "./components/ErrorRequest";

import { lightTheme, darkTheme } from '../src/styleTheme/theme'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ error, setError ] = useState(null)

  const [ isLightTheme, setIsLightTheme ] = useState(false)

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
    }
  }

  const getCountryByRegion = async (regionName) => {
    try {
      const countriesByRegion = await api.get(`/region/${regionName}`)

      const dataFormated = countriesByRegion.data.map(country => ({
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
        message: `Ops, we can't find this region, try again.`,
        message_error: error.message
      })
    }
  }

  useEffect(() => {
    getAllCountries()
  }, [])

  return (
    <>
    <ThemeProvider theme={ isLightTheme ? lightTheme : darkTheme }>
      <Header toggle={setIsLightTheme} onRequest={getAllCountries}/>
      <Dashboard>
        <SearchContainer>
          <Filter getCountry={getCountryByName} />
          <Select onRequest={getCountryByRegion}/>
        </SearchContainer>
        <GridContainer>
          <Scrollbar  style={ { width: '100%', height: '95%'} }>
            { error ? (
              <Error onError={error} />
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

    </ThemeProvider>
    </>
  );
}

const Dashboard = styled.main`
  max-width: 1440px;
  width: 100%;

  padding: 2.5rem 4rem;

  min-height: calc(100vh - 4rem);
  height: auto;
  background: ${({ theme }) => theme.background2};;

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
  padding: 1rem .5rem .5rem .5rem;
`

const CountryCard = styled.div`
  width: 15rem;
  min-height: 19rem;
  height: auto;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.background};
  border-radius: 5px;
  cursor: pointer;

  -webkit-box-shadow:${({ theme }) => theme.shadow && '0px 2px 7px 1px rgba(0,0,0,0.18)'};
  -moz-box-shadow:${({ theme }) => theme.shadow && '0px 2px 7px 1px rgba(0,0,0,0.18)'};
  box-shadow:${({ theme }) => theme.shadow && '0px 2px 7px 1px rgba(0,0,0,0.18)'};

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
      color: ${({ theme }) => theme.text};
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: .88rem;
      color: ${({ theme }) => theme.text};

      p {
        & + p {
          margin-top: .2rem;
        }
      }

    }
  }
`

export default App;
