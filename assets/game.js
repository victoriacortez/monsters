
isPlayerSet = false;

//move to character
$('#oblina').on('click', function(){
 	setupPlayers($('#oblina'));

  
}); 
$('#stinky').on('click', function(){
  $('#stinky').appendTo('.mychar');
}); 
$('#ickis').on('click', function(){
  $('#ickis').appendTo('.mychar');
}); 
$('#krumm').on('click', function(){
  setupPlayers($('#krumm'));
}); 

function setupPlayers (character){
	console.log(character)
	if(isPlayerSet) {
		$('.defend').html(character).html;
	}
	else{
		$('.divsix').html(character).html;
		isPlayerSet = true;
	}
}

/*
$('.characters').on('click', function(){
  
    if ($(this).parent().attr('class') === 'divone'){
       
        $('.divtwo').append(this)
        
        $('.divethree').append($('#divone').children())
    } 

 if ($(this).parent().attr('class') === 'divthree') && $('divfour').children().is('.character') === false{
        
        $('.divfour').append(this)
    } 

