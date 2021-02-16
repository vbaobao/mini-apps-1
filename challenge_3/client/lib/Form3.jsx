function Form3(props) {
  return (
    <div class='form3'>
      <h2>Payment Information</h2>
      <form>
        <label>
          Credit Card Number:
          <input type='number' name='cc_1' maxlength='4' />
          <input type='number' name='cc_2' maxlength='4' />
          <input type='number' name='cc_3' maxlength='4' />
          <input type='number' name='cc_4' maxlength='4' />
        </label>
        <label>
          Expiry Date:
          <input type='number' name='cc_ex_mo' maxlength='2' />
          <input type='number' name='cc_ex_yr' maxlength='2' />
        </label>
        <label>
          CVV:
          <input type='number' name='cc_cvv' maxlength='3' />
        </label>
        <label>
          Billing Zipcode:
          <input type='number' name='cc_zipcode' />
        </label>
        <input type='submit' value='submit' onClick={()=>{console.log('clicked')}} />
      </form>
    </div>
  );
}