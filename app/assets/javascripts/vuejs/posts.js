// window.onload = function () {
//   var posts = new Vue({
//     el: '#posts',
//     data: {
//         posts: [ {name:  "dd"},{name: "w"} ,{name: "ee "}]
//     },
//     mounted: function() {
//       var that;
//       that = this;
//       $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         url: 'http://localhost:3000/posts.json',
//         success: function(data) {
//           that.posts = data;
//         },
//         // error: alert("kicha")
//       });
//     }
//   });
// }
