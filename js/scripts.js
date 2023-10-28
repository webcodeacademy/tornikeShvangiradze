// Header nav texts

const nav = [`Main`, `Blog`, `Contact`, `FAQ`];

const navLength = nav.length;

const navLinks = [`index.html`, `blog.html`, `contact.html`, `faq.html`];

let navText = `<ul>`;

for (let i = 0; i < navLength; i++){
    navText += `<li><a href = "` + navLinks[i] + `">` + nav[i] + `</a></li>`;
}

navText += `</ul>`;

document.getElementById(`nav`).innerHTML = navText;

function show(){
    document.getElementById("messagebox-container").style.display = "block";
}

function hide() {
    document.getElementById("messagebox-container").style.display = "none";
}

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
        items: 1,
        },
        600: {
        items: 3,
        },
        1000: {
        items: 5,
        },
    },
});