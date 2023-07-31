const locations_arr = ["dubai", "france", "egypt", "india", "indonesia"];



document.getElementById("search-input").addEventListener('input', ()=>{
    let user_input = document.getElementById("search-input").value.toLowerCase();
    if(user_input.length > 0){
        document.getElementById("search-results").style.display = "flex";
    }
    else{
        document.getElementById("search-results").style.display = "none";
    }
    const search_arr = [];
    locations_arr.forEach((dest)=>{
        if (dest.startsWith(user_input)){
            search_arr.push(dest)
            console.log(search_arr);
        }
    })
    let output = "";
    // if (search_arr.length == 0){
    //     output = `<div class = "search-result-div"></div> <div class = "search-result-div">No results found</div>`;
    //     document.getElementById("search-results").innerHTML = output;
    // }
    // else{
    //     output = `<div class = "search-result-div"></div>` 
    //     search_arr.forEach((dest)=>{
    //         output += `<div class = "search-result-div">${dest.toUpperCase()}</div>`
    //     document.getElementById("search-results").innerHTML = output;
    //     })
    // }
    console.log(user_input);
})
