function backdrop(x){
if(x!=0){document.getElementById('backdrop').style.display='block';
}else{document.getElementById('backdrop').style.display='none';}}

$(document).ready(function () {    
    $('.goldTop').qtip({
        content: {
            text: false // Use each elements title attribute
        },
        position: {
            corner: {
                tooltip: 'bottomMiddle',
                // Use the corner...
                target: 'topMiddle' // ...and opposite corner
            }
        },
        style: {
            tip: true,
            name: 'cream',
            'font-size' : '16px'
       }
    });
    $('.goldBottom').qtip({
        content: {
            text: false // Use each elements title attribute
        },
        position: {
            corner: {
                tooltip: 'topMiddle',
                // Use the corner...
                target: 'bottomMiddle' // ...and opposite corner
            }
        },
        style: {
            tip: true,
            name: 'cream',
            'font-size' : '16px'
        }
    });
        $('.lightTop').qtip({
        content: {
            text: false // Use each elements title attribute
        },
        position: {
            corner: {
                tooltip: 'bottomMiddle',
                // Use the corner...
                target: 'topMiddle' // ...and opposite corner
            }
        },
        style: {
            tip: true,
            name: 'light',
            'font-size' : '16px'
        }
    });
    $('.ibm').qtip({
        content: {
            text: false // Use each elements title attribute
        },
        position: {
            corner: {
                tooltip: 'bottomMiddle',
                // Use the corner...
                target: 'topMiddle' // ...and opposite corner
            }
        },
        style: {
            tip: true,
            name: 'dark',
            'font-size' : '16px'
        }
    });

    $('.tooltipQ').qtip({
        content: {
            text: true // Use each elements title attribute
        },
        position: {
            corner: {
                tooltip: 'bottomMiddle',
                // Use the corner...
                target: 'topMiddle' // ...and opposite corner
            }
        },
        style: {
            tip: true,
            name: 'dark',
            'font-size' : '16px'
        }
    });

    
    $('#showit').qtip({
        content: {
            text: false,
            // Use each elements title attribute
            url: 'http://2011.cusec.net/images/map.html'
        },
        position: {
            corner: {
                tooltip: 'leftBottom',
                // Use the corner...
                target: 'rightTop' // ...and opposite corner
            }
        },
        style: {
            tip: true,
            name: 'light'
        }

    });

	$("#click-carleton").click(function () {
    	$("#schools").hide();
    	$("#carleton").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-concordia").click(function () {
    	$("#schools").hide();
    	$("#concordia").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-ets").click(function () {
    	$("#schools").hide();
    	$("#ets").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-mcmaster").click(function () {
    	$("#schools").hide();
    	$("#mcmaster").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-moncton").click(function () {
    	$("#schools").hide();
    	$("#moncton").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-ottawa").click(function () {
    	$("#schools").hide();
    	$("#ottawa").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-toronto").click(function () {
    	$("#schools").hide();
    	$("#toronto").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-trent").click(function () {
    	$("#schools").hide();
    	$("#trent").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-mcgill").click(function () {
    	$("#schools").hide();
    	$("#mcgill").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-waterloo").click(function () {
    	$("#schools").hide();
    	$("#waterloo").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-queens").click(function () {
    	$("#schools").hide();
    	$("#queens").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });
    $("#click-back").click(function () {
    	$(".school").hide();
    	$("#schools").fadeIn("fast");
    });
    
     $("#click-sherbrooke").click(function () {
    	$("#schools").hide();
    	$("#sherbrooke").fadeIn("fast");
    	$("#click-back").fadeIn("fast");
    });

    
    var hashVal = window.location.hash.split("#")[1];
    if(hashVal == 'myhd') {
        $("#backdrop").css("display", "block");
    }
});



$.getJSON("http://twitter.com/statuses/user_timeline.json?screen_name=cusec&count=5&callback=?", function (data) {
    $.each(data, function (i, item) {
        ct = item.text;
        ct = ct.replace(/http:\/\/\S+/g, '<a href="$&" target="_blank">$&</a>');
        ct = ct.replace(/\s(@)(\w+)/g, '<span id="at">@<a href="http://twitter.com/$2" target="_blank">$2</a></span>');
        ct = ct.replace(/\s(#)(\w+)/g, ' #<a href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>');
        $("#tweets").append('<div>' + ct + "</div>");
    });
});