$(function() {
	console.log("room hungkul coy #{@user.id}")
	$(".new_room_message").on('ajax:success', function(a, b,c ) {
		$(this).find('input[type="text"]').val('');
	});
});