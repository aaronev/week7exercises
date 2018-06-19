document.getElementById('pracH1').textContent= "What is it!"

function redBody(){
  var val = document.getElementById('pracInp').value
  document.getElementById('pracH12').textContent = val
  console.log(val)
}

var ar = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < ar.length; i++) {
  console.log(ar[i])
}

var obj = {
  "prop1": "h1",
  "prop3": "h3",
  "prop10": "ok"
}

for (var prop in obj) {
  console.log(obj[prop])
}