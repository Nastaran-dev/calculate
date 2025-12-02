const display = document.getElementById("start");
    const buttons = document.querySelectorAll(".number > div");
    const Reset = document.getElementById("reset");
    const del = document.getElementById("del");
    const audio = document.querySelector("audio");

    let currentInput = "";
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        audio.play();
        const span = this.querySelector("span");
        if (!span) return;

        const value = span.innerText.trim();

        if (value === "=") {
          if (currentInput) {
            try {
              let result = eval(currentInput);
              display.innerText = result;
              currentInput = String(result);
            } catch (e) {
              display.innerText = "Error";
              currentInput = "";
            }
          }
          return;
        }
        if (value === "√") {
          let num = currentInput === "" ? 0 : Number(currentInput);
          let result = Math.sqrt(num);
          display.innerText = result;
          currentInput = String(result);
          return;
        }
        if (value === "%") {
          if (currentInput === "") return;
          currentInput = String(Number(currentInput) / 100);
          display.innerText = currentInput;
          return;
        }
        if (value === "Del") {
          currentInput = currentInput.slice(0, -1);
          display.innerText = currentInput;
          return;
        }
        currentInput += value;
        display.innerText = currentInput;
      });
    });
    //
    Reset.addEventListener("click", () => {
      display.innerText = "";
      currentInput = "";
    });