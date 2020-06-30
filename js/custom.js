// iniciadores do carroussel




$(document).ready(function(){
    $('.carousel').carousel({
        duration: 500,
        dist:-200,
        shift: 100,
        padding: 300,
        numVisible: 5
        
    });

    $('.prev').click(function(){
        $('.carousel').carousel('prev');
    })

    $('.next').click(function(){
        $('.carousel').carousel('next');
    })
    

  });

// aciona o menu mobile

  $(document).ready(function(){
    $('.sidenav').sidenav({
      outDuration: 500,
      preventScrolling: true,
      inDuration: 500,
      draggable: true

    });
  });



//   aciona o menu dropdown

$(".dropdown-trigger").dropdown({
    coverTrigger: false,
    hover:true
  });

//   aciona o slider-banner
$(document).ready(function(){
    $('.slider').slider({
        interval: 7000,
        duration: 3000,
        height: 450,
        indicators: true
    });
  });

  // aciona o efeito na imagem 

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  // modais acampamentos


  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 500, // Transition in duration
      outDuration: 500, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%'
    });
  });