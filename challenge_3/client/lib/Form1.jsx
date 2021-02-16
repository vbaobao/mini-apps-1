function Form1(props) {
  return (
    <div class='form1'>
      <form>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <label>
          Email:
          <input type='text' name='email' />
        </label>
        <label>
          Password:
          <input type='text' name='password' />
        </label>
        <input type='submit' value='submit' onClick={()=>{console.log('clicked')}} />
      </form>
    </div>
  );
}