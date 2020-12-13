// Todo: Create view setters that chahge the backgrounds and replace html when a view is changed

// Variable & Constant declaration
const mainBodyContainer = document.querySelector('#main-body-cont');
const mainElement = document.querySelector('main');
const searchInput = document.querySelector('#search-input');
const searchIcon = document.querySelector('#search-vector');
const overlayContainer = document.querySelector('.overlay-view-container');
const overlayOverlay = document.querySelector('.overlay-overlay');

// Masonry Grid Initialization
try {
    // Todo: make sure this is run again on albums view activation
    const MasonryElement = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
    });
}
catch{}

// #region Event Listeners

// Sidebar Navigation Links_____
document.querySelectorAll('.nav-group-item').forEach(el =>{
    el.addEventListener('click', e => {
        // Todo: Change Url Locations

        if (e.currentTarget.classList.contains('playlist')) {
            overlayContainer.style.display = 'flex';
            overlayOverlay.style.display = 'block';
        }else if (e.currentTarget.id === 'nav-home-link') { // Change_To_Home_Page

            if (!mainBodyContainer.classList.contains('home')) {
                mainBodyContainer.classList.add('home');
            }

            // change search to suit new color theme
            searchInput.style.color = '#ffffffc7';
            searchIcon.setAttribute('src', './images/search-vector.png');

            // Add Home Background Image & Background Color
            mainElement.style.backgroundImage = `url('./images/home images/pexels-eric-esma-894156.jpg')`
            mainElement.style.backgroundColor = `#1c71cac7`;

            //Display home view
            mainBodyContainer.innerHTML = homeView;

        } else { // Change_From_Home_Page

            // change search to suit new color theme
            searchInput.style.color = '#031852d6';
            searchIcon.setAttribute('src', './images/search-vector__dark.png');

            // Remove Home Background Image & Background Color
            mainElement.style.backgroundImage = `initial`
            mainElement.style.backgroundColor = `initial`;

            if (mainBodyContainer.classList.contains('home')) {
                mainBodyContainer.classList.remove('home');
            }
            if (e.currentTarget.id === 'nav-albums-link') {
                mainBodyContainer.innerHTML = albumsView;
            }
            if (e.currentTarget.id === 'nav-artist-link') {
                mainBodyContainer.innerHTML = artistView;
            }
            if (e.currentTarget.id === 'nav-songs-link') {
                mainBodyContainer.innerHTML = songsView;
            }

            addGridItemsEventListeners();
        }
    })
})

overlayOverlay.addEventListener('click', eve => {
    overlayContainer.style.display = 'none';
    overlayOverlay.style.display = 'none';
})
// #endregion Event Listeners


// #region Html Views
const artistView = `<section id="main-main-section">
                                    <div class="featured-div">
                                        <h2 id="featured-div-header">Featured Artists</h2>

                                        <div class="grid main-featured-grid">
                                            <div class="grid-item grid-item--height2">
                                                <img src="./images/album covers/Juice_Wrld-Legends_Never_Die.jfif" alt="" class="featured-artist-artist"> 
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Juice Wrld</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Legends Never Die</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/21-savage-i-am-i-was-cover.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">21 Savage</h4>
                                                    <h3 class="featured-artist-artist__artist-title">I Am > I Was</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/Don_Toliver_-_Heaven_or_Hell.png" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Don Toliver</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Heaven or Hell</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item grid-item--width2">
                                                <img src="./images/album covers/Boldy-James-The-Alchemist-The-Price-Of-Tea-In-China-Deluxe-Edition-640x400.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Boldy James & The Alchemist</h4>
                                                    <h3 class="featured-artist-artist__artist-title">The Price Of Tea In China</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item grid-item--width2">
                                                <img src="./images/album covers/Eternal Atake_Lil Uzi Vert.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Lil Uzi Vert</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Eternal Atake</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/wunna.webp" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Gunna</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Wunna</h3>
                                                </div>
                                            </div>
                                            <!-- <div class="grid-item">7</div>
                                            <div class="grid-item grid-item--width2">8</div>
                                            <div class="grid-item">10</div>
                                            <div class="grid-item">13</div>
                                            <div class="grid-item grid-item--height2">6</div>
                                            <div class="grid-item grid-item--height2">9</div>
                                            <div class="grid-item grid-item--width2">11</div>
                                            <div class="grid-item grid-item--height2">12</div>
                                            <div class="grid-item grid-item--width2">14</div> -->
                                        </div>
                                    </div>
                                </section>
                                <section id="main-side-section">
                                    <div id="trending-now-div">
                                        <h2 id="trending-now-div-header">Trending Now</h2>
                                        <div id="trending-div-body">
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        Legends Never Die
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        Juice WRLD
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    22 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        Savage Mode II
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        21 Savage & Metro Boomin
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    15 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        My Turn
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        Lil Baby
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    20 Tracks
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="recently-added-div">
                                        <h2 id="recently-added-div-header">Popular Artists</h2>
                                        <div id="recently-added-div-body">
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/Chance_The_Rapper.jpg" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Chance The Rapper</p>
                                                    <p class="recently-added-div-item-followers">12.3M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/drake.jfif" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Drake</p>
                                                    <p class="recently-added-div-item-followers">66.5M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/lil_durk.jpg" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Lil Durk</p>
                                                    <p class="recently-added-div-item-followers">7.8M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                        </div>
                                    </div>
                                </section>`

const albumsView = ` <section id="main-main-section">
                                    <div class="featured-div">
                                        <h2 id="featured-div-header">Featured Albums</h2>

                                        <div class="grid main-featured-grid">
                                            <div class="grid-item grid-item--height2">
                                                <img src="./images/album covers/Juice_Wrld-Legends_Never_Die.jfif" alt="" class="featured-artist-artist"> 
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Juice Wrld</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Legends Never Die</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/21-savage-i-am-i-was-cover.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">21 Savage</h4>
                                                    <h3 class="featured-artist-artist__artist-title">I Am > I Was</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/Don_Toliver_-_Heaven_or_Hell.png" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Don Toliver</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Heaven or Hell</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item grid-item--width2">
                                                <img src="./images/album covers/Boldy-James-The-Alchemist-The-Price-Of-Tea-In-China-Deluxe-Edition-640x400.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Boldy James & The Alchemist</h4>
                                                    <h3 class="featured-artist-artist__artist-title">The Price Of Tea In China</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item grid-item--width2">
                                                <img src="./images/album covers/Eternal Atake_Lil Uzi Vert.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Lil Uzi Vert</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Eternal Atake</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/wunna.webp" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Gunna</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Wunna</h3>
                                                </div>
                                            </div>
                                            <!-- <div class="grid-item">7</div>
                                            <div class="grid-item grid-item--width2">8</div>
                                            <div class="grid-item">10</div>
                                            <div class="grid-item">13</div>
                                            <div class="grid-item grid-item--height2">6</div>
                                            <div class="grid-item grid-item--height2">9</div>
                                            <div class="grid-item grid-item--width2">11</div>
                                            <div class="grid-item grid-item--height2">12</div>
                                            <div class="grid-item grid-item--width2">14</div> -->
                                        </div>
                                    </div>
                                </section>
                                <section id="main-side-section">
                                    <div id="trending-now-div">
                                        <h2 id="trending-now-div-header">Trending Now</h2>
                                        <div id="trending-div-body">
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        Legends Never Die
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        Juice WRLD
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    22 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        Savage Mode II
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        21 Savage & Metro Boomin
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    15 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        My Turn
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        Lil Baby
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    20 Tracks
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="recently-added-div">
                                        <h2 id="recently-added-div-header">Popular Artists</h2>
                                        <div id="recently-added-div-body">
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/Chance_The_Rapper.jpg" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Chance The Rapper</p>
                                                    <p class="recently-added-div-item-followers">12.3M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/drake.jfif" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Drake</p>
                                                    <p class="recently-added-div-item-followers">66.5M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/lil_durk.jpg" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Lil Durk</p>
                                                    <p class="recently-added-div-item-followers">7.8M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                        </div>
                                    </div>
                                </section>`

const homeView = `<div class="home-banner-sec left">
                                    <h2 class="home-banner-header">A Somber Chat With Bobbie Luck</h2>
                                    <div class="home-banner-social-row">
                                        <img src="./images/twitter-vector.svg" alt="twitter account link" class="home-banner-social-img">
                                        <img src="./images/instagram-vector.svg" alt="instagram account link" class="home-banner-social-img">
                                        <img src="./images/youtube-vector.svg" alt="youtube account link" class="home-banner-social-img">
                                    </div>
                                    <p class="home-banner-paragraph">We caught up with upcomin wonder-boy Bobbie Luck and we gotta say in all ways possible it was different from what we expected. We had expected a longer interview but he just called to an emergency show and we forced to cut down our interview to a short but extremely intriguing chat.</p>
                                </div>
                                <div class="home-banner-sec right">
                                    <h2 class="home-banner-header">I Used To Dream In Color</h2>
                                    <h3 class="home-banner-subtitle">Bobbie Luck</h3>
                                    <p class="home-banner-paragraph">We caught up with upcomin wonder-boy Bobbie Luck and we gotta say in all ways possible it was different from what we expected. We had expected a longer interview but he just called to an emergency show and we forced to cut down our interview to a short but extremely intriguing chat.</p>
                                </div>`

const  songsView = `<section id="main-main-section">
                                    <div class="featured-div">
                                        <h2 id="featured-div-header">Featured Songs</h2>

                                        <div class="grid main-featured-grid">
                                            <div class="grid-item grid-item--height2">
                                                <img src="./images/album covers/Juice_Wrld-Legends_Never_Die.jfif" alt="" class="featured-artist-artist"> 
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Juice Wrld</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Legends Never Die</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/21-savage-i-am-i-was-cover.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">21 Savage</h4>
                                                    <h3 class="featured-artist-artist__artist-title">I Am > I Was</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/Don_Toliver_-_Heaven_or_Hell.png" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Don Toliver</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Heaven or Hell</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item grid-item--width2">
                                                <img src="./images/album covers/Boldy-James-The-Alchemist-The-Price-Of-Tea-In-China-Deluxe-Edition-640x400.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Boldy James & The Alchemist</h4>
                                                    <h3 class="featured-artist-artist__artist-title">The Price Of Tea In China</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item grid-item--width2">
                                                <img src="./images/album covers/Eternal Atake_Lil Uzi Vert.jpg" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Lil Uzi Vert</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Eternal Atake</h3>
                                                </div>
                                            </div>
                                            <div class="grid-item">
                                                <img src="./images/album covers/wunna.webp" alt="" class="featured-artist-artist">
                                                <div class="featured-artist-artist__text-cont">
                                                    <h4 class="featured-artist-artist__artist-descrip">Gunna</h4>
                                                    <h3 class="featured-artist-artist__artist-title">Wunna</h3>
                                                </div>
                                            </div>
                                            <!-- <div class="grid-item">7</div>
                                            <div class="grid-item grid-item--width2">8</div>
                                            <div class="grid-item">10</div>
                                            <div class="grid-item">13</div>
                                            <div class="grid-item grid-item--height2">6</div>
                                            <div class="grid-item grid-item--height2">9</div>
                                            <div class="grid-item grid-item--width2">11</div>
                                            <div class="grid-item grid-item--height2">12</div>
                                            <div class="grid-item grid-item--width2">14</div> -->
                                        </div>
                                    </div>
                                </section>
                                <section id="main-side-section">
                                    <div id="trending-now-div">
                                        <h2 id="trending-now-div-header">Trending Now</h2>
                                        <div id="trending-div-body">
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        Legends Never Die
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        Juice WRLD
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    22 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        Savage Mode II
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        21 Savage & Metro Boomin
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    15 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-item">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-item-vector">
                                                <div class="trending-now-item-info">
                                                    <p class="trending-now-item-title">
                                                        My Turn
                                                    </p>
                                                    <p class="trending-now-item-subtitle">
                                                        Lil Baby
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    20 Tracks
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="recently-added-div">
                                        <h2 id="recently-added-div-header">Popular Artists</h2>
                                        <div id="recently-added-div-body">
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/Chance_The_Rapper.jpg" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Chance The Rapper</p>
                                                    <p class="recently-added-div-item-followers">12.3M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/drake.jfif" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Drake</p>
                                                    <p class="recently-added-div-item-followers">66.5M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                            <div class="recently-added-div-item">
                                                <img src="./images/artist pics/lil_durk.jpg" class="recently-added-div-item-img">
                                                <div class="recently-added-div-item-info">
                                                    <p class="recently-added-div-item-name">Lil Durk</p>
                                                    <p class="recently-added-div-item-followers">7.8M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="recently-added-div-item-dots">
                                            </div>
                                        </div>
                                    </div>
                                </section>`
 // #endregion Html Views


 //#region Functions 
 const addGridItemsEventListeners = function() {
     document.querySelectorAll('.grid-item')
         .forEach(gridItem => {
            gridItem.addEventListener('click', event => {
                overlayContainer.style.display = 'flex';
                overlayOverlay.style.display = 'block';
            })
         })
 }
 //#endregion Functions 