class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNext = this.handleNext.bind(this);

    this.state = {
      currentForm: 1,
      forms: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/checkout', this.state.forms)
      .then((res) => {
        alert(`Thank you for ordering! Your order number is ${res.data}`);
        this.setState({currentForm: 1});
      })
      .catch(err => console.error(err));
  }

  handleNext(e) {
    e.preventDefault();
    let newState = {...this.state.forms};
    for (const state of e.target) {
      if (state.name !== '') {
        newState[state.name] = state.value;
      }
    }
    this.setState({forms: newState});
    this.setState({currentForm: this.state.currentForm + 1});
  }

  render() {
    let formToRender;
    if (this.state.currentForm === 1) {
      formToRender = <Form1 handleNext={this.handleNext} />;
    } else if (this.state.currentForm === 2) {
      formToRender = <Form2 handleNext={this.handleNext} />;
    } else if (this.state.currentForm === 3) {
      formToRender = <Form3 handleNext={this.handleNext} />;
    } else {
      formToRender = <Summary formdata={this.state.forms} handleSubmit={this.handleSubmit} />;
    }

    return (
      <div>
        <h1>Check Out</h1>
        {formToRender}
      </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('root'));