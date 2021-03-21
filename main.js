$(async function () {
    $(".corporal-html").hide();
    $(".facial-html").hide();
    
$(".corporal-btn").click(()=>{
   $('.estetica-html').hide();
   $(".facial-html").hide();
   $(".corporal-html").show();
})
$('.facial-btn').click(()=>{
   $('.estetica-html').hide();
   $(".corporal-html").hide();
   $(".facial-html").show();
})

$('.estetica-btn').click(()=>{
    $('.estetica-html').show();
    $(".corporal-html").hide();
    $(".facial-html").hide();
})






})
