class Form1 extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h2>Create Account</h2>
        <form name="form1" onSubmit={this.props.handleNext} >
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} required />
          </label>
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}