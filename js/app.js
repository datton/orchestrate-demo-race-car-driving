// Full-Stack: site behaviour
(function () {
  var opts = document.getElementById('quiz-options');
  if (opts) {
    var result = document.getElementById('quiz-result');
    ['Formula 1', 'Karting', 'Endurance racing'].forEach(function (name) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = name;
      b.addEventListener('click', function () {
        result.textContent = name === 'Karting'
          ? 'Correct! Karting is where most drivers start.'
          : 'Not quite. Try again.';
      });
      opts.appendChild(b);
    });
  }

  var list = document.getElementById('corner-steps');
  if (list) {
    ['Brake in a straight line', 'Turn in towards the apex', 'Pass the apex', 'Squeeze the throttle on exit']
      .forEach(function (t) {
        var li = document.createElement('li');
        li.textContent = t;
        list.appendChild(li);
      });
    var btn = document.getElementById('steps-reveal');
    var ans = document.getElementById('steps-answer');
    btn.addEventListener('click', function () {
      ans.textContent = 'Brake, turn in, clip the apex, then accelerate out.';
    });
  }
})();
