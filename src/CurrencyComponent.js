import './App.css';

function CurrencyField(props) {
  return (
    <div className="blockInput">
      <input
        className="input"
        type="text"
        value={props.quantity}
        placeholder="input quantity"
        onChange={event => props.onQuantityChange(event.target.value)}
      ></input>
      <select
        value={props.currency}
        onChange={event => props.onCurrencyChange(event.target.value)}
      >
        {props.currenciesArray.map(curr => (
          <option value={curr} key={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyField;
