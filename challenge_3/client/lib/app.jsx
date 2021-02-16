class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);

    this.state = {
      currentForm: 1,
      forms: {
        form1: {},
        form2: {},
        form3: {}
      }
    }
  }

  handleSubmit() {}

  handleNext(e) {
    e.preventDefault();
    let newState = {};
    for (const state of e.target) {
      if (state.name !== '') {
        newState[state.name] = state.value;
      }
    }
    this.setState(newState);

    if (this.state.currentForm === 3) {
      this.setState({currentForm: 1});
    } else {
      this.setState({currentForm: this.state.currentForm + 1});
    }
  }

  render() {
    let formToRender;
    if (this.state.currentForm === 1) {
      formToRender = <Form1 handleNext={this.handleNext} />;
    } else if (this.state.currentForm === 2) {
      formToRender = <Form2 handleNext={this.handleNext} />;
    } else if (this.state.currentForm === 3) {
      formToRender = <Form3 handleNext={this.handleSubmit} />;
    }

    return (
      <div>
        <h1>Check Out</h1>
        {formToRender}
      </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('root'));