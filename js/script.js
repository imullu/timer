let intervalo;
const timerDisplay = document.getElementById("timer");
const alarme = document.getElementById("alarme")

function iniciarTimer(segundos)  {
    clearInterval(intervalo);
    let tempo = segundos;
    timerDisplay.textContent = tempo;

    intervalo = setInterval(() => {
        tempo--;
        timerDisplay.textContent = tempo;

        if (tempo <= 0 ) {
            clearInterval(intervalo);
            timerDisplay.textContent = "SEU OVO ESTA PRONTO!";
            alarme.play();
        }
    }, 1000);
}