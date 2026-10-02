const openButton =
    document.getElementById("openButton");

const birthdaySong =
    document.getElementById("birthdaySong");

const welcomePage =
    document.querySelector(".welcome-page");

const giftPage =
    document.getElementById("giftPage");

const giftBox =
    document.getElementById("giftBox");

const giftText =
    document.getElementById("giftText");

const revealPage =
    document.getElementById("revealPage");

const surprisePage =
    document.getElementById("surprisePage");

const continueButton =
    document.getElementById("continueButton");

const finalPage =
    document.getElementById("finalPage");

const letterEnvelope =
    document.getElementById("letterEnvelope");

const envelopeHint =
    document.getElementById("envelopeHint");


/* ==============================
   OPEN SURPRISE
============================== */

openButton.addEventListener(
    "click",
    () => {

        openButton.disabled = true;

        welcomePage.classList.add("hide");

        giftPage.classList.add("show");


        setTimeout(
            () => {

                giftBox.classList.add("shake");

            },
            700
        );


        setTimeout(
            () => {

                giftBox.classList.remove("shake");

                giftBox.classList.add("open");

                giftText.classList.add("hide");

            },
            1600
        );


        setTimeout(
            () => {

                giftPage.classList.remove("show");

                revealPage.classList.add("show");


                birthdaySong.currentTime = 0;

                birthdaySong
                    .play()
                    .then(
                        () => {

                            console.log(
                                "Singing is playing!"
                            );

                        }
                    )
                    .catch(
                        (error) => {

                            console.error(
                                "Music error:",
                                error
                            );

                        }
                    );

            },
            2500
        );

    }
);


/* ==============================
   WHEN SINGING ENDS
============================== */

birthdaySong.addEventListener(
    "ended",
    () => {

        revealPage.classList.remove("show");


        setTimeout(
            () => {

                surprisePage.classList.add("show");

            },
            800
        );

    }
);


/* ==============================
   BIRTHDAY → FINAL PAGE
============================== */

continueButton.addEventListener(
    "click",
    () => {

        surprisePage.classList.remove("show");


        setTimeout(
            () => {

                finalPage.classList.add("show");

            },
            500
        );

    }
);


/* ==============================
   OPEN LOVE LETTER
============================== */

function openLetter() {

    if (
        letterEnvelope.classList.contains("open")
    ) {
        return;
    }

    letterEnvelope.classList.add("open");

    envelopeHint.textContent =
        "A little something from my heart ❤️";

}


/* CLICK */

letterEnvelope.addEventListener(
    "click",
    openLetter
);


/* KEYBOARD */

letterEnvelope.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openLetter();

        }

    }
);