$('form').on('submit', e => {
  e.preventDefault();
  var formData = new FormData(document.querySelector('form'));
  console.log('FormData: ', formData);
  $.ajax({
    url:'http://localhost:3000',
    type: 'POST',
    data: formData,
    contentType: false,
    processData: false,
    success: (data) => {
      $('.csv').append(data);
    },
    error: () => { console.log('Failed form request'); }
  });
});

$('button').on('click', e => {
  console.log('click');
  // $.get('http://localhost:3000', data => {
  //   console.log(data);
  // });
});