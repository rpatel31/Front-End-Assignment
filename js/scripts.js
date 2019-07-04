//mobile navigation
let nav = document.getElementById('nav-js');
let navToggle = document.getElementById('nav-toggle-js');

navToggle.addEventListener("click", function() {
    nav.classList.toggle("active");
});

//add background to tablet and desktop navigation on scroll
window.onscroll = function() {
    let w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    let targetW = 500;
    if (w >= targetW) {


        let navBig = document.getElementById('js-nav-color');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navBig.style.backgroundImage = "-webkit-linear-gradient(bottom right, rgba(95, 70, 245, 0.9), rgba(37, 147, 198, 0.9))";
            navBig.style.boxShadow = "0px 15px 10px -15px #111";

        } else {
            navBig.style.backgroundImage = "none";
            navBig.style.boxShadow = "none";
        };
    };
};

//image click on portfolio items

let matches = document.querySelectorAll("img.portfolio");
let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let span = document.getElementsByClassName("close")[0];
matches.forEach(function(matches) {
    matches.onclick = function() {
        modal.style.display = "block";
        modalImg.src = "./images/" + matches.id + "_full.jpg";

    }

});
span.onclick = function() {
    modal.style.display = "none";
};



//instagram feed/

const token = '10138974137.1677ed0.e87ba479d9d64676ab295a594d283f6a';
const num_photos = 12; // maximum 20
let baseUrl = 'https://api.instagram.com/v1/users/self/media/recent?access_token=';
const container = document.getElementById('instafeed');
const height = 320;
const width = 320;
let url = baseUrl + token + '&count=' + num_photos;
let request = new Request(url);
fetch(request)
    .then(function(response) {

        return response.json();
    })

    .then(function(data) {
        let theData = "";
        for (let x in data.data) {
            container.innerHTML += '<img class="instagrampic" src="' + data.data[x].images.standard_resolution.url + '"' + 'alt="' + data.data[x].caption + '" height="' + height + 'px"' + 'width="' + width + 'px">';
        }



    });
