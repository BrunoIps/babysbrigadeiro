var tela = $('.window-size').innerHTML = window.innerWidth;

if(tela > 1028){
  var brig = $('.brigadeiro-img');
  setInterval(() => {
    
    brig.attr('src', 'src/images/babybrigadeiro.png').hide();
    setTimeout(()=>{
      brig.show('slide')
    }, 4000)
  
  }, 3500);
}
else{
  $('.brigadeiro-img').attr('src', 'src/images/babybrigadeiro.png')
}

  
//   rotate = 0;
// brig.mouseenter( () =>{
//   for(var i = 0; i < 24; i++){
//     rotate += 15;
//     brig.css({'TransitionDuration':'1s'})
//     brig.css({'transform': 'rotate(' + rotate+'deg)'})
//   }
//})

$('.whats-link').click(()=>{
  console.log("click")
  window.open('https://api.whatsapp.com/send?phone=5519996020388&text=Ol%C3%A1%20gostaria%20de%20informa%C3%A7%C3%B5es%20dos%20doces')
})
$('.insta-link').click(()=>{
  console.log("click")
  window.open('https://www.instagram.com/babysbrigadeiros/')
})
$('.face-link').click(()=>{
  console.log("click")
  window.open('https://www.facebook.com/babysbrigadeiros')
})