import { useState, useEffect } from 'react';
import CurrencyField from './CurrencyComponent.js';
import DateToday from './DateToday.js';

export default function App() {
  const [quantity1, setQuantity1] = useState();
  const [quantity2, setQuantity2] = useState();
  const [currency1, setCurrency1] = useState('');
  const [currency2, setCurrency2] = useState('');
  const [nameMoney, setNameMoney] = useState([]);

  useEffect(() => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(res => res.json())
      .then(res => res.map(item => setNameMoney(prev => [...prev, item.ccy])));
  }, []);

  const HandleQuantity1Change = quantity1 => {
    setQuantity2(quantity1 * quantity1);
    setQuantity1(quantity1);
  };

  const HandleQuantity2Change = quantity2 => {
    setQuantity1(quantity2 * quantity2);
    setQuantity2(quantity2);
  };

  return (
    <div>
      <p>Today: {DateToday()}</p>
      <h3>Converter</h3>
      <CurrencyField
        onQuantityChange={HandleQuantity1Change}
        onCurrencyChange={setCurrency1}
        currenciesArray={nameMoney}
        quantity={quantity1}
        currency={currency1}
      />
      <CurrencyField
        onQuantityChange={HandleQuantity2Change}
        onCurrencyChange={setCurrency2}
        currenciesArray={nameMoney}
        quantity={quantity2}
        currency={currency2}
      />
    </div>
  );
}
