const openButton =
    document.getElementById("openButton");

const birthdaySong =
    document.getElementById("birthdaySong");

const welcomePage =
    document.querySelector(".welcome-page");

const revealPage =
    document.getElementById("revealPage");

const surprisePage =
    document.getElementById("surprisePage");

const continueButton =
    document.getElementById("continueButton");

const wishPage =
    document.getElementById("wishPage");

const wishContinueButton =
    document.getElementById("wishContinueButton");

const finalPage =
    document.getElementById("finalPage");


/* =========================
   OPEN SURPRISE
========================= */

openButton.addEventListener("click", () => {

    openButton.disabled = true;

    /* HIDE THE FIRST PAGE */
    welcomePage.classList.add("hide");

    /* SHOW SURPRISE */
    revealPage.classList.add("show");

    birthdaySong.currentTime = 0;

    birthdaySong.play()
        .then(() => {

            console.log("Your singing is playing!");

        })
        .catch((error) => {

            console.error(
                "Music error:",
                error
            );

        });

});


/* =========================
   SINGING FINISHED
========================= */

birthdaySong.addEventListener("ended", () => {

    revealPage.classList.remove("show");


    setTimeout(() => {

        surprisePage.classList.add("show");

    }, 800);

});


/* =========================
   BIRTHDAY → MY WISH
========================= */

continueButton.addEventListener("click", () => {

    surprisePage.classList.remove("show");


    setTimeout(() => {

        wishPage.classList.add("show");

    }, 500);

});


/* =========================
   MY WISH → FINAL
========================= */

wishContinueButton.addEventListener("click", () => {

    wishPage.classList.remove("show");


    setTimeout(() => {

        finalPage.classList.add("show");

    }, 500);

});