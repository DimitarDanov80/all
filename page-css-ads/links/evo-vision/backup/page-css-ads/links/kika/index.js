function animationLoop() {
  document.body.classList.remove('step-1');
  document.body.classList.remove('step-2');
  document.body.classList.remove('step-3');
  document.body.classList.remove('step-4');

  window.setTimeout(function () {
    document.body.classList.add('step-1');
  }, 0);
  window.setTimeout(function () {
    document.body.classList.add('step-2');
  }, 2700);
  window.setTimeout(function () {
    document.body.classList.add('step-3');
  }, 5200);
  window.setTimeout(function () {
    document.body.classList.add('step-4');
  }, 8000);

  setTimeout(animationLoop, 11600);
}

animationLoop();

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

const mediaQuery = window.matchMedia('(max-width:500px)');
myFunction(mediaQuery)
mediaQuery.addEventListener('change', myFunction)

 

