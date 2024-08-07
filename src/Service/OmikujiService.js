<script>

 const results = [
    'daikichi.png',
    'kichi.png',
    'tyuukichi.png',
    'tyuukichi.png',
    'syoukichi.png',
    'syoukichi.png',
    'suekichi.png',
    'suekichi.png',
    'kyou.png'
  ];

  const elem = document.getElementById('draw');
  const element = document.getElementById('start');
  const rotateItem = document.getElementById('rotate');
  const target = document.getElementById('#draw');

  elem.addEventListener('click', function() {
    if (element != null) {
      tatefuri();
    }
  });

  function tatefuri() {
    element.animate(
      [{
        transform: 'translateY(0)'
      }, {
        transform: 'translateY(-30px)'
      }, {
        transform: 'translateY(0)'
      }], {
        duration: 700,
        iterations: 3
      });
    setTimeout(function() {
      kaiten();
    }, 2400);
  }

  function kaiten() {
    element.animate(
      [{
        transform: 'rotate(0deg)'
      }, {
        transform: 'rotate(180deg)'
      }], {
        duration: 700,
        easing: 'linear',
        fill: 'forwards'
      });
    setTimeout(function() {
      touka();
      btn();
    }, 1000);
  }

  function btn() {
    target.animate(
      [{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 500,
        fill: 'forwards'
      });
    setTimeout(function() {
      target.remove();
    }, 500);
  }

  function touka() {
    element.animate(
      [{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 500,
        fill: 'forwards'
      });
    setTimeout(function() {
      element.remove();
      fortuneAnime();
    }, 500);
  }

  function fortuneAnime() {
    const key = Math.floor(Math.random() * results.length);
    const fortune = document.getElementById("fortune");
    fortune.src = "img/" + results[key];
    fortune.animate(
      [{
        transform: 'translateY(0) scale(1)'
      }, {
        transform: 'translateY(-30px)'
      }, {
        transform: 'scale(1)'
      }, {
        transform: 'scale(1.1)'
      }, {
        transform: 'translateY(0) scale(1)'
      }], {
        duration: 1000,
        fill: 'forwards'
      });
  } 
  
</script>
