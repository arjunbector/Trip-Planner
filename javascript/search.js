const locations = [
    {
        dest : "dubai",
        href : "./dubai.html",
    },
    {
        dest : "france",
        href : "./france.html",
    },
    {
        dest : "egypt",
        href : "./egypt.html",
    },
    {
        dest : "india",
        href : "./work.html",
    },
    {
        dest : "indonesia",
        href : "./work.html",
    },
];



document.getElementById("search-input").addEventListener('input', ()=>{
    let user_input = document.getElementById("search-input").value.toLowerCase();
    if(user_input.length > 0){
        document.getElementById("search-results").style.display = "flex";
    }
    else{
        document.getElementById("search-results").style.display = "none";
    }
    const search_arr = [];
    locations.forEach((dest_object)=>{
        if (dest_object.dest.includes(user_input)){
            search_arr.push(dest_object)
            console.log(search_arr);
        }
    })
    let output = "";
    if (search_arr.length == 0){
        output = `<div class = "search-result-div no-hover">No results found</div>`;
        document.getElementById("search-results").innerHTML = output;
    }
    else{
        output = `<div></div>` 
        search_arr.forEach((dest)=>{
            output += `<div class="search-result-div"><a href=${dest.href}>${dest.dest.toUpperCase()}</a></div>`
        document.getElementById("search-results").innerHTML = output;
        })
    }
})