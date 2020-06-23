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
      outDuration: 1000,
      preventScrolling: true,
      inDuration: 1000,
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