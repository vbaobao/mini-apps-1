function Form1(props) {
  return (
    <div class='form1'>
      <h2>Create Account</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="text" name="password" required />
        </label>
        <input type="submit" value="Next" onClick={()=>{console.log('clicked')}} />
      </form>
    </div>
  );
}