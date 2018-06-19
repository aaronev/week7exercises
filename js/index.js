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

document.getElementById('pracH2').textContent=obj.prop1
document.getElementById('pracH3').textContent=obj.prop3
document.getElementById('pracH5').textContent=obj.prop10

var ar2 = [
  {
    "name": "asdf"
    "age": 12,
    "dude": "dude"
  },
  {
    "name": "yup"
    "age": 145,
    "dude": "dude"
  },
    {
    "name": "John"
    "age": 32,
    "dude": "na"
  }
]

for (var i = 0; i < ar2.length; i++) {
  console.log(ar2[i].name, ar2[i].age, ar2[i].dude)
}