import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { Error } from '../ErrorRequest'
import { Link } from 'react-router-dom'
import { ContainerCountryInfo } from './styles'

export function CountryInfo() {
    const [ country, setCountry] = useState([])
    const [ error, setError ] = useState({})

    const { countryName } = useParams()

    const getCountryByName = async (nameCountry) => {
        try {
            const country = await api.get(`/name/${String(nameCountry)}`)
        
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
                topLevelDomain: country.topLevelDomain
            }))
    
            setCountry(dataFormated)
            setError(null)
        } catch (error) {
          setError({
            message: `Ops, we can't find the country with this name, try again.`,
            message_error: error.message
          })
        }
    }

    const getCountryByCode = async (codeCountry) => {
        try {
            const country = await api.get(`/alpha/${String(codeCountry)}`)

            const dataFormated = [country.data].map(country => ({
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
                topLevelDomain: country.topLevelDomain
            }))

            setCountry(dataFormated)
            setError(null)
            
        } catch (error) {
            setError({
                message: `Ops, we can't find the country with this name, try again.`,
                message_error: error.message
              }) 
        }
    }

    useEffect(() => {
        if(countryName.length !== 3) {
            getCountryByName(countryName)
        }

    }, [])

    return !error ? (
        <ContainerCountryInfo>
            <img src={country[0].flag} alt={country[0].name} />
            <div>
                <h2>{country[0].name}</h2>
                <section>
                    <div>
                        <p><label>Native Name: </label>{country[0].nativeName}</p>
                        <p><label>Population: </label>{country[0].population}</p>
                        <p><label>Region: </label>{country[0].region}</p>
                        <p><label>Sub-region: </label>{country[0].subRegion}</p>
                        <p><label>Capital: </label>{country[0].capital}</p>
                    </div>
                    <div>
                        <p><label>Top Level Domain: </label>{country[0].topLevelDomain}</p>
                        <p><label>Currencies: </label>{country[0].currencies[0].name}</p>
                        <p><label>Languages: </label>{ country[0].languages.length > 1 ? (
                            country[0].languages.map(language => {
                                return  `${language.name}, `
                            }) 
                        ) : (
                            country[0].languages[0].name
                        ) }</p>
                    </div>
                </section>
                <footer>
                    <span>Border Countries: </span>
                    <div>
                        { country[0].countriesBorders.map(countryBorder => <div onClick={ () => getCountryByCode(countryBorder) }>{countryBorder}</div>) }
                    </div>
                </footer>
            </div>
        </ContainerCountryInfo>
    ) : (
        <Error onError={error}/>
    )
}