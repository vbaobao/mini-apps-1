function Form2(props) {
  return (
    <div class='form2'>
      <h2>Shipping Address</h2>
      <form>
        <label>
          Address Line 1:
          <input type="text" name="address_ln1" />
        </label>
        <label>
          Address Line 2:
          <input type="text" name="address_ln2" />
        </label>
        <label>
          City:
          <input type="text" name="city" />
        </label>
        <label>
          State:
          <input type="text" name="state" maxLength="2" />
        </label>
        <label>
          Zip Code:
          <input type="text" name="zipcode" maxLength="5" />
        </label>
        <label>
          Phone Number:
          <input type="number" name="phone_prefix" />
        </label>
        <input type="submit" value="submit" onClick={()=>{console.log('clicked')}} />
      </form>
    </div>
  );
}