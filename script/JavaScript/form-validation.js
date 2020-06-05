/********************Contact us form validation***********************/
function send_us_validation()
{
	var email= document.forms["contact-us-form"]["email"].value;
	var message= document.forms["contact-us-form"]["message"].value;
	if(email=="" && message=="")
	{
		/**Customize the imput error email **/
		document.getElementById("email").style.borderBottom="3px solid #ed1212";
		/****/
		/**Customize the imput error message **/
		document.getElementById("message").style.borderBottom="3px solid #ed1212";
		/****/

		return false;

		/***for all input in same time***/
	}
	if(email=="")
	{
		/**Customize the imput error email **/
		document.getElementById("email").style.borderBottom="3px solid #ed1212";
		/****/
		return false;
	}
	if(message=="")
	{
		/**Customize the imput error message **/
		document.getElementById("message").style.borderBottom="3px solid #ed1212";
		/****/
		return false;
	}
}


/******restore the form to default style********/
function restrore_email()
{
	document.getElementById("email").style.borderBottom="3px solid #424242";
}
function restrore_message()
{
	document.getElementById("message").style.borderBottom="3px solid #424242";
}
/******End of restoration**********************/