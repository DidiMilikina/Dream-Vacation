root
    src
        sass
            components 
                _elements.scss
            main.scss
        scripts
            main.js
    dist
        css
            main.min.css
        scripts
            bundle.min.js
    index.html
    gulpfile.js


 <div class="tabinator">
        <header>
            <ul>
                <li data-target='one'>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </header>
        <div class="content">
            <div data-source='one' class="tab-content">1</div>
            <div class="tab-content">2</div>
            <div class="tab-content">3</div>
            <div class="tab-content">4</div>
        </div>
    </div>