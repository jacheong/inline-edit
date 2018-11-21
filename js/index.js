var inlineEditValue = $("#inline-edit");


//EVENTS
$(".edit-button").click(function() {
    $("#user-input").val(inlineEditValue.text());

    $(".text-modal").show();        
    $(".text-modal").css({
        opacity: "1",
        top: "0",
        transition: "opacity ease 0.15s",
    });
});

$("#accept-button").click(function() {
    if( $("#user-input").val().length > 0 ) {
        $(this).attr("disabled", "false");
        inlineEditValue.text( $("#user-input").val() );

        $(".text-modal").hide();  
        $(".text-modal").css({
            opacity: "0",
            top: "100%"
        });
    }
    else {
        $(this).attr("disabled", "true");
    }
});

$("#decline-button").click(function() {
    $(".text-modal").hide();  
    $(".text-modal").css({
        opacity: "0",
        top: "100%"
    });
});