/**
 * Check-list interactive (QCM de relecture du mémoire).
 *
 * Chaque case porte data-ref (lien vers la section du guide) et data-section
 * (libellé de la section). La case marquée data-final="true" (« Signer la
 * politique IA ») sert de contrôle de lecture : si elle n'est pas cochée, on
 * ne donne aucune référence, on signale simplement que le guide n'a pas été lu
 * en entier.
 */

function checkChecklist(listId) {
  const container = document.getElementById(`quiz-${listId}`);
  if (!container) return;

  const items = Array.from(container.querySelectorAll('.quiz-question'));
  const resultDiv = document.getElementById(`result-${listId}`);
  const explDiv = document.getElementById(`explanations-${listId}`);

  items.forEach(item => item.classList.remove('correct', 'incorrect'));
  explDiv.innerHTML = '';
  explDiv.style.display = 'none';

  const finalItem = items.find(item => item.dataset.final === 'true');
  const finalBox = finalItem && finalItem.querySelector('input[type="checkbox"]');

  if (finalBox && !finalBox.checked) {
    finalItem.classList.add('incorrect');
    resultDiv.innerHTML = `
      <div class="result-box result-poor">
        <span class="result-emoji">📖</span>
        <span class="result-score">Vous n'avez pas lu le guide en entier.</span>
        <span class="result-message">Reprenez la lecture depuis le début, jusqu'à la toute dernière ligne, puis revenez compléter cette check-list.</span>
      </div>
    `;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  const missing = [];
  items.forEach((item, index) => {
    const box = item.querySelector('input[type="checkbox"]');
    const ok = box && box.checked;
    item.classList.add(ok ? 'correct' : 'incorrect');
    if (!ok) {
      missing.push({
        num: index + 1,
        text: item.querySelector('.quiz-option span').innerHTML,
        ref: item.dataset.ref,
        section: item.dataset.section
      });
    }
  });

  const total = items.length;
  const done = total - missing.length;

  if (missing.length === 0) {
    resultDiv.innerHTML = `
      <div class="result-box result-excellent">
        <span class="result-emoji">🎉</span>
        <span class="result-score">Check-list complète : ${done}/${total}</span>
        <span class="result-message">Votre mémoire respecte l'ensemble des points du guide. Bonne soutenance !</span>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="result-box result-average">
        <span class="result-emoji">📝</span>
        <span class="result-score">Check-list : ${done}/${total}</span>
        <span class="result-message">Il reste ${missing.length} point(s) à revoir avant de soumettre votre mémoire.</span>
      </div>
    `;
    let html = '<h4>Points à revoir</h4>';
    missing.forEach(m => {
      html += `
        <div class="explanation-item expl-incorrect">
          <strong>✗ Point ${m.num} :</strong> ${m.text}<br />
          👉 Relire : <a href="${m.ref}">${m.section}</a>
        </div>
      `;
    });
    explDiv.innerHTML = html;
    explDiv.style.display = 'block';
  }

  resultDiv.style.display = 'block';
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetChecklist(listId) {
  const form = document.getElementById(`quiz-form-${listId}`);
  if (form) form.reset();

  document.querySelectorAll(`#quiz-${listId} .quiz-question`).forEach(item => {
    item.classList.remove('correct', 'incorrect');
  });

  ['result', 'explanations'].forEach(prefix => {
    const div = document.getElementById(`${prefix}-${listId}`);
    if (div) {
      div.style.display = 'none';
      div.innerHTML = '';
    }
  });

  const container = document.getElementById(`quiz-${listId}`);
  if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
