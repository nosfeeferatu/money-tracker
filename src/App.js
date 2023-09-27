import './App.css';

function App() {
  return (
    <main>
      <section id='hero'>
        <h1>What's in our Wallets Now?</h1>
        <p className='tagline'>Track your spending and income</p>
      </section>

      <section id='inputTransaction'>
        <h2>₹500</h2>
        <form>
          <div className='basics'>
            <input type='text' placeholder='Dinner?' />
            <input type='datetime-local'/>
          </div>
          <div className='description'>
            <textarea placeholder='Description'></textarea>
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
            <h3>₹60</h3>
            <p>28-09-2023 8:14</p>
          </div>
        </div>

        <div className='transaction'>
          <div className='left'>
            <h3>Coffee</h3>
            <p>A break from work.</p>
          </div>
          <div className='right'>
            <h3>₹10</h3>
            <p>28-09-2023 10:57</p>
          </div>
        </div>

        <div className='transaction'>
          <div className='left'>
            <h3>Money Returned</h3>
            <p>What Alex owed me.</p>
          </div>
          <div className='right'>
            <h3>₹500</h3>
            <p>28-09-2023 16:23</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
