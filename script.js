let elBtn = document.querySelector('button')

elBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = 'green'
  elBtn.style.borderColor = 'black'
  elBtn.style.color = 'black'
})

elBtn.addEventListener('dblclick', function(){
  document.body.style.backgroundColor = 'yellow'
})

