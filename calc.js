let display = document.getElementById("display");

    function appendNumber(num) {
      display.value += num;
    }

    function clearDisplay() {
      display.value = "";
    }

    function calculateResult() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }