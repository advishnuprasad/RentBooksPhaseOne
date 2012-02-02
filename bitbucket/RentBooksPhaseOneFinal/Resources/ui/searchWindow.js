function searchWindow()
{	
	Ti.App.visited=false;
	var resultPage=require('ui/resultPage');
	var searchWindow=Titanium.UI.createView(
		{
			title:'Search Window',
   			backgroundColor:'#000',
    		//exitOnClose:true,
    		width:'auto'
		}
	);
	var top=0
	var labelTitle=Titanium.UI.createLabel(
	{
		text:'Enter the book title to search',
		color:'white',
		top:top+15,		
		font:{fontSize:15,fontFamily:'arial'},
		textAlign:'center',
		widht:'auto',
		height:'auto'
	}
	);
	var bookTitle=Titanium.UI.createTextField({
    color:'#336699',
    hintText:'Enter title here',    
    height:60,
    top:top+45,
    width:'75%',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    focusable:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
	});
	top=bookTitle.top+bookTitle.height;
	var enterButton=Titanium.UI.createButton(
	{
		title :'Search',
		top:top+15,
		width:100,	
		textAlign:'center',
	});
	top=enterButton.top+enterButton.height;
	var table = Ti.UI.createTableView({
    	top:top+40
    });
	searchWindow.add(labelTitle);
	searchWindow.add(bookTitle);
	searchWindow.add(enterButton);
	enterButton.addEventListener('click',function()
	{
		//alert(Ti.App.loginflag)
		
		new resultPage(bookTitle.value,table);
		
	//	bookTitle.setValue("");
			
		/*var resultView=new resultPage(bookTitle.value,table);
		searchWindow.add(resultView);*/
	});
	return searchWindow;
}
module.exports = searchWindow;