fetch('https://yourbotapi.com/status')
  .then(response => response.json())
  .then(data => {
    document.getElementById('botStatus').innerText = data.status;
  });