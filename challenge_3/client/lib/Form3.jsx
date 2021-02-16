function Form3(props) {
  return (
    <div class='form3'>
      <h2>Payment Information</h2>
      <form>
        <label>
          Credit Card Number:
          <input type="number" name="cc_number" />
        </label>
        <label>
          Expiry Date:
          <input type="number" name="cc_ex_mo" />
          <input type="number" name="cc_ex_yr" />
        </label>
        <label>
          CVV:
          <input type="number" name="cc_cvv" />
        </label>
        <label>
          Billing Zipcode:
          <input type="number" name="cc_zipcode" />
        </label>
        <input type="submit" value="Purchase" onClick={()=>{console.log('clicked')}} />
      </form>
    </div>
  );
}