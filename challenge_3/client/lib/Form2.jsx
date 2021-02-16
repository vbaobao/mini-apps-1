function Form2(props) {
  return (
    <div class='form2'>
      <h2>Shipping Address</h2>
      <form>
        <label>
          Address Line 1:
          <input type='text' name='address_ln1' />
        </label>
        <label>
          Address Line 2:
          <input type='text' name='address_ln2' />
        </label>
        <label>
          City:
          <input type='text' name='city' />
        </label>
        <label>
          State:
          <input type='text' name='state' />
        </label>
        <label>
          Zip Code:
          <input type='text' name='zipcode' />
        </label>
        <label>
          Phone Number:
          <input type='text' name='phone' />
        </label>
        <input type='submit' value='submit' onClick={()=>{console.log('clicked')}} />
      </form>
    </div>
  );
}