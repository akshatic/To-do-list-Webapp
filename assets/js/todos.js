// For Striking through On clicking and graying them out.
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});
// On clicking X fade out and delete that Todo task
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input").on("keypress",function(event){
    if(event.which ===13){
        var txt=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + txt + "</li>");
    }
});
$("#toggle-form").on("click",function(){
	$("input").fadeToggle();
});
