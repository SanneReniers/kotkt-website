document.addEventListener('DOMContentLoaded', function() {
const buttonBoardgame = document.getElementById("boardgame");
const buttonRoleplay = document.getElementById("roleplay");
const buttonLarp = document.getElementById("larp");

const slideBoardgame = document.querySelector(".slide-boardgames");
const slideRoleplay = document.querySelector(".slide-roleplay");
const slideLarp = document.querySelector(".slide-larp");

const pushSlide = document.getElementById("push");

/*
//changeButton();
//document.addEventListener('DOMContentLoaded', changeButton);
//console.log(buttonBoardgame.classList);
//console.log(buttonRoleplay.classList);
//console.log(slideRoleplay.classList);
//document.addEventListener('DOMContentLoaded', checkClass);

//checkClass();
checkClass();
//changeButton();

//function changeButton() {
    document.addEventListener('DOMContentLoaded', checkClass);
   buttonBoardgame.addEventListener("click", function() {
        //checkClass();
        buttonRoleplay.classList.replace("closed", "open");
        console.log("change button boardgame");
        buttonLarp.classList.replace("closed", "open");
        buttonBoardgame.classList.replace("open", "closed");
        checkClass();
        //return;
    });

    buttonRoleplay.addEventListener("click", function() {
        //checkClass();
        buttonRoleplay.classList.replace("open", "closed");
        //checkClass();

        //buttonBoardgame.classList.replace("closed", "open");
        buttonBoardgame.classList.add("open");
        buttonBoardgame.classList.remove("closed");
        buttonLarp.classList.replace("closed", "open");
        //buttonRoleplay.classList.replace("open", "closed");
        console.log("change button roleplay");
        //buttonRoleplay.classList.add("closed");
        //checkClass();
        //return;
    });

    buttonLarp.addEventListener("click", function() {
        //checkClass();
        buttonBoardgame.classList.replace("closed", "open");
        //buttonBoardgame.classList.add("open");
        buttonLarp.classList.replace("open", "closed");
        console.log("change button larp");
        buttonRoleplay.classList.replace("closed", "open");
        //buttonRoleplay.classList.add("closed");
        //checkClass();
        //return;
    });
    //checkClass();
//}

function checkClass() {
    //changeButton();
    if (buttonBoardgame.classList.contains("closed")) {
        slideBoardgame.classList.add("active-slide");
        console.log("class has been added boardgame");
        slideRoleplay.classList.remove("active-slide");
        slideLarp.classList.remove(".active-slide");
        return;
        //changeButton();
    } else if (buttonRoleplay.classList.contains("closed")) {
        slideBoardgame.classList.remove("active-slide");
        console.log("class has been added roleplay");
        slideRoleplay.classList.add("active-slide");
        slideLarp.classList.remove(".active-slide");
        return;
        //changeButton();
    } else if (buttonLarp.classList.contains("closed")) {
        slideBoardgame.classList.remove("active-slide");
        slideRoleplay.classList.remove("active-slide");
        slideLarp.classList.add("active-slide");
        return;
    }

    //changeButton();
} */

if (!buttonBoardgame || !buttonRoleplay || !buttonLarp || !slideBoardgame || !slideRoleplay || !slideLarp) {
    console.error("One or more elements are missing in the DOM!");
}

console.log(buttonBoardgame, buttonRoleplay, buttonLarp);
console.log(slideBoardgame, slideRoleplay, slideLarp);

slideBoardgame.classList.add("active-slide");
buttonBoardgame.classList.add("closed");
buttonRoleplay.classList.add("open");
buttonLarp.classList.add("open");
    


buttonBoardgame.addEventListener("click", function() {
    console.log("Boardgame button clicked");
    changeActiveSlide(slideBoardgame);
    toggleButtonStates(buttonBoardgame);
    addPush();
});

buttonRoleplay.addEventListener("click", function() {
    console.log("Roleplay button clicked");
    changeActiveSlide(slideRoleplay);
    toggleButtonStates(buttonRoleplay);
    addPush();
    console.log(buttonBoardgame.classList, buttonRoleplay.classList, buttonLarp.classList);
});

buttonLarp.addEventListener("click", function() {
    console.log("LARP button clicked");
    changeActiveSlide(slideLarp);
    toggleButtonStates(buttonLarp);
    addPush();
});

function changeActiveSlide(activeslide) {
    slideBoardgame.classList.remove("active-slide");
    slideRoleplay.classList.remove("active-slide");
    slideLarp.classList.remove("active-slide");

    activeslide.classList.add("push");
    activeslide.classList.add("active-slide");
}

function addPush() {
    pushSlide.classList.remove("push");
    pushSlide.classList.add("push");
}

 // Function to toggle button states (open and closed)
 function toggleButtonStates(activeButton) {
    const buttons = [buttonBoardgame, buttonRoleplay, buttonLarp];

    buttons.forEach(button => {
        if (button === activeButton) {
            // Only add 'open' and remove 'closed' for the clicked button
            button.classList.add("closed");
            button.classList.remove("open");
        } else {
            // For other buttons, only add 'closed' and remove 'open'
            button.classList.add("open");
            button.classList.remove("closed");
        }

        // Log the state of the button after class changes for debugging
        console.log(`Button ${button.classList.value}`);
    });
}


// Automatically change slides after a certain period
function startAutoSlideChange() {
    const slides = [slideBoardgame, slideRoleplay, slideLarp];
    const buttons = [buttonBoardgame, buttonRoleplay, buttonLarp];
    let currentSlideIndex = 0;

    // Function to go to the next slide
    function goToNextSlide() {
        // Change to the next slide
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        changeActiveSlide(slides[currentSlideIndex]);
        toggleButtonStates(buttons[currentSlideIndex]);

        console.log(`Auto slide changed to ${buttons[currentSlideIndex].classList.value}`);
    }

    // Set the interval to switch slides every 5 seconds (5000ms)
    setInterval(goToNextSlide, 12000);  // Change every 5 seconds
}

// Start automatic slide change when the page loads
startAutoSlideChange();
}); 