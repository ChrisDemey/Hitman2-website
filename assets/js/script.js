// random background and text together
let total_images = 9;
let imgFolder = 'assets/img/Backgrounds/';
let random_number = Math.floor((Math.random() * total_images));
let random_img = new Array();
let random_text = [];
random_img[0] = "bgblue1.jpg";
random_text[0] = 'Don\'t get on fire!';
random_img[1] = "bgblue2.jpg";
random_text[1] = 'Heading with precision';
random_img[2] = "bgblue3.jpg";
random_text[2] = 'Cooking a method';
random_img[3] = "bgblue4.jpg";
random_text[3] = 'Clean up the mess';
random_img[4] = "bgblue5.jpg";
random_text[4] = 'Don\'t play around';
random_img[5] = "bgpink1.jpg";
random_text[5] = 'Fishing your targets with time';
random_img[6] = "bgpink2.jpg";
random_text[6] = 'Shocking in silence';
random_img[7] = "bgpink3.jpg";
random_text[7] = 'Drilling trough the targets';
random_img[8] = "bgpink4.jpg";
random_text[8] = 'Measure the procedure';
document.body.style.backgroundImage = "url(" + imgFolder + random_img[random_number] + ")";
document.getElementById("txtSecTxt").innerHTML = random_text[random_number];


// API Steam - Hitman 2 News //

let requestURL = 'http://localhost:8000/';
fetch(requestURL,{
    method:"get"
})
.then(data => data.json())
.then(data => siteNews(data.appnews.newsitems))

function siteNews(jsonObj) {
    let titleNews = document.querySelectorAll('#actuTitle');
    let describeNews = document.querySelectorAll('#descriptionNews');
    let actuNews = document.querySelectorAll('#newslink');
    // let newsDates = document.querySelectorAll('#dateNews');

    for(let i = 0; i < jsonObj.length;i++){
        titleNews[i].innerHTML = jsonObj[i]['title'];
        describeNews[i].innerHTML = jsonObj[i]['contents'];
        actuNews[i].innerHTML = "<a href='"+jsonObj[i]['url']+"'target='_blank'>Lien de l'article</a>";
        // newsDates[i].textContent = jsonObj[i]['date'];
    }
}