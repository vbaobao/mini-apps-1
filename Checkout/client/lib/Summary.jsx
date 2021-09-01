function Summary(props) {
  return (
    <div>
      <section>
        <h2>Order Summary</h2>
        <p>Please review your information!</p>
        <p><span>Name:</span> {props.formdata.name}</p>
        <p><span>Email:</span> {props.formdata.email}</p>
        <p><span>Phone Number:</span> {props.formdata.phone}</p>
        <p>
          <span>Address:</span>
          <ul>
            <li>{props.formdata.address_ln1}</li>
            <li>{props.formdata.address_ln2}</li>
            <li>{props.formdata.city}, {props.formdata.state}</li>
            <li>{props.formdata.zipcode}</li>
          </ul>
        </p>
        <p><span>Last 4 Digits of Credit Card:</span> {props.formdata.cc_number.slice(-4)}</p>
        <p><span>Expiry:</span> {props.formdata.cc_ex_mo}/{props.formdata.cc_ex_yr}</p>
        <p><span>Billing Zipcode:</span> {props.formdata.cc_zipcode}</p>
      </section>
      <button onClick={props.handleSubmit}>Purchase</button>
    </div>
  );
}