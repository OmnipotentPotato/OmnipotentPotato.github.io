function aboutClick() 
{
	//var about = document.getElementById('about');
	//var links = document.getElementById('links');
	
	document.getElementById("text").innerHTML = "filler about me LOL.";
	
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}

function linksClick() 
{
	
	document.getElementById("text").innerHTML = "<a href='https://twitter.com/omnigamedev' target='_blank'>Twitter</a><br><a href='https://www.youtube.com/channel/UCSwOuPjaMp3kZuqSb45pBww' target='_blank'>Youtube</a><br><a href='http://www.twitch.tv/omnipotentpotato/profile' target='_blank'>Twitch</a><br><a href='http://gamejolt.com/profile/omnipotent-potato/292626' target='_blank'>Gamejolt</a><br>";
		
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}


function gamesClick() 
{
	var games = "<img src='images/rrthumb.png' alt='rr' style='width:200px;height:200px;'>";
	document.getElementById("text").innerHTML = games;
	
	linetoworkwith = document.getElementById("text");
	
	linetoworkwith.classList.remove("fadeInDown");
	linetoworkwith.offsetWidth = linetoworkwith.offsetWidth;
	linetoworkwith.classList.add("fadeInDown");
}









var titlevar = Math.floor((Math.random() * 7) + 1);

if (titlevar == 1)
	{
		document.title = "Omni Game Design"
	}

if (titlevar == 2)
	{
		document.title = "xX::OmniGameDesign::Xx"
	}

if (titlevar == 3)
	{
		document.title = "OmniLameDesign"
	}

if (titlevar == 4)
	{
		document.title = "()mn! g4m3 dE516n"
	}
if (titlevar == 5)
	{
		document.title = "OmniNameDesign"
	}
if (titlevar == 6)
	{
		document.title = "/* OmniGameDesign */"
	}
if (titlevar == 7)
	{
		document.title = "<-- I'm with stupid"
	}