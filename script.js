function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    // Toggle the responsive class directly
    menuBtn.classList.toggle("responsive");
}
/*-- Dark Mode Toggle --*/
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});
document.querySelector('.scroll-up-btn').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

/*-- Typing Effect --*/
var typingEffect = new Typed(".typedText", {
    strings: ["Nonkoliso Matiwane", "Nonkoliso Matiwane"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    // Add css option to set font size
    css: {
        fontSize: "60px" // Adjust font size as needed (added 'px' here)
    }
});



/*-- Scroll Animation --*/
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

// Reveal animations for various elements
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/*-- Active Link --*/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*-- Download Button --*/
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Create a temporary link element
    var downloadLink = document.createElement('a');
    // Set the href to the path of the file
    downloadLink.href = "MatiwaneResume.pdf";
    // Set the target to _blank to open in a new tab
    downloadLink.target = "_blank";
    // Append the link to the body
    document.body.appendChild(downloadLink);
    // Trigger a click event on the link
    downloadLink.click();
    // Remove the link from the body
    document.body.removeChild(downloadLink);
});
document.getElementById('hiremeBtn').addEventListener('click', function() {
    // Create a temporary link element
    var downloadLink = document.createElement('a');
    // Set the href to the path of the file with URL-encoded space
    downloadLink.href = "Nkoli.pdf";
    // Set the target to _blank to open in a new tab
    downloadLink.target = "_blank";
    // Append the link to the body
    document.body.appendChild(downloadLink);
    // Trigger a click event on the link
    downloadLink.click();
    // Remove the link from the body
    document.body.removeChild(downloadLink);
});


function validateForm() {
    var form = document.getElementById("emailForm");
    if (!form.checkValidity()) {
        // If the form is invalid, show the validation messages
        form.reportValidity();
        return false;
    }
    // If the form is valid, allow submission
    return true;
}
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function openDocument() {
    // Replace 'path/to/your/document.pdf' with the actual path to your PDF document
    var documentUrl = "MatiwaneResume.pdf";

    // Open the document in a new window
    var newWindow = window.open(documentUrl, '_blank');
    
    // Check if the new window was successfully opened
    if (!newWindow || newWindow.closed || typeof newWindow.closed=='undefined') {
        // Handle the case where the window couldn't be opened
        console.error("Failed to open the document in a new window.");
    }
}
function viewProject(link) {
    window.open(link, '_blank');
}
function openLink(link) {
    window.open(link, '_blank');
}
function openLink(link) {
    window.open(link, '_blank');
}