var btns = document.querySelectorAll(".nb");
for(var i=0; i<5;i++)
{
	btns[i].addEventListener("click",function()
	{
	
			if(i==0)
			window.location("home.html");
			if(i==1)
			window.location("aboutus.html");
			if(i==2)
			window.location("contactus.html");
			if(i==3)
			window.location("news.html");
			if(i==4)
			window.location("login.html");
	})
}
