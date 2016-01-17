function init(){
  $('#text-input').on('keyup', function(){
    var $elem = $(this);
    $('#text-output').html($elem.val());
  });

  $('#open-modal').on('click', function(){
    $('#my-modal').addClass('show');
  });

  $('#close-modal').on('click', function(){
    $('#my-modal').removeClass('show');
  });

  $('#toggle-btn').on('click', function(){
    var $elem = $('#toggle-items');

    if ($elem.hasClass('hidden')){
       $elem.removeClass('hidden');
    } else {
       $elem.addClass('hidden');
    }
  });

}

$(document).ready(function(){
  init();
});
