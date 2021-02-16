class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formNum: 1,
      forms: {
        form1: {},
        form2: {},
        form3: {}
      }
    }
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