// $(function() {
// 	console.log("room channellll coy")
// 	$('[data-channel-subscribe="room"]').each(function(index, element) {
// 		debugger
// 		var $element = $(element),
// 				room_id = $element.data('room-id')
// 				user_id = $element.data('user-id')

// 		$element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000)        
		
// 		App.cable.subscriptions.create(
// 			{
// 				channel: "RoomChannel",
// 				room: room_id
// 			},
// 			{
// 				received: function(data) {
// 					$(".kakak-" + data.user_id + "").append("<span> HAI" + user_id + "</span>")
// 					$(".kakak-" + user_id + "").append("<span> HAI" + data.user_id + "</span>")
// 					$(".warna-" + data.user_id + "").attr("style","color: red;")
// 					$(".warna-" + user_id + "").attr("style","color: blue;")
// 					debugger
// 					// $(".testing-" + user_id).css("color", x)

// 					messageTemplate = $("[data-role='message-template-" + user_id + "'");
					
// 					var content = messageTemplate.children().clone(true, true);
// 					content.find("[data-role='message-box-" + data.user_id + "']").attr('style', 'color: ' + 'blue')

// 					if (user_id == data.user_id) {
// 						var x = "#FFF"
// 						// content.find(".testing-" + user_id + "").text(data.message)
// 						// content.find(".testing-" + user_id + "").attr('style', 'color: ' + x)

// 						content.find("[data-role='message-satu-" + user_id + "']").text(data.message)
// 						content.find("[data-role='user-avatar-" + user_id + "']").attr({'src': data.user_avatar_url, 'width': '80%'});
// 						content.find("[data-role='message-text-" + user_id + "']").text(data.message);
// 						content.find("[data-role='message-date-" + user_id + "']").text(data.updated_at);

// 						// content.find("[data-role='message-box-" + user_id + "']").attr('style', 'color: ' + 'blue')


// 						// $(".warna-" + data.user_id + "").attr("style","color: red;")
// 					} else {

// 						var x = "#000"
// 						// content.find(".testing-" + user_id + "").text(data.message)
// 						// content.find(".testing-" + user_id + "").attr('style', 'color: ' + x)

// 						content.find("[data-role='message-satu-" + user_id + "']").text(data.message)
// 						content.find("[data-role='user-avatar-" + user_id + "']").attr({'src': data.user_avatar_url, 'width': '80%'});
// 						content.find("[data-role='message-text-" + user_id + "']").text(data.message);
// 						content.find("[data-role='message-date-" + user_id + "']").text(data.updated_at);

// 						// $(".warna-" + data.user_id + "").attr("style","color: blue;")
// 						// content.find("[data-role='message-box-" + user_id + "']").attr('style', 'color: ' + 'red')

// 					}
// 					// content.find("[data-role='message-satu-" + data.user_id + "']").text(data.message)
					


// 					// content.find("[data-role='user-avatar-" + data.user_id + "']").attr({'src': data.user_avatar_url, 'width': '80%'});
// 					// content.find("[data-role='message-text-" + data.user_id + "']").text(data.message);
// 					// content.find("[data-role='message-date-" + data.user_id + "']").text(data.updated_at);

// 					$element.append(content);
// 					$element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000);
// 				}
// 			}
// 		);
// 	});
// });