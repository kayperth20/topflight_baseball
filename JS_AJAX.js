// var target_href = "topflight_" + window.location.hash.slice(1) + ".html"
var target_href = window.location.hash.slice(1) || "topflight_index.html"

// to make back button work, investigate "push state"
// onBackButtonClicked... 		swapPages("", target_href)


$(document).ready(function() {
		
		//Attach a handler to the click event
		//of the link on the page:
		
		function swapPages(event, target_href) {
			
			// if (!$(this).attr('id') == "load_me")) {
			// 	return false;
			// }

			var target_href = target_href || ($(this).attr('href'));//figure out where anchor goes
		
			$('#container').load(target_href + ' #container', function(){//swap out existing container content with container content from destination anchor
				$(this).find('a#load_me').click(swapPages)
			})
			
			// $('#container').load(target_href + ' #container', function(){//swap out existing container content with container content from destination anchor
			// 	$(this).find('aside a').click(swapPages)
			// })

			// $('#container').load(target_href + ' #container', function(){//swap out existing container content with container content from destination anchor
			// 	$(this).find('article a').click(swapPages)
			// })

			window.location.hash = target_href //$(this).val();
	              //update URL
			return false;
		}

		// this initializes what page is loaded on refresh
		swapPages("", target_href)

		$('nav a, a#load_me').click(swapPages);
		// $('aside a').click(swapPages);
		// $('article a').click(swapPages);
});