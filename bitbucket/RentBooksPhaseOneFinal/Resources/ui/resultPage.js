/*
 * @author:vishnu
 */
function resultPage(searchString,table)
{	
	//var logflag=0;
	win=Ti.UI.currentWindow;
	var login=require('ui/login');
	//lert('called');
	var tableData = [];
	//var author="";
    url="https://www.googleapis.com/books/v1/volumes?q="+searchString +"&maxResults=5";
    var httpClient = Titanium.Network.createHTTPClient();
    httpClient.onload =function (e) 
    {    	
    	var myJsonFile=JSON.parse(this.responseText);
    	var length=myJsonFile.items.length;
    	if(length>0)
    	{
    	
    	for(i=0;i<length;i++)
    	{    		
    		bookItems=myJsonFile.items[i];
    		var row = Titanium.UI.createTableViewRow(
        	{
        		height:75,        			        			
        	});
        	logo =  Titanium.UI.createImageView(
        	{
					url:'images.PNG',
 					width:40,
					height:40,
					left:4,
					top:20
			});			
        	var left=logo.left+logo.width;
        	bookTitle=Titanium.UI.createLabel(
        	{
        			 text:bookItems.volumeInfo.title,
        			 font:{fontSize:'13dp',fontWeight:'bold'},
        			 height:'auto',
        			 left:left+20,        		     
        			 color:'white',
        			 top:20      		        				        			
        	});
        	no_of_authors=bookItems.volumeInfo.authors.length;
           // alert(no_of_authors);
            author="";
        	if(no_of_authors>1)
        	{
        		author="";
        		//for(i=0;i<no_of_authors;i++)
        		{
        			author=author+bookItems.volumeInfo.authors[0]+" "+ bookItems.volumeInfo.authors[1];        		
        		}
        		//alert('more authors')
        	    //alert(checkAuthorsLength(bookItems,no_of_authors));        	   
        	   //alert(author);
        	}
        	else
        	{
        		author=bookItems.volumeInfo.authors[0];
        	}
        	bookId=Titanium.UI.createLabel(
        	{
        		
        			text:author,
        			font:{fontSize:'10dp',fontWeight:'normal'},
        			left:left+20,
        			top:50, 
        			color:'white'
        	});
        	row.add(logo);
        	row.add(bookTitle);
        	row.add(bookId);
			tableData.push(row);
			row.bookTitle = bookItems.volumeInfo.title;
			row.bookAuthor= author	;
			row.bookDesc=bookItems.volumeInfo.description;
			/*bookTitle.addEventListener('click',function()
			{
				alert('Selected Book is ');
			})*/
			row.addEventListener('click',function(e)
			{	
					//Ti.App.visited=true;						
				displayDetails(e.row.bookTitle,e.row.bookAuthor,e.row.bookDesc);
				if(Ti.App.visited)
    			{
    					for(i1=0;i1<length;i1++)
    				    table.deleteRow(i1);
    			}
				//win.bookTitle.setValue("");
				//table.
			//	alert('Selected Book is '+e.row.bookTitle);
				
			})
		}
		}
    	table.setData(tableData);
    	//searchWindow.add(table);
    	//return table;  
    };
    httpClient.open("GET", url);
    httpClient.send(); 
    win.add(table);
    //return 0;   			
}
function checkAuthorsLegth(bookItems,no_of_authors)
{
    	        author="";
        		for(i=0;i<no_of_authors;i++)
        		{
        			author=author+ "Author :" + bookItems.volumeInfo.authors[i]+" ";        		
        		}
        		return author;        	        	        	
}
var flag=0;
function displayDetails(bookItems,bookAuthor,description)
{
				var top=0;
				var login=require('ui/login');
				var displayWindow=Ti.UI.createWindow(
					{
						backgroundColor:'#BBBCCC',
						Title:'Result',
						tabBarHidden:'false'
					})
			    var view = Titanium.UI.createView(
				    { 
					borderRadius:5,					
					backgroundColor:'#336699',
					borderColor:'red',
					top:top+'1%',
					height:'70%',
					left:'1%',					
					right:'1%'					
				});																				
				var image = Titanium.UI.createImageView(
				{
					url:'cover.jpg',
					left :'.5%',
					top : top+'.5%',
					width:'40%',
					height:'40%'
					//height:'auto'
				});
				var bookTitle=Ti.UI.createLabel(				
					{
						text:"Title :\n"+ bookItems+"\n" + "Author : \n" +bookAuthor ,
						//text:"Title :\n"+ bookItems,
						font:{fontSize:12,fontWeight:'bold', fontFamily:'Helvetica'},
						color:'black',
						top:top+'1%',
						left:'41%',
						height:'auto'
					})
					var bookDesc=Ti.UI.createLabel(				
					{
						text:"Description : \n"+description,
							//text:"Title :\n"+ bookItems,
						font:{fontSize:12,fontWeight:'bold', fontFamily:'Helvetica'},
						color:'black',
						top:top+'1%',
						left:'1%',
						height:'auto'
					})
				var scrollView = Titanium.UI.createScrollView({
    				//contentWidth:'auto',
    				contentHeight:'auto',
    				//top:50,
    				top:'41%',
    				showVerticalScrollIndicator:true,
    				showHorizontalScrollIndicator:true,
    				//layout:'vertical',
    				backgroundColor:'white',
   					backgroundGradient:{
        									type:'linear',
        									colors:['#f0f5fb','#007abf']
    										}
					});
 					scrollView.add(bookDesc);
 					
				//top=bookTitle.top+bookTitle.height;
				var bookAuthorlabel=Ti.UI.createLabel(				
				{
						text:"Author : \n"+bookAuthor,
						font:{fontSize:12,fontWeight:'bold'},
						color:'black',
						top:'auto',	
						left:'41%'
					})
				var searchButton=Titanium.UI.createButton(
				{
					title :'Search Again',
					top:'80%',
					left:'10%',
					width:'auto'		
				});
				var rentButton=Titanium.UI.createButton(
				{
					title:'Rent this book Now',
					top:'80%',
					left:'50%',		
					//right:'15%',
					width:'auto'		
				}
				);
				var loginButton=Titanium.UI.createButton(
				{
					title :'Login to Rent',
					top:'80%',					
					left:'50%',
					width:'auto'		
				});
				if(!Ti.App.loginflag)
				{
				
				
				displayWindow.add(loginButton);
				}
				else
					displayWindow.add(rentButton);
			//	scrollView.add(view);		
				view.add(image);
				view.add(bookTitle);
				view.add(scrollView);
				//view.add(bookAuthorlabel);
				displayWindow.add(view);	
				//displayWindow.add(image);			
				//displayWindow.add(bookTitle);
				displayWindow.add(searchButton);
					
				
				
				//else
			
				//	displayWindow.open();
				
				searchButton.addEventListener('click',function()
				{
					Ti.App.visited=true;	
				//	alert(length);
					displayWindow.hide();
					
				})
				loginButton.addEventListener('click',function()
				{			
					if(!Ti.App.loginflag)
					var newwindow=new login();									
					//displayWindow.hide();																							  					    							    
    				//var main = Titanium.UI.createWindow();  
    				Ti.App.addEventListener('grantLogin', function(event)  
    					{  
    						//alert('event caught');
    						loginButton.setVisible(false);	
    						displayWindow.add(rentButton);			
    						Ti.App.loginflag=true;
    						var toast = Titanium.UI.createNotification({
    							duration: 2000,
    							message: "Successfully logged in"
								});
								toast.show();
        		
    						//loginButton.title="Rent Book";
    						 	
    						//displayWindow.remove(loginButton);
    										//alert('event fired');
        				/*	main.title      = 'Welcome ' + event.name;  
        					main.url        = 'main.js';  
        					main.name       = event.name;  
        					main.memberid   = event.memberid;  
        					main.open();*/                
    					}); 
				});
				rentButton.addEventListener('click',function()
				{
					alert('Rented this book successfully');	
									
					displayWindow.hide();					
				})
				displayWindow.open();
}
module.exports = resultPage;