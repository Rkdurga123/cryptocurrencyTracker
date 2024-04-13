// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li className="link-items">
      <div className="currency-items">
        <img src={currencyLogo} className="logo" alt="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-euro">
        <p className="usd">{usdValue}</p>
        <p className="usd">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
