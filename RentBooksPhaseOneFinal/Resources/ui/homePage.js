/**
 * @author Vishnu
 */
function homePageWindow()
{
	
	var searchWindow=require('ui/searchWindow');
	var frontWindow=Ti.UI.createWindow(
	{
		backgroundColor:'white',
		exitOnClose: true
	})	
	var homeView=Titanium.UI.createView(
		{
			title:'Home Window',
   			backgroundColor:'#FFF',
    		//exitOnClose:true,
    		width:'auto'
		}
	);
	
	var top=0;
	var titleTag=Titanium.UI.createLabel(
	{
		text:"Welcome to JustBooksclc Mobile",
		color:'red',
		top:top+15,
		backgroundColor:'white',
		font:{fontSize:15,fontFamily:'arial'},
		textAlign:'center'
		
	});
	top=titleTag.height+titleTag.top;
	var view = Titanium.UI.createView(
	{ 
		borderRadius:10, 
		backgroundColor:'white',
		top:top+50, 
		width:'100%', 
		height:200 
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
	});
	
	homeView.add(titleTag);
	view.add(image);
	homeView.add(view);
	homeView.add(enterButton);
	frontWindow.add(homeView);
	enterButton.addEventListener('click',function()
	{
		var searchForm=new searchWindow();
		frontWindow.add(searchForm);
	})	
	return frontWindow;
}
module.exports = homePageWindow;