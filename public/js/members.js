$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
 $.get("/api/user_data").then(function(data) {
   $(".member-name").text(data.email);
  });



$.get('/api/user_diet').then(function(data){
  console.log('heee')
})
});
