$(document).ready(function() {
    $(".onClick1").click(function() {
      $("#peach").toggle();
      $("#click1").toggle();
    });

    $(".onClick2").click(function() {
      $("#peach1").toggle();
      $("#click2").toggle();
    });

    $(".onClick3").click(function() {
      $("#peach2").toggle();
      $("#click3").toggle();
    });
  });

$(document).ready(function(){
    $(".opaque").hover(function(){
      $(this).css("opacity", "0.5");
      $(this).find(".hoverable").show();
      }, function(){
      $(this).css("opacity", "1");
      $(this).find(".hoverable").hide();
    });
  });

function details(){
  var name =document.forms["details"]["name"].value;
  var email=document.forms["details"]['email'].value;
}

document.getElementById("answer").style.display = "block";
document.getElementById("alert").innerHTML=name;
return name

}

