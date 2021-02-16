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
    //setState to form data
  }

  render() {
    let formToRender;
    if (this.state.currentForm === 1) {
      formToRender = <Form1 />;
    } else if (this.state.currentForm === 2) {
      formToRender = <Form2 />;
    } else if (this.state.currentForm === 3) {
      formToRender = <Form3 />;
    }

    return (
      <div>
        <h1>Check Out</h1>
        {formToRender}
      </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('root'));