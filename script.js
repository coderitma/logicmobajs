document.getElementById("kirim").addEventListener('click', function (e) {

  let value1 = document.getElementById("inputNama").value
  let value2 = document.getElementById("inputPesan").value

  let url = `?value1=${value1}&value2=${value2}`;

  fetch(url, {
    method: 'GET',
    mode: 'no-cors',
  }).then(response => console.log("data ke kirim"))
})