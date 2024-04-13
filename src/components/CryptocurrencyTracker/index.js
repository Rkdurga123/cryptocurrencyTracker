// Write your code here
import {Component} from 'react'

import {Loader} from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isLoding: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachITem => ({
      id: eachITem.id,
      currencyName: eachITem.currency_name,
      usdValue: eachITem.usd_value,
      euroValue: eachITem.euro_value,
      currencyLogo: eachITem.currency_logo,
    }))

    this.setState({cryptoData: updatedData, isLoding: false})
  }

  render() {
    const {isLoding, cryptoData} = this.state
    return (
      <div className="crypto-tracker" data-testid="loader">
        {isLoding ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <CryptocurrenciesList cryptocurrenctData={cryptoData} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
