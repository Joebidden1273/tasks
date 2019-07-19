// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
	/*Message Alert dialog*/

    function show_alert1(){

      alert("Web Page Not Available,!......Please Try Again Later,  Thank You!")
    }


    /*Job Application Details*/

	function show_confirm1()
	{
		var x=window.confirm("Want to Apply for a job?...click OK to Continue")
		if (x)
			window.alert("We've received your details. Interview Date will be communicated to you later. Thank You For Choosing Info-Tech, ")
		else
			window.alert("Sorry! Try Again Later")

	}

