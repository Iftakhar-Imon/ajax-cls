$(document).ready(function(){
	// body...
	$("#btn").click(function(){
       var city_name=$("#cityname").val();
       getvalue(city_name);
	});

	function getvalue(city){
		// alert(city);
		$.ajax({
			url: 'https://api.apixu.com/v1/current.json?key=fd48aae7884d4ddcbf192605171202&q='+city,
			dataType: 'json',
			success: function(data){
				// console.log(data);
                $("#country").text(data.location.country);
				$("#city").text(data.location.name);
				$("#temp").text(data.current.temp_c);
				$("#condition").text(data.current.condition.text);
			
             var str = data.current.condition.icon;
				str = str.replace("//", "https://");
				$("#icon").attr("src", str);	

			}
		});
	}
  



});