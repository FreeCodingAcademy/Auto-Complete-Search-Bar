var searchData = [
    'google',
    'youtube',
    'facebook',
    'twitter',
    'instagram',
    'viber',
    'whatsapp',
    'python',
    'java',
    'javascript',
    'flutter',
    'html',
    'css' 
];
var ulEle = document.getElementById("searchView");
var autoComplete = true;
var searchBar = document.getElementById("searchValue");

function getSearch(){
    var searchValue = searchBar.value.toLowerCase();
    for(var x of searchData){
        if(x.search(searchValue) != -1  && autoComplete){
            var liEle = document.createElement("li");
            liEle.append(x);
            ulEle.appendChild(liEle);
        }
    }

    var filterEle = document.getElementsByClassName("ul");
    for(var i  of filterEle[0].children){

        i.onclick = function(){
            searchBar.value = this.innerHTML;
            ulEle.innerHTML = "";
            //console.log(this.innerHTML)
        }

        if(i.innerHTML.search(searchValue) == -1){
            i.style.display = "none";
        }else{
            i.style.display = "block";
        }
    }


    autoComplete = false;
    if(searchValue.length == 0){
        autoComplete = true;
        ulEle.innerHTML = "";
    }
}