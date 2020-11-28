// Todo: Create view setters that chahge the backgrounds and replace html when a view is changed



// Masonry Grid Initialization
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});


// #region Html Views
const artistSectionHtml = `  <div id="featured-div">
                    <h2 id="featured-div-header">Featured Albums</h2>
                    <div id="featured-div-body">
                        <img src="./images/album covers/Shoot for the Stars Aim for the Moon_Pop Smoke.jpg" alt=""
                            id="featured-album-cover-art">
                        <div id="featured-album-text-cont">
                            <h3 id="featured-album-name">Shoot For The Stars, Aim For The Moon</h3>
                            <p id="featured-album-artist">Pop Smoke</p>
                            <p id="featured-album-description">Shoot for the Stars, Aim for the Moon is the debut studio
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
                            <img src="./images/album covers/welcome-to-the-o-block.jpg"  class="recenty-added-album-img">
                            <p class="recently-added-album-name">Welcome To The O</p>
                            <p class="recently-added-album-artist">King Von</p> 
                        </div>
                        <div class="recently-added-album">
                            <img src="./images/album covers/wunna.webp"  class="recenty-added-album-img">
                            <p class="recently-added-album-name">Wunna</p>
                            <p class="recently-added-album-artist">Gunna</p>
                        </div>
                    </div>
                </div>`

const albumsView = ` <div class="featured-div">
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
                </div>`
// #endregion Html Views
