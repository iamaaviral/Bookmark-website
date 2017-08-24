//submit button event listener
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmarks
function saveBookmark(e){
  //  console.log('submitted');
  //Get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;
  //console.log(siteName);

  //LOCAL STORAGE
  //we will save it as an array of objects
  var bookmark = {
    name: siteName,
    url: siteUrl
  }

//  console.log(bookmark);
  //check if bookmark is there or not

  if(localStorage.getItem('bookmarks') === null){

    var bookmarks = [];
    bookmarks.push(bookmark);
    //set to local storage

    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }
  else{
    //get bookmarks from local STORAGE
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //add bookmark to array
    bookmarks.push(bookmark);
    //reset it to local storage
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
  }


    //prevent form from submitting
    e.preventDefault();
  //  console.log(e);
}

// function to display the bookmarks on screen
function fetchBookmarks() {
        // get bookmarks from local torage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        //get output id
        var bookmarkResults = document.getElementById('bookmarksResults');

      //display output

      bookmarksResults.innerHTML ="";

      for(var i=0;i<bookmarks.length;i++){
        var name= bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">'+
                                        '<h3>'+name+
                                        '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
                                        '<a class="btn btn-danger" target="_blank" href="#">Delete</a>'+
                                        '</h3>'+
                                        '</div>';

      }
}

window.onload = function(){
    fetchBookmarks();
}
