class Board extends React.Component {
  // Use the render function to return JSX component
  render() {
    return (
      <div className="shopping-list">
        <h1>Board {this.props.name}</h1>
      </div>
    );
  }
}

// Obtain the root
const rootElement = document.getElementById("root");
// Create a function to wrap up your component
function App() {
  return (
    <div>
      <Board name="dotsboxes" />
    </div>
  );
}

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(<App />, rootElement);
