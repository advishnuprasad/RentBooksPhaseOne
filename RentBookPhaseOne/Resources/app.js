/**
 * @author Vishnu
   @Date 16-1-2012
 */
// this sets the ba	ckground color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//Ti.App.gloabalVariable=1;
//Titanium.UI.setBackgroundImage('justbooks.jpeg');

var top=0;
var titleTag=Titanium.UI.createLabel(
	{
		text:"Welcome to JustBooksclc Mobile Portal",
		color:'red',
		top:top+15,
		backgroundColor:'white',
		font:{fontSize:15,fontFamily:'arial'},
		textAlign:'center'
		
	}
);
top=titleTag.height+titleTag.top;
var view = Titanium.UI.createView(
	{ 
		borderRadius:10, 
		backgroundColor:'white',
		top:top+50, 
		width:'100%', 
		height:200 });
var myWindow = Titanium.UI.createWindow({  
    title:'Home Page',
    backgroundColor:'#fff',
    exitOnClose:true
});
var image = Titanium.UI.createImageView(
	{
		url:'images.PNG',
		width:200,
		height:'auto'
	});
	
top=view.height+view.top;	
var enterButton=Titanium.UI.createButton(
	{
		title :'Enter',
		top:top+15,
		width:100
		
	}
);

myWindow.add(titleTag); 
view.add(image);
myWindow.add(view);
myWindow.add(enterButton);
myWindow.open({modal:true});
enterButton.addEventListener('click',function()
{

	Ti.include('searchBook.js');
	searchLayout();
});

myWindow.addEventListener('blur',function()
{
	myWindow.close();
});


