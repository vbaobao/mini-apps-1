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

$('.download').on('click', e => {
  window.open('http://localhost:3000/download');
});