function addBusinessDays(date, days) {
  let result = new Date(date);
  let added = 0;

  while (added < days) {
    result.setDate(result.getDate() + 1);
    const day = result.getDay();

    // 0 = Sunday, 6 = Saturday
    if (day !== 0 && day !== 6) {
      added++;
    }
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

function calculateSchedule() {
  const input = document.getElementById("startDate").value;
  if (!input) return;

  const start = new Date(input);

  const schedule = {
    followUp1: addBusinessDays(start, 4),
    followUp2: addBusinessDays(start, 7),
    followUp3: addBusinessDays(start, 10),
    escalate: addBusinessDays(start, 11)
  };

  document.getElementById("output").innerHTML = `
    <div class="row"><b>Follow-up #1 (BD 4):</b> ${formatDate(schedule.followUp1)}</div>
    <div class="row"><b>Follow-up #2 (BD 7):</b> ${formatDate(schedule.followUp2)}</div>
    <div class="row"><b>Follow-up #3 (BD 10):</b> ${formatDate(schedule.followUp3)}</div>
    <div class="row"><b>Escalate (BD 11):</b> ${formatDate(schedule.escalate)}</div>
  `;
}

document.getElementById("calculateBtn")
  .addEventListener("click", calculateSchedule);