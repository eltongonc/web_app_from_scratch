(function(global){
    'use strict';

    //SOUNDCLOUD_API
    const SOUNDCLOUD_API = {
        clientId: '',
        search: 'afro',
        limit: '60',
        url: function(songId){
            // More info: https://developers.soundcloud.com/docs/api/reference#tracks
            // return `https://api.soundcloud.com/resolve?url=http://soundcloud.com/search/sounds?q=trending&client_id=${this.clientId}`
            if (songId) {
                return `https://api.soundcloud.com/tracks${songId}?client_id=${this.clientId}`;
            }else{
                return `https://api.soundcloud.com/tracks?client_id=${this.clientId}&limit=${this.limit}&q=${this.search}`;
            }
        }
    };

    // data storage object
    let data = {
        call: function(url, htmlInput, htmlOutput){
            // source: https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest && Joost
            let req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.onreadystatechange = function(){
                if (req.readyState === XMLHttpRequest.DONE && (req.status >= 200 && req.status < 400)){
                    // turns de response in a object
                    let response = JSON.parse(req.responseText);
                    // save the current data in the localStorage
                    data.save(response);
                    // create html
                    sections.createContent(response, htmlInput, htmlOutput);
                    // Adds a spinner everytime a call is made
                    helpers.spinner.remove();
                }
            };
            // Show the error if there is no connection
            req.onerror = function(err) {
                console.log(err);
            };
            req.send();
        },
        save(data){
            // set the searched data to the global object
            localStorage.setItem("data", JSON.stringify(data));
            return data;
        }
    };

    // All options needed for the app
    let helpers = {
        dialog: document.querySelector('dialog'),
        main: document.querySelector('main'),
        pages: document.querySelectorAll('main > section'),
        // dataHandler(data) {
        //
        // },
        spinner: {
            add() {
                helpers.dialog.setAttribute('open', '');
                helpers.main.classList.add('de-emphasized');
            },
            remove() {
                if (helpers.dialog.close) {
                    helpers.dialog.close();
                }
                else {
                    helpers.dialog.removeAttribute('open');
                }
                helpers.main.classList.remove('de-emphasized');
            }
        },
        fancyLables: (function(){
            let inputs = document.querySelectorAll('form input:not([type="checkbox"])');
            // Code for fancy labels
            inputs.forEach((input)=>{
                input.addEventListener("change", function(){
                    if(this.value !== ""){
                        document.querySelector(`label[for=${this.id}]`).classList.add("up");
                    }else {
                        document.querySelector(`label[for=${this.id}]`).classList.remove("up");
                    }
                });
            });
        }())
    };

    // Function to generate the app and
    let app = {
        init: function(){
            // enable the chat module
            let chat = document.querySelector('aside span');
            chat.addEventListener("click", function(){
                this.parentNode.classList.toggle("offscreen");
            });
            // generate routes
            routes.init();
        }
    };

    // Function to generate the routes
    let routes = {
        init: function(){
            // this.hashChange();
            sections.toggle();

            // Do an api call the first time an user get to the homeRoute. This happens only when it is not saved in local storage;
            if (localStorage.data) {
                sections.createContent(JSON.parse(localStorage.data), "#entry-template",'#content');
            }else {
                // sets a spinner
                helpers.spinner.add();
                // gets a list of data and creates the html element for it
                SOUNDCLOUD_API.call(SOUNDCLOUD_API.url(), "#entry-template",'#content');
            }
        },
        // change the route
        hashChange: window.addEventListener("hashchange", function(){
            sections.toggle();
        }),
    };

    // handles the sections
    let sections = {
        // function that hides all sections and shows one.
        toggle: function(response){
            let initRoute = new Promise(function(resolve, reject) {
                // check current route if it exists and hides all helpers.pages
                resolve(
                    sections.checkExistingRoute(location.hash),
                    helpers.pages.forEach(function (section) {
                        // Hide all sections
                        section.classList.add("hidden");
                    })
                );
            })
            .then(function(result) {
                console.log(result);
                // uses the response that is returned from checkExistingRoute
                if (result.routeExist) {
                    result.correspondingPage(result.path);
                    document.querySelector(result.route).classList.remove("hidden");
                }else {
                    console.log(helpers.dialog);
                    console.log(result.message);
                    location.hash = result.route;
                }

                return result.route;
            });

        },
        // this method return a object with a rout+info
        checkExistingRoute: function(hash) {
            // checks if the hash has an path: "#player/songTitle"
            let simpleHash = hash.split("/");
            let replacedHash = simpleHash[0].replace("#","");
            let routeArray = [];
            let response = {};

            // if the current hash(without #) matches one of the sections push it to an array.
            // this array will allways have 1 item at the 0th position.
            helpers.pages.forEach((section)=>{
                section.id == replacedHash ? routeArray.push(simpleHash[0]) : null
            });

            // check if the previous made array contains an item and give an succes message and use the path if ther is any
            if (routeArray.length > 0) {
                response.message = "Route exist";
                response.route = routeArray[0];
                response.routeExist = true;
                // match the hash to the of the pageFunctions
                response.correspondingPage = sections.show[replacedHash];
                response.path = simpleHash[1];
                simpleHash[1] ? localStorage.setItem("path", simpleHash[1]) : null
            }else {
                response.message = `Route ${replacedHash} does not exist. You will be redirected to login`;
                response.route = "#login";
                response.routeExist = false;
            }
            return response;
        },
        createContent: function(data, htmlInput, htmlOutput){
            // Handlebars selection
            self.source = document.querySelector(htmlInput).innerHTML;
            let template = Handlebars.compile(self.source);
            let context = data.map((item)=>{
                return {
                    pageTitle: "Title",
                    id: item.id,
                    title: item.title,
                    genre: item.genre || "No genre",
                    description: item.description,
                    stream_url: item.stream_url,
                    created_at: item.created_at,
                    path: item.permalink,
                    soundcloudURL: item.permalink_url,
                    uri: item.uri.replace("https://", ""),
                    img: item.artwork_url || "http://levivisser.nl/img/Icons/CD.png",
                    likes: item.likes_count ? `<i class="fa fa-heart"></i> ${item.likes_count}` : "",
                    userImg: item.user.avatar_url || "../img/user.svg",
                    userLink: item.user.permalink_url,
                    userName: item.user.username,

                };
            });
            document.querySelector(htmlOutput).innerHTML = template(context);
        },
        show: {
            login: function(){
                let form = document.querySelector('form[action="#home"]');
                form.addEventListener("submit", function(e){
                    e.preventDefault();

                    // TODO link to database
                    let username = document.querySelector('#field-email').value;
                    let password = document.querySelector('#field-password').value;
                    if(username && password){
                        localStorage.setItem("user", username);
                        location.replace("#home");
                    }
                });
            },
            // Routes for home
            home: function(){
                let form = document.querySelector('form[action="#search"]');
                // search input
                form.addEventListener("submit", function(e){
                    // Stops the form from loading a page
                    e.preventDefault();
                    // Adds a loadings spinner
                    helpers.spinner.add();
                    // Uses userinput as querie
                    SOUNDCLOUD_API.search = this.children[0].value;
                    // Makes ajax call
                    data.call(SOUNDCLOUD_API.url(), "#entry-template",'#content');
                });

                let homeData = localStorage.getItem("user");
                // sections.createContent(homeData)
            },
            // Routes for searched content
            player: function(name){
                let data = JSON.parse(localStorage.getItem('data'));
                // filters the
                let filteredData = data.filter(function(item){
                    return item.permalink == (name || localStorage.getItem("path"));
                });
                sections.createContent(filteredData, "#player-template", "#player");
            }
        }
    };

    // Start the app
    app.init();

})(this);