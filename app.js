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

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function calculate() {
  const input = document.getElementById("startDate").value;
  if (!input) return;

  const start = parseLocalDate(input);

  // 48 hours = 2 business days, 72 hours = 3. Weekends are not counted.
  const followUp = addBusinessDays(start, 2);
  const escalate = addBusinessDays(start, 3);

  document.getElementById("output").value =
`Follow-up (within 48 hours): ${formatDate(followUp)}
Escalate (at 72 hours): ${formatDate(escalate)}`;
}

function reset() {
  document.getElementById("startDate").value = "";
  document.getElementById("output").value = "";
}

document.getElementById("calculateBtn").addEventListener("click", calculate);
document.getElementById("resetBtn").addEventListener("click", reset);