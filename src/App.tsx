import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Crochet Counter</h1>
      </header>
      <main className="app-main">
        <div className="counters-container">
          <Counter title="Rows" />
          <Counter title="Stitches" />
        </div>
      </main>
      <footer className="app-footer">
        <p>Happy Crocheting!</p>
      </footer>
    </div>
  )
}

export default App
