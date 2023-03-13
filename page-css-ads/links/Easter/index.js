window.setTimeout(function(){
  document.body.classList.add('active')
},200);
function myFunction(mediaQuery){
  if(mediaQuery.matches){
    document.body.classList.add('vertical')
    document.body.classList.remove('horizontal')
    }
  else{
    document.body.classList.add('horizontal')
    document.body.classList.remove('vertical')

  }
}

const mediaQuery = window.matchMedia('(max-width:600px)');
myFunction(mediaQuery)
mediaQuery.addEventListener('change', myFunction)

