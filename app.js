function addBusinessDays(date, days) {
  let result = new Date(date);
  let added = 0;

  while (added < days) {
    result.setDate(result.getDate() + 1);
    const day = result.getDay();
    if (day !== 0 && day !== 6) added++;
  }

  return result;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function calculate() {
  const input = document.getElementById("startDate").value;
  if (!input) return;

  const start = new Date(input);

  const f1 = addBusinessDays(start, 4);
  const f2 = addBusinessDays(start, 7);
  const f3 = addBusinessDays(start, 10);
  const esc = addBusinessDays(start, 11);

  document.getElementById("output").value =
`Follow-up #1 (BD 4): ${formatDate(f1)}
Follow-up #2 (BD 7): ${formatDate(f2)}
Follow-up #3 (BD 10): ${formatDate(f3)}
Escalate (BD 11): ${formatDate(esc)}`;
}

function reset() {
  document.getElementById("startDate").value = "";
  document.getElementById("output").value = "";
}

document.getElementById("calculateBtn").addEventListener("click", calculate);
document.getElementById("resetBtn").addEventListener("click", reset);