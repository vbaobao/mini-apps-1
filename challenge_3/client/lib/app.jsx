class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { formNum: 0 }
  }

  render() { return (
    <div>
      <h1>Check Out</h1>
      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('root'));