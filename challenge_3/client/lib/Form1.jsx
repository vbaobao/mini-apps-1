function Form1(props) {
  let handleNext = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <h2>Create Account</h2>
      <form name="form1">
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
        <input type="submit" value="Next" onClick={handleNext} />
      </form>
    </div>
  );
}