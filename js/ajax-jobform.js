$(function() {

	// Get the form.
	var form = $('#jobForm');

	// Get the messages div.
	var formNotifications = $('#jobform-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formNotifications div has the 'success' class.
			$(formNotifications).removeClass('errorMsg');
			$(formNotifications).addClass('successMsg');

			// Set the message text.
			$(formNotifications).text(response);

			// Clear the form.
			$('#formFirstName').val('');
			$('#formLastName').val('');
			$('#formPosition').val('');
			$('#formMail').val('');
			$('#formPhone').val('');
			$('#formPortfolio').val('');
			$('#formAge').val('');
			$('#formCity').val('');
			$('#formStartdate').val('');
			$('#formApplication').val('');
		})
		.fail(function(data) {
			// Make sure that the formNotifications div has the 'error' class.
			$(formNotifications).removeClass('successMsg');
			$(formNotifications).addClass('errorMsg');

			// Set the message text.
			if (data.responseText !== '') {
				$(formNotifications).text(data.responseText);
			} else {
				$(formNotifications).text('Oops! An error occured and your application could not be sent.');
			}
		});

	});

});
