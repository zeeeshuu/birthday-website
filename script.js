const enterBtn = document.getElementById("enterBtn");
const reveal = document.getElementById("reveal");

enterBtn.addEventListener("click", () => {

    reveal.classList.add("active");

        setTimeout(() => {

                reveal.scrollIntoView({
                            behavior: "smooth"
                                    });

                                        }, 500);

                                        });
