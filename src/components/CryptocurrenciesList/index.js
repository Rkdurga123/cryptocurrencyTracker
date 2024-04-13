// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  rendercrypocurrencyTable = () => {
    const {cryptocurrenctData} = this.props
    return (
      <div className="crypto-table">
        <div className="crypto-header">
          <div className="coin-type">
            <p className="heading">Coin Type</p>
          </div>
          <div className="usd-euro">
            <p className="heading">USD</p>
            <p className="heading">EURO</p>
          </div>
        </div>
        <ul className="list">
          {cryptocurrenctData.map(eachCrypto => (
            <CryptocurrencyItem
              currencyDetails={eachCrypto}
              key={eachCrypto.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="crypto-container">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {this.rendercrypocurrencyTable()}
      </div>
    )
  }
}
export default CryptocurrenciesList
