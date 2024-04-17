var card=$(".card"); // calling of the class of the card
$(card).on("mousemove",(function(t){ //card mouse move event
  var rtx=($(window).innerWidth()/2-t.pageX)/20, //rotatiion of the card X position
  rty=($(window).innerHeight()/2-t.pageY)/20;card.attr("style","transform: rotateY("+rtx+"deg) rotateX("+rty+"deg);") //rotation of the card Y position

  $(card).on("mouseleave",(function(t){ //card mouse leave event default
    card.attr("style","transform: all 0.5 ease"); //transform of the card ease 0.5 just like vanilla js
    card.attr("style","transform: rotateY(0deg) rotateX(0deg)") // default rotate of the card
  }));
}));