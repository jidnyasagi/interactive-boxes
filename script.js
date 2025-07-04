const plans = document.querySelectorAll(".plan");

plans.forEach((plan) => {
  const input = plan.querySelector("input[type='radio']");
  input.addEventListener("change", () => {
    plans.forEach((p) => p.classList.remove("expanded"));
    if (input.checked) {
      plan.classList.add("expanded");
    }
  });
});
