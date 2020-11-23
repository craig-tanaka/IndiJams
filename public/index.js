const albumSectionHtml = `  <div id="featured-div">
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

    

    
// Masonry Grid Initialization
var msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
});