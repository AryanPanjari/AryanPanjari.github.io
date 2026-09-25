document.getElementById('navToggle').addEventListener('click', function(){
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('.navlinks a').forEach(function(a){
    a.addEventListener('click', function(){ document.getElementById('navLinks').classList.remove('open'); });
  });
