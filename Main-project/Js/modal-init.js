(function () {
  var $content = $('#share-options').detach();

  $('.share').on('click', function () {
    modal.open({ content: $content, width: 440, height: 420 });
  });

}());


// (function () {
//   var $content = $('#share-options2').detach();

//   $('.share2').on('click', function () {
//     modal.open({ content: $content, width: 440, height: 320 });
//   });

// }());