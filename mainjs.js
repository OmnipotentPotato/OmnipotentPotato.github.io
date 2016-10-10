function resizeIframe(obj)
{
	obj.style.height = 0;
	obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
	obj.style.width = 0;
	obj.style.width = obj.contentWindow.document.body.scrollWidth + 'px';
}

function aboutClick() 
{
	//var about = document.getElementById('about');
	//var links = document.getElementById('links');
	
	document.getElementById("text").innerHTML = "<img src='images/circlelogo.png' alt='melol' style='float:left'> hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. hi i make games and i don't like writing about myself so i'm going to copy and paste this so my website appears to have content. ";
	
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}

function gamesClick() 
{
	var games = "<iframe src='gamespage.html' scrolling='no' width='830' frameborder='0' class='gamelistframe' onload='resizeIframe(this);'></iframe>";
	document.getElementById("text").innerHTML = games;
	
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}