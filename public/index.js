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

        if (e.currentTarget.id === 'nav-home-link') { // Change_To_Home_Page

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
                mainBodyContainer.innerHTML = songsViewfi;
        }
        }
    })
})

overlayOverlay.addEventListener('click', eve => {
    overlayContainer.style.display = 'none';
    overlayOverlay.style.display = 'none';
    console.log('clicked');
})
// #endregion Event Listeners


// #region Html Views
const artistView = `<section id="main-main-section">
                                <div id="featured-div">
                                    <h2 id="featured-div-header">Featured Albums</h2>
                                    <div id="featured-div-body">
                                        <img src="./images/album covers/Shoot for the Stars Aim for the Moon_Pop Smoke.jpg" alt=""
                                            id="featured-album-cover-art">
                                        <div id="featured-album-text-cont">
                                            <h3 id="featured-div-name">Shoot For The Stars, Aim For The Moon</h3>
                                            <p id="featured-div-artist">Pop Smoke</p>
                                            <p id="featured-div-description">Shoot for the Stars, Aim for the Moon is the debut studio
                                                album by
                                                American rapper Pop Smoke, and first posthumous project following his murder from a home
                                                invasion on
                                                February 19, 2020.</p>
                                        </div>
                                    </div>
                                </div>

                                <div id="recently-added-div">
                                    <h2 id="recently-added-div-header">Recently Added</h2>
                                    <div id="recently-added-div-body">
                                        <div class="recently-added-album">
                                            <img src="./images/album covers/blame-it-on-baby.jpg" class="recenty-added-album-img">
                                            <p class="recently-added-album-name">Blame It On Baby</p>
                                            <p class="recently-added-album-artist">DaBaby</p>
                                        </div>
                                        <div class="recently-added-album">
                                            <img src="./images/album covers/welcome-to-the-o-block.jpg" class="recenty-added-album-img">
                                            <p class="recently-added-album-name">Welcome To The O</p>
                                            <p class="recently-added-album-artist">King Von</p>
                                        </div>
                                        <div class="recently-added-album">
                                            <img src="./images/album covers/wunna.webp" class="recenty-added-album-img">
                                            <p class="recently-added-album-name">Wunna</p>
                                            <p class="recently-added-album-artist">Gunna</p>
                                        </div>
                                    </div>
                                </div>
                                </section>
                            <section id="main-side-section">
                                <div id="trending-now-div">
                                    <h2 id="trending-now-div-header">Trending Now</h2>
                                    <div id="trending-div-body">
                                        <div class="trending-now-album">
                                            <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                                            <div class="trending-now-album-info">
                                                <p class="trending-now-album-name">
                                                    Legends Never Die
                                                </p>
                                                <p class="trending-now-album-artist">
                                                    Juice WRLD
                                                </p>
                                            </div>
                                            <p class="trending-now-additional-info">
                                                22 Tracks
                                            </p>
                                        </div>
                                        <div class="trending-now-album">
                                            <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                                            <div class="trending-now-album-info">
                                                <p class="trending-now-album-name">
                                                    Savage Mode II
                                                </p>
                                                <p class="trending-now-album-artist">
                                                    21 Savage & Metro Boomin
                                                </p>
                                            </div>
                                            <p class="trending-now-additional-info">
                                                15 Tracks
                                            </p>
                                        </div>
                                        <div class="trending-now-album">
                                            <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                                            <div class="trending-now-album-info">
                                                <p class="trending-now-album-name">
                                                    My Turn
                                                </p>
                                                <p class="trending-now-album-artist">
                                                    Lil Baby
                                                </p>
                                            </div>
                                            <p class="trending-now-additional-info">
                                                20 Tracks
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="popular-artists-div">
                                    <h2 id="popular-artists-div-header">Popular Artists</h2>
                                    <div id="popular-artists-div-body">
                                        <div class="popular-artist">
                                            <img src="./images/artist pics/Chance_The_Rapper.jpg" class="popular-artist-img">
                                            <div class="popular-artist-info">
                                                <p class="popular-artist-name">Chance The Rapper</p>
                                                <p class="popular-artist-followers">12.3M Followers</p>
                                            </div>
                                            <img src="./images/dots-horizontal-vector.png" alt="options" class="popular-artist-dots">
                                        </div>
                                        <div class="popular-artist">
                                            <img src="./images/artist pics/drake.jfif" class="popular-artist-img">
                                            <div class="popular-artist-info">
                                                <p class="popular-artist-name">Drake</p>
                                                <p class="popular-artist-followers">66.5M Followers</p>
                                            </div>
                                            <img src="./images/dots-horizontal-vector.png" alt="options" class="popular-artist-dots">
                                        </div>
                                        <div class="popular-artist">
                                            <img src="./images/artist pics/lil_durk.jpg" class="popular-artist-img">
                                            <div class="popular-artist-info">
                                                <p class="popular-artist-name">Lil Durk</p>
                                                <p class="popular-artist-followers">7.8M Followers</p>
                                            </div>
                                            <img src="./images/dots-horizontal-vector.png" alt="options" class="popular-artist-dots">
                                        </div>
                                    </div>
                                </div>
                            </section>`

const albumsView = ` <section id="main-main-section">
                                    <div class="featured-div">
                                        <h2 id="featured-div-header">Featured Albums</h2>

                                        <div class="grid other-featured-artists">
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
                                            <div class="trending-now-album">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                                                <div class="trending-now-album-info">
                                                    <p class="trending-now-album-name">
                                                        Legends Never Die
                                                    </p>
                                                    <p class="trending-now-album-artist">
                                                        Juice WRLD
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    22 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-album">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                                                <div class="trending-now-album-info">
                                                    <p class="trending-now-album-name">
                                                        Savage Mode II
                                                    </p>
                                                    <p class="trending-now-album-artist">
                                                        21 Savage & Metro Boomin
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    15 Tracks
                                                </p>
                                            </div>
                                            <div class="trending-now-album">
                                                <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                                                <div class="trending-now-album-info">
                                                    <p class="trending-now-album-name">
                                                        My Turn
                                                    </p>
                                                    <p class="trending-now-album-artist">
                                                        Lil Baby
                                                    </p>
                                                </div>
                                                <p class="trending-now-additional-info">
                                                    20 Tracks
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="popular-artists-div">
                                        <h2 id="popular-artists-div-header">Popular Artists</h2>
                                        <div id="popular-artists-div-body">
                                            <div class="popular-artist">
                                                <img src="./images/artist pics/Chance_The_Rapper.jpg" class="popular-artist-img">
                                                <div class="popular-artist-info">
                                                    <p class="popular-artist-name">Chance The Rapper</p>
                                                    <p class="popular-artist-followers">12.3M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="popular-artist-dots">
                                            </div>
                                            <div class="popular-artist">
                                                <img src="./images/artist pics/drake.jfif" class="popular-artist-img">
                                                <div class="popular-artist-info">
                                                    <p class="popular-artist-name">Drake</p>
                                                    <p class="popular-artist-followers">66.5M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="popular-artist-dots">
                                            </div>
                                            <div class="popular-artist">
                                                <img src="./images/artist pics/lil_durk.jpg" class="popular-artist-img">
                                                <div class="popular-artist-info">
                                                    <p class="popular-artist-name">Lil Durk</p>
                                                    <p class="popular-artist-followers">7.8M Followers</p>
                                                </div>
                                                <img src="./images/dots-horizontal-vector.png" alt="options" class="popular-artist-dots">
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
                <div id="featured-div">
                    <h2 id="featured-div-header">Featured Tracks</h2>
                    <div id="featured-div-body">
                        <img src="./images/album covers/Shoot for the Stars Aim for the Moon_Pop Smoke.jpg" alt=""
                            id="featured-album-cover-art">
                        <div id="featured-album-text-cont">
                            <h3 id="featured-div-name">Shoot For The Stars, Aim For The Moon</h3>
                            <p id="featured-div-artist">Pop Smoke</p>
                            <p id="featured-div-description">Shoot for the Stars, Aim for the Moon is the debut studio
                                album by
                                American rapper Pop Smoke, and first posthumous project following his murder from a home
                                invasion on
                                February 19, 2020.</p>
                        </div>
                    </div>
                </div>

                <div class="featured-tracks-row">
                    <div class="featured-track">
                        <img src="./images/album covers/blame-it-on-baby.jpg" class="recenty-added-album-img">
                        <div class="featured-track-text">
                            <p class="featured-track-name">Blame It On Baby</p>
                            <p class="featured-track-artist">DaBaby</p>
                        </div>
                        <div class="featured-track-overlay-buttons-row">
                            <img src="./images/play-vector.png" alt="" class="featured-track-overlay-btn play">
                            <img src="./images/liked-vector.png" alt="" class="featured-track-overlay-btn like">
                        </div>
                    </div>
                    <div class="featured-track">
                        <img src="./images/album covers/welcome-to-the-o-block.jpg" class="recenty-added-album-img">
                        <div class="featured-track-text">
                            <p class="featured-track-name">Welcome To The O</p>
                            <p class="featured-track-artist">King Von</p>
                        </div>
                        <div class="featured-track-overlay-buttons-row">
                            <img src="./images/play-vector.png" alt="" class="featured-track-overlay-btn play">
                            <img src="./images/liked-vector.png" alt="" class="featured-track-overlay-btn like">
                        </div>
                    </div>
                    <div class="featured-track">
                        <img src="./images/album covers/wunna.webp" class="recenty-added-album-img">
                        <div class="featured-track-text">
                            <p class="featured-track-name">Wunna</p>
                            <p class="featured-track-artist">Gunna</p>
                        </div>
                        <div class="featured-track-overlay-buttons-row">
                            <img src="./images/play-vector.png" alt="" class="featured-track-overlay-btn play">
                            <img src="./images/liked-vector.png" alt="" class="featured-track-overlay-btn like">
                        </div>
                    </div>
                    <div class="featured-track">
                        <img src="./images/album covers/welcome-to-the-o-block.jpg" class="recenty-added-album-img">
                        <div class="featured-track-text">
                            <p class="featured-track-name">Welcome To The O</p>
                            <p class="featured-track-artist">King Von</p>
                        </div>
                        <div class="featured-track-overlay-buttons-row">
                            <img src="./images/play-vector.png" alt="" class="featured-track-overlay-btn play">
                            <img src="./images/liked-vector.png" alt="" class="featured-track-overlay-btn like">
                        </div>
                    </div>
                    <div class="featured-track">
                        <img src="./images/album covers/blame-it-on-baby.jpg" class="recenty-added-album-img">
                        <div class="featured-track-text">
                            <p class="featured-track-name">Blame It On Baby</p>
                            <p class="featured-track-artist">DaBaby</p>
                        </div>
                        <div class="featured-track-overlay-buttons-row">
                            <img src="./images/play-vector.png" alt="" class="featured-track-overlay-btn play">
                            <img src="./images/liked-vector.png" alt="" class="featured-track-overlay-btn like">
                        </div>
                    </div>
                    <div class="featured-track">
                        <img src="./images/album covers/welcome-to-the-o-block.jpg" class="recenty-added-album-img">
                        <div class="featured-track-text">
                            <p class="featured-track-name">Welcome To The O</p>
                            <p class="featured-track-artist">King Von</p>
                        </div>
                        <div class="featured-track-overlay-buttons-row">
                            <img src="./images/play-vector.png" alt="" class="featured-track-overlay-btn play">
                            <img src="./images/liked-vector.png" alt="" class="featured-track-overlay-btn like">
                        </div>
                    </div>
                </div>
            </section>
            <section id="main-side-section">
                <div id="trending-now-div">
                    <h2 id="trending-now-div-header">Trending Now</h2>
                    <div id="trending-div-body">
                        <div class="trending-now-album">
                            <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                            <div class="trending-now-album-info">
                                <p class="trending-now-album-name">
                                    Legends Never Die
                                </p>
                                <p class="trending-now-album-artist">
                                    Juice WRLD
                                </p>
                            </div>
                            <p class="trending-now-additional-info">
                                22 Tracks
                            </p>
                        </div>
                        <div class="trending-now-album">
                            <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                            <div class="trending-now-album-info">
                                <p class="trending-now-album-name">
                                    Savage Mode II
                                </p>
                                <p class="trending-now-album-artist">
                                    21 Savage & Metro Boomin
                                </p>
                            </div>
                            <p class="trending-now-additional-info">
                                15 Tracks
                            </p>
                        </div>
                        <div class="trending-now-album">
                            <img src="./images/play-now-trending-vector.png" class="trending-now-album-vector">
                            <div class="trending-now-album-info">
                                <p class="trending-now-album-name">
                                    My Turn
                                </p>
                                <p class="trending-now-album-artist">
                                    Lil Baby
                                </p>
                            </div>
                            <p class="trending-now-additional-info">
                                20 Tracks
                            </p>
                        </div>
                    </div>
                </div>
                <div id="recent-tracks-div">
                    <h2 id="recent-tracks-div-header">Recently Added</h2>
                    <div id="recent-tracks-div-body">
                        <div class="recent-tracks-track">
                            <img src="./images/play-now-trending-vector.png" class="recent-tracks-track-vector">
                            <div class="recent-tracks-track-info">
                                <p class="recent-tracks-track-name">
                                    Legends Never Die
                                </p>
                                <p class="recent-tracks-track-artist">
                                    Juice WRLD
                                </p>
                            </div>
                            <p class="recent-tracks-track-additional-info">
                                22 Tracks
                            </p>
                        </div>
                        <div class="recent-tracks-track">
                            <img src="./images/play-now-trending-vector.png" class="recent-tracks-track-vector">
                            <div class="recent-tracks-track-info">
                                <p class="recent-tracks-track-name">
                                    Savage Mode II
                                </p>
                                <p class="recent-tracks-track-artist">
                                    21 Savage & Metro Boomin
                                </p>
                            </div>
                            <p class="recent-tracks-track-additional-info">
                                15 Tracks
                            </p>
                        </div>
                        <div class="recent-tracks-track">
                            <img src="./images/play-now-trending-vector.png" class="recent-tracks-track-vector">
                            <div class="recent-tracks-track-info">
                                <p class="recent-tracks-track-name">
                                    My Turn
                                </p>
                                <p class="recent-tracks-track-artist">
                                    Lil Baby
                                </p>
                            </div>
                            <p class="recent-tracks-track-additional-info">
                                20 Tracks
                            </p>
                        </div>
                    </div>
                </div>
            </section>`
 // #endregion Html Views
