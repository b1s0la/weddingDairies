
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + " : " + hours + " : "
    + minutes + " : " + seconds + " ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



//When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

 function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


        

var app = {
 imageHandler:function() {
        $("#upload").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    }//end of imageHandler

}





// var app = {
// 	 storyHandler:function (){
// 		var $container = $('section.main');
//         var $addStory = find('#post');



//          var storyParameters = {

//         updateStory: function() {
//  		var output = "";
//  		for(var i = 0; i < stories.users.length; i++){
//         output+= 
// 		'<p> <i class="fa fa-comments"></i>  &nbsp<b>'+ stories.users[i].story +'</p></b>'
// 		}
// 		  $(".post").html(output);
// 		},
// 		 saveStory: function() {
//                 //method that saves the story in local storage
//                 localStorage.setItem("storyStg", JSON.stringify(stories));
//         },
//          createStory: function() {
//                 var $input = $("#input").clone().val();//gets the text put in the text area
//  				stories.users.unshift({
//  					 story: $input,
//  				}/
//  				});
// 				stories.allPosts++;
//   				}

//        			 };//end story parameter
//        			 $.extend(stories, storyParameters);   //method
//        			 //console.log(stories);
//         		//calls create story when clicked
//         		$addStory.on('click', function(e){
//             		//console.log($(this));//consoles the button when clicked
//             		//console.log(e)
//             		e.stopPropagation();
//             		stories.createStory();
//             		stories.saveStory();
//             		stories.updateStory();
//         		});
//         		stories.updateStory();
//        			 stories.saveStory();
//     		},//end of storyHandler
// }



