class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      cc_number: '',
      cc_ex_mo: '',
      cc_ex_yr: '',
      cc_cvv: '',
      cc_zipcode: ''
    }
  }

  handleChange(e) {
    e.preventDefault();
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div class='form3'>
        <h2>Payment Information</h2>
        <form onSubmit={this.props.handleNext}>
          <label>
            Credit Card Number:
            <input type="number" name="cc_number" value={this.state.cc_number} onChange={this.handleChange} />
          </label>
          <label>
            Expiry Date:
            <input type="number" name="cc_ex_mo" value={this.state.cc_ex_mo} onChange={this.handleChange} />
            <input type="number" name="cc_ex_yr" value={this.state.cc_ex_yr} onChange={this.handleChange} />
          </label>
          <label>
            CVV:
            <input type="number" name="cc_cvv" value={this.state.cc_cvv} onChange={this.handleChange} />
          </label>
          <label>
            Billing Zipcode:
            <input type="number" name="cc_zipcode" value={this.state.cc_zipcode} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Next" />
        </form>
      </div>
    );
  }
}