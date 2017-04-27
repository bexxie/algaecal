$(function () {
	$.ajax({
		type: 'GET',
		url: 'https://www.algaecal.com/wp-json/acf/v2/options',
		crossDomain: true,
		dataType: 'json',
		success: function (phone) {
		 	document.getElementById("phone-number").innerHTML = phone.acf.default_phone_number;
		
		}
        
        
	});
    

    function myFunction() {
        var greeting;
        var time = new Date().getHours();
        if (time > 8) {
            $("#hours").show();
        } else if (time > 16) {
            $("#hours").hide();
        } else {
            $("#hours").hide();
        }
        document.getElementById("hours").innerHTML = greeting;
    }
       
});


