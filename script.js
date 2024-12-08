let visitCount = localStorage.getItem("visitCount");

if (visitCount === null) {
  visitCount = 1;
} else {
  visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem("visitCount", visitCount);

const timerElement = document.getElementById("timer");
timerElement.textContent = `This page has been visited ${visitCount} times.`;
