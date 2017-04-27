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
    
    $.ajax({
		type: 'GET',
		url: 'https://www.algaecal.com/wp-json/acf/v2/options',
		crossDomain: true,
		dataType: 'json',
		success: function (hours) {
		 	var hour = new Date().getHours(); 
                var greeting;
                    if (hour > 18) {
                        greeting = "Good day";
                    } else {
                    greeting = "Good evening";
                }
            document.getElementById("hours").innerHTML = greeting;
		
		}
        
        
	});

       
});


