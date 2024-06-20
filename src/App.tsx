import './App.css'
import { NumberKey } from './components/NumberKey'

function App() {
  return (
    <div className="font-sans font-bold bg-vdk-desat-blu-main p-10">
      <div className="top-row flex justify-between items-center">
        <h1>calc</h1>
        <div className="theme-container flex basis-2/5 justify-between items-end">
          <div>THEME</div>
          <div className="toggle-container flex">
            <div className="toggle-position flex flex-col pr-1 items-center">
              <label htmlFor="1">1</label>
              <input type="radio" name="theme" id="1" />
            </div>
            <div className="toggle-position flex flex-col px-1 items-center">
              <label htmlFor="2">2</label>
              <input type="radio" name="theme" id="2" />
            </div>
            <div className="toggle-position flex flex-col pl-1 items-center">
              <label htmlFor="2">3</label>
              <input type="radio" name="theme" id="3" />
            </div>
          </div>
        </div>
      </div>
      <div className="calculator-container">
        <div className="screen bg-vdk-desat-blu-screen text-right text-numbers rounded-lg my-6 py-4 pr-6">Test</div>
        <div className="numpad-container bg-vdk-desat-blu-inset p-6 rounded-lg">
          <div className="numpad-row flex mb-3">
            <NumberKey value="7" />
            <NumberKey value="8" />
            <NumberKey value="9" />
            <NumberKey value="DEL" />
          </div>
          <div className="numpad-row flex mb-3">
            <NumberKey value="4" />
            <NumberKey value="5" />
            <NumberKey value="6" />
            <NumberKey value="+" />
          </div>
          <div className="numpad-row flex mb-3">
            <NumberKey value="1" />
            <NumberKey value="2" />
            <NumberKey value="3" />
            <NumberKey value="-" />
          </div>
          <div className="numpad-row flex mb-3">
            <NumberKey value="." />
            <NumberKey value="0" />
            <NumberKey value="/" />
            <NumberKey value="x" />
          </div>
          <div className="numpad-row flex">
            <NumberKey value="RESET" />
            <NumberKey value="=" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
