//Declare variables
//nav menu
const logo = document.getElementById("logo")
const navHome = document.getElementById("nav-home")
const navAboutApp = document.getElementById("nav-about-app")
const aboutappPage = document.getElementById("about-app");
//enterance -first page
const heroSection = document.getElementById("hero-section");
const enterBtn = document.getElementById("enter-btn");
const bodyContentsWrapper = document.getElementById("body-contents-wrapper");
//main contents
const searchBtn = document.getElementById("search-btn");
const searchModal = document.getElementById("search-modal");
const alertNoString = document.getElementById("alert-no-string");
const searchInput = document.getElementById("search-input");
const searchBtnInModal = document.getElementById("search-btn-in-modal");
const closeSearchModalBtn = document.getElementById("close-search-modal-btn");
//order by selected option
const formForOrder = document.getElementById("form-for-order")
const sortingOption = document.getElementById("sorting-option");
const sortByOptionBtn = document.getElementById("sort-by-option-btn");
//variable for description of modal 
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close-btn");
//variable for results
const artworkContainer = document.getElementById("artwork-container");
const statusUpdate = document.getElementById("status-update");
//AOS
AOS.init();

//Create Array for sorting function
let filteredResults = artWorks;

//Entering main contents from Intro page
function openContents() {
    heroSection.classList.toggle("active");
    bodyContentsWrapper.classList.toggle("active");
    statusUpdate.classList.remove("active");
    aboutappPage.classList.remove("active");
    deselectAllCheckboxes();
    displayAllArtworks();
    filteredResults = artWorks;
    sortingOption.value = "";
}

enterBtn.addEventListener("click", function () {
    openContents();
})


// display all artworks first
function displayAllArtworks() {
    artworkContainer.innerHTML = "";
    for (let i = 0; i < artWorks.length; i++) {
        let art = artWorks[i];
        artworkContainer.innerHTML += `
        <div class="article">
            <img src="${art.image}" alt="${art.alt}">
            <h5>${art.title}</h5>
            <p>${art.Artist}, 
            ${art.year}
            <span data-id="${art.id}" class="more-info-btn"><i class="bi bi-binoculars">
            </i></span></p>
        </div>`;
        addButtonEvent();

    }
}


//-------- Nav bar menu button ------//

logo.addEventListener("click", function () {
    heroSection.classList.toggle("active");
    bodyContentsWrapper.classList.toggle("active");
})

navHome.addEventListener("click", function () {
    statusUpdate.classList.remove("active");
    aboutappPage.classList.remove("active");
    displayAllArtworks();
    deselectAllCheckboxes();
    filteredResults = artWorks;
    sortingOption.value = "";
})

// function for reset checkbox
function deselectAllCheckboxes() {
    const checkboxes = document.querySelectorAll(".choose-artist");
    checkboxes.forEach(function (checkbox) {
        checkbox.classList.remove("selected");
    });
}

navAboutApp.addEventListener("click", function () {
    aboutappPage.classList.add("active");
    aboutappPage.innerHTML = `
        <h1>Hi There 🌼</h1>
        <p>This app enables you to <span class="pink">search</span> for famous artworks based on an <span class="green">artist's name</span> or <span class="green">any keywords</span> related to
        the art. Feel free to explore and discover masterpieces!<br>
        If you have <span class="pink">any ideas</span> to improve this app, please don't hesitate to <span class="pink">contact me</span>. I would be more than
        happy to receive your feedback.</p>
        <div id="back-btn" class="back-btn">
        <i id="left-arrow" class="bi bi-arrow-left"></i>
        Back to the app
        </div>
    `
    backToTheApp();
})

function backToTheApp() {
    const backBtn = document.getElementById("back-btn");
    backBtn.addEventListener("click", function () {
        aboutappPage.classList.remove("active");
    })
}


//---------String Search---------//
function searchArtworks(e) {
    e.preventDefault();
    let searchString = searchInput.value
    if (searchString === "") {
        return;
    }
    findMatch(searchString);
}

function renderArtwork(artwork) {
    artworkContainer.innerHTML += `
        <div class="article">
            <img src="${artwork.image}" alt="${artwork.alt}">
            <h5>${artwork.title}</h5>
            <p>${artwork.Artist}, 
            ${artwork.year}
            <span data-id="${artwork.id}" class="more-info-btn"><i class="bi bi-binoculars">
            </i></span></p>
        </div>`;
    addButtonEvent();
}

function findMatch(string) {
    artworkContainer.innerHTML = "";
    filteredResults = [];
    let match = false;
    let matchedArtwork = 0;
    let lowerCaseString = string.toLowerCase();
    for (let i = 0; i < artWorks.length; i++) {
        if (artWorks[i].Artist.toLowerCase().match(lowerCaseString) || artWorks[i].description.toLowerCase().match(lowerCaseString) || artWorks[i].title.toLowerCase().match(lowerCaseString)) {
            match = true;
            matchedArtwork++;
            statusUpdate.innerHTML = `
            ${matchedArtwork} results for "${string}"
            `
            statusUpdate.classList.add("active");
            renderArtwork(artWorks[i]);
            filteredResults.push(artWorks[i]);
        }
    }
}

// this search btn toggle modal for search
searchBtn.addEventListener("click", function () {
    searchModal.classList.toggle("active");
    alertNoString.innerHTML = "";
    searchInput.value = "";
})

// this search btn in modal has search event
searchBtnInModal.addEventListener("click", function () {
    if (searchInput.value === "") {
        alertNoString.innerHTML = `
        <p><i class="bi bi-exclamation-triangle-fill"></i>
        Please enter any term!</p>
        `
        return;
    } else {
        searchModal.classList.toggle("active");
        searchArtworks(event);
    }
})

//input will be cleared when click 
searchInput.addEventListener("click", function () {
    searchInput.value = "";
    alertNoString.innerHTML = "";
})

closeSearchModalBtn.addEventListener("click", function () {
    searchModal.classList.toggle("active");
})



// ---------- Filter by Artist------------//
// Recieve artists data and render artwork of certain artists 
function filterBySelectedArtist(artist) {
    statusUpdate.innerHTML = `Artworks by: ${artist}`
    statusUpdate.classList.add("active");
    artworkContainer.innerHTML = "";

    filteredResults = [];

    for (let i = 0; i < artist.length; i++) {
        if (artist[i] === "Van Gogh") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Van Gogh") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "Andy Warhol") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Andy Warhol") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "Chagall") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Chagall") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "Picasso") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Picasso") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "Salvador Dali") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Salvador Dali") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "Frida Kahlo") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Frida Kahlo") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        } if (artist[i] === "Henri Matisse") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Henri Matisse") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "Gustav Klimt") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Gustav Klimt") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "Claude Monet") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "Claude Monet") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "David Hockney") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "David Hockney") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
        if (artist[i] === "René Magritte") {
            for (let index = 0; index < artWorks.length; index++) {
                if (artWorks[index].alt === "René Magritte") {
                    renderArtwork(artWorks[index])
                    filteredResults.push(artWorks[index])
                }
            }
        }
    }
}

// Collect selected artists and give data
function filterArtworks() {
    event.preventDefault();

    let checkedArtist = document.querySelectorAll(".choose-artist.selected");
    if (checkedArtist.length === 0) {
        statusUpdate.innerHTML = "None of artist selected. Display All Artworks"
        statusUpdate.classList.add("active");
        filteredResults = artWorks;
        displayAllArtworks();
        return;
    }

    let selectedArtist = [];

    for (let i = 0; i < checkedArtist.length; i++) {
        selectedArtist.push(checkedArtist[i].getAttribute("data-value"));
    }
    filterBySelectedArtist(selectedArtist);
}


//grab a list of artists and know which one is clicked
const checkboxes = document.querySelectorAll(".choose-artist");
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        this.classList.toggle("selected");
        filterArtworks();
    });
});



// modal for more info of each artwork

function openModal(title, image, description, artist, year) {
    modalContent.innerHTML = `
    <div class="modal-image-container">
    <h2>${title}</h2>
    <img src="${image}">
    <h3>${artist},${year}</h3>
    </div>
    <p>${description}</p>
`
    modal.classList.toggle("active");
}

// get a more info button of specific artwork
function addButtonEvent() {
    const moreInfoBtn = document.getElementsByClassName("more-info-btn");

    for (let i = 0; i < moreInfoBtn.length; i++) {
        moreInfoBtn[i].addEventListener("click", function () {
            let currentArtworkId = moreInfoBtn[i].dataset.id;
            for (let index = 0; index < filteredResults.length; index++) {
                if (currentArtworkId == filteredResults[index].id) {
                    let image = artWorks[currentArtworkId].image;
                    let description = artWorks[currentArtworkId].description;
                    let title = artWorks[currentArtworkId].title;
                    let artist = artWorks[currentArtworkId].Artist;
                    let year = artWorks[currentArtworkId].year;
                    openModal(title, image, description, artist, year);
                }
            }
        })
    }
}

closeBtn.addEventListener("click", function () {
    modal.classList.toggle("active");
})

addButtonEvent();



//-------- Sorting by option --------//

function sortingArtworks() {
    event.preventDefault();
    let selectedOption = sortingOption.value
    if (selectedOption.length === 0) {
        statusUpdate.innerHTML = "Please select option first."
        statusUpdate.classList.add("active");
        displayAllArtworks();
        return;
    }
    sortingBySelectedOption(selectedOption);
}

//Sorting artworks in filteredResults array
function sortingBySelectedOption(option) {
    statusUpdate.innerHTML = `Artworks are sorted by "${option}"`
    statusUpdate.classList.add("active");
    artworkContainer.innerHTML = "";
    if (option === 'year') {
        filteredResults.sort((a, b) => a.year - b.year);
    } else if (option === 'artist') {
        filteredResults.sort((a, b) => a.Artist.localeCompare(b.Artist));
    }
    filteredResults.forEach(artwork => {
        renderArtwork(artwork);
    });
}

sortByOptionBtn.addEventListener("click", function () {
    sortingArtworks();
})

displayAllArtworks();



//------- style for filter by artists area-------//
//Artists list moves horizontally when a mouse on
const artistRow = document.getElementById("artist-row");
const artistCheckContainer = document.querySelector(".artist-check-container");

artistRow.addEventListener('mousemove', function (event) {
    // Calculate the distance from the right edge of the container
    var distanceFromRight = artistRow.offsetWidth - (event.clientX - artistRow.getBoundingClientRect().left);

    // Check if the mouse is near the right edge
    if (distanceFromRight < 50) {
        // Scroll the container to the right
        artistCheckContainer.style.transform = 'translateX(-300px)';
    } else {
        // Reset the container's position
        artistCheckContainer.style.transform = 'translateX(0)';
    }
});

artistRow.addEventListener('mouseleave', function () {
    // Reset the container's position when the mouse leaves the row
    artistCheckContainer.style.transform = 'translateX(0)';
});





