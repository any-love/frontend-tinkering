import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExampleApp />
      </header>
    </div>
  );
}

const Checkbox = props => (
  <input type="checkbox" {...props} />
)

class ExampleApp extends React.Component {
  state = { checked: false }
  handleCheckboxChange = event =>
  this.setState({ checked: event.target.checked })
  render() {
    return (
      <div className="wholeSection">
        <div>
          <h2>Select Which Apply To You</h2>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Man</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Woman</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Non-Binary</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Transgender</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Agender</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Two-Spirit</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Gender-Non-Conforming</span>
          </label>
        </div>
        <div>
          <h2>Select Which Apply To You</h2>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Straight</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Gay</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Lesbian</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Bisexual</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Pansexual</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Sapphic</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Asexual</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Aromantic</span>
          </label>
        </div>
        <div>
          <h2>Select Which You're Looking for</h2>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Man</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Woman</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Non-Binary</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Transgender</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Agender</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Two-Spirit</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Gender-Non-Conforming</span>
          </label>
        </div>
        <div>
          <h2>Select Which You Don't Want To Interact With</h2>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Man</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Woman</span>
          </label>
          <label className="option">
            <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            />
            <span>Straight</span>
          </label>
        </div>
      </div>
    )
  }
}

export default App;
