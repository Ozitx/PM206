// Validar respuesta
function answer(btn, isCorrect, currentScreen, nextScreen) {

  var opts = document.getElementById('opts-' + currentScreen);
  var allBtns = opts.querySelectorAll('.option-btn');

  allBtns.forEach(function(b) {
    b.disabled = true;
    b.classList.add('dimmed');
  });

  // cambiar de color los botones
  btn.classList.remove('dimmed');
  if (isCorrect) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('incorrect');
  }

  // mostrar el btn
  var actionDiv = document.getElementById('action-' + currentScreen);
  actionDiv.innerHTML = '';

  var actionBtn = document.createElement('button');
  actionBtn.className = 'btn';

  if (isCorrect) {
    actionBtn.textContent = 'Continuar';
    actionBtn.onclick = function() {
      window.location.href = nextScreen + '.html';
    };
  } else {
    actionBtn.textContent = 'Reintentar';
    actionBtn.style.background = '#8B0000';
    actionBtn.onclick = function() {
      resetQuestion(currentScreen);
    };
  }

  actionDiv.appendChild(actionBtn);
}

// reiniciar
function resetQuestion(screenId) {

  // restaura los btn
  var opts = document.getElementById('opts-' + screenId);
  opts.querySelectorAll('.option-btn').forEach(function(b) {
    b.disabled = false;
    b.classList.remove('correct', 'incorrect', 'dimmed');
  });

  document.getElementById('action-' + screenId).innerHTML = '';
}


// checkbox
function toggleFinalize() {
  var checked = document.getElementById('agree-check').checked;
  document.getElementById('finalize-btn').disabled = !checked;
}


function restartGame() {
  window.location.href = 'index.html';
}