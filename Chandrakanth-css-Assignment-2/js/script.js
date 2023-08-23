document.addEventListener("click", function() 
{
	var datepicker = document.getElementById("datepicker");
    var displayDate = document.getElementById("displayDate");
    datepicker.addEventListener("input", function() 
	{
      var dateselected = datepicker.value;
      displayDate.textContent = dateselected;
    });
  });

