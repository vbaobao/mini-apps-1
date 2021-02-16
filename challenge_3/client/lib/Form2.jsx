class Form2 extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      address_ln1: '',
      address_ln2:'',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    };
  }

  handleChange(e) {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div class='form2'>
        <h2>Shipping Address</h2>
        <form onSubmit={this.props.handleNext}>
          <label>
            Address Line 1:
            <input type="text" name="address_ln1" value={this.state.address_ln1} onChange={this.handleChange} />
          </label>
          <label>
            Address Line 2:
            <input type="text" name="address_ln2" value={this.state.address_ln2} onChange={this.handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" maxLength="2" value={this.state.state} onChange={this.handleChange} />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zipcode" maxLength="5" value={this.state.zipcode} onChange={this.handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="number" name="phone" phone={this.state.phone} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}