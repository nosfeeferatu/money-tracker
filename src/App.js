import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [type, setType] = useState('expense');
  const [price, setPrice] = useState();
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <main>
      <section id='hero'>
        <h1>What's in our Wallets?</h1>
        <p className='tagline'>Track your spending and income.</p>
      </section>

      <section id='inputTransaction'>
        <h2>Balance:<span>₹500</span></h2>
        <form onSubmit={handleSubmit}>
          <div className='basics'>
            <input type='number' min={1} value={price} onChange={e => setPrice(e.target.value)} placeholder='Price'/>
            <select name='type' onChange={e => setType(e.target.value)}>
              <option value='expense'>Expense</option>
              <option value='income'>Income</option>
            </select>
          </div>
          <div className='basics'>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} placeholder='Dinner?' />
            <input value={date} onChange={e => setDate(e.target.value)} type='datetime-local'/>
          </div>
          <div className='description'>
            <textarea onChange={e => setDesc(e.target.value)} placeholder='Description'>{desc}</textarea>
          </div>
          <div>
            <button type='submit'>Add Transaction</button>
          </div>
        </form>
      </section>

      <section id='allTransactions'>
        <div className='transaction'>
          <div className='left'>
            <h3>Breakfast</h3>
            <p>That Masala Dosa was so good.</p>
          </div>
          <div className='right'>
            <h3 className='expense'>₹60</h3>
            <p>28-09-2023 8:14</p>
          </div>
        </div>

        <div className='transaction'>
          <div className='left'>
            <h3>Coffee</h3>
            <p>A break from work.</p>
          </div>
          <div className='right'>
            <h3 className='expense'>₹10</h3>
            <p>28-09-2023 10:57</p>
          </div>
        </div>

        <div className='transaction'>
          <div className='left'>
            <h3>Money Returned</h3>
            <p>What Alex owed me.</p>
          </div>
          <div className='right'>
            <h3 className='income'>₹500</h3>
            <p>28-09-2023 16:23</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
