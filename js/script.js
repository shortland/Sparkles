$(document).ready(function()
{

	$('#ps').click(function(){
		var current = localStorage.getItem('ps');
		if(current == 'yes')
		{
			localStorage.setItem('ps', 'no');
			$('#ps').html('START MOVING');
		}
		else
		{
			localStorage.setItem('ps', 'yes');
			$('#ps').html('STOP MOVING');
			animate();
		}
	});

	var fcn_top = function()
	{
		var window_height = parseInt($(window).height());
		var random_top = Math.floor(Math.random() * window_height) + 1;
		return random_top;
	}

	var fcn_left = function()
	{
		var window_width = parseInt($(window).width());
		var random_left = Math.floor(Math.random() * window_width) + 1;
		return random_left;
	}

	write_sparkles();

	function write_sparkles()
	{
		$('#sparkle_writer').append("<div id='sparkle_1' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_2' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_3' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_4' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_5' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_6' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_7' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_8' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_9' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_10' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_11' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_12' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_13' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_14' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_15' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_16' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_17' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_18' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_19' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_20' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_21' class='sparkles'></div>");
		$('#sparkle_writer').append("<div id='sparkle_22' class='sparkles'></div>");
		draw_sparkles();
	}

	function draw_sparkles()
	{
		$('#sparkle_1').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_2').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_3').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_4').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_5').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_6').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_7').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_8').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_9').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_10').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_11').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_12').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_13').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_14').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_15').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_16').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_17').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_18').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_19').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_20').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_21').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		$('#sparkle_22').css({'position':'fixed','top':fcn_top(), 'left':fcn_left(), 'z-index':'9'});
		localStorage.setItem('ps', 'yes');
		animate();
	}

	function animate()
	{
		var cont = localStorage.getItem('ps');
		if(cont == "yes")
		{
			$('#sparkle_1').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_2').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_3').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_4').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_5').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_6').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_7').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_8').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_9').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_10').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_11').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_12').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_13').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_14').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_15').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_16').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_17').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_18').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_19').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_20').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_21').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			$('#sparkle_22').animate({'top':fcn_top(), 'left':fcn_left()}, 'slow');
			setTimeout(animate, 500);
		}
		else
		{
			// no
		}
	}
});