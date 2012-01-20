 
	//Window
	activity = Ti.Android.currentActivity;
	var searchWindow=Titanium.UI.createWindow(
		{
			title:'Search Window',
   			backgroundColor:'#000',
    		exitOnClose:true,
    		width:'auto'
		}
	);
	
	activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    var menuItem = menu.add({ title: "Go Back" });
    var menuItem1=menu.add({title:"Login"});
    //menuItem.setIcon("item1.png");
    menuItem.addEventListener("click", function(e) {
    	searchWindow.close();
      	myWindow.open();  
    	});
	};	
	var top=0;
	var labelTitle=Titanium.UI.createLabel(
	{
		text:'Type and Enter to search',
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
	//left:center,
    height:60,
    top:top+45,
    width:'75%',
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    focusable:true
	});
	searchWindow.open({
		//modal:true
	});
	
	top=bookTitle.top+bookTitle.height;
	//Search Button
	var searchButton=Titanium.UI.createButton(
	{
		title:'Search',
		top: top+15,
   		width: 100,
   		height: 50
	}
	);
	top=searchButton.top+searchButton.height;	
	var visited=0;
function searchLayout()
{						
	//add all to the window				
	searchWindow.add(labelTitle);
	searchWindow.add(bookTitle);
	searchWindow.add(searchButton);
	bookTitle.addEventListener('click',function()
	{
		check(bookTitle.value);
	});
	
	searchButton.addEventListener('click',function()
	{
		
		check(bookTitle.value);
	});
}
var table = Ti.UI.createTableView({
    	top:top+10
    });
    var i;
function check(searchString)
{
	
    var tableData = [];
    var customData=[];
    var imageURL;
 	 url="https://www.googleapis.com/books/v1/volumes?q="+searchString +"&maxResults=5";
 	 //alert(url);
	 var httpClient = Titanium.Network.createHTTPClient();
     httpClient.onload =function (e) 
     {    	
    	var myJsonFile=JSON.parse(this.responseText);
    	var length=myJsonFile.items.length;
    	if(visited==1)
    	{
    		for(i=0;i<length;i++)
    		table.deleteRow(i);
    	}
    	//alert('bfore for loop');
    	 	//alert(myJsonFile.items.length);
    	for(i=0;i<length;i++)
    	{
    		
    		bookItems=myJsonFile.items[i];
    		//imageURL=bookItems.volumeInfo.imageLinks.smallThumbnail;
    		//alert(imageURL);
    		     		//========
    		
    		//var row=Titanium.UI.createTableViewRow();
    		/*var bookImage=Titanium.UI.createImageView(
    			{
    				url:bookItems.volumeInfo.imageLinks.smallThumbnail,
    				width:32,
    				height:32,
    				left:4,
    				top:2    				
    			}
    		);
    		bookTitle=Titanium.UI.createLabel(
        		{
        			 text:bookItems.volumeInfo.title,
        			 font:{fontSize:16,fontWeight:'bold'},
        			 width:'auto',
        			 height:'auto',
        			 left:'40',        		     
        			 color:'white',        			        				        			
        		});*/
        		//row.add(bookImage);
        		//row.add(bookTitle);        		
        		//tableData.push(row);
      		/* row = Ti.UI.createTableViewRow(    		 	
      			
    		 	{
    		 		//leftImage:bookItems.volumeInfo.imageLinks.smallThumbnail,
    		 		//title:bookItems.volumeInfo.title,    		 		
            		height:'auto',
            		color:'white',
            		top:'100dp'
        		});*/
        		var row = Titanium.UI.createTableViewRow(
        			{
        			height:75,
        			//textAlign:'center'
        			
        			}
        		);
        		 logo =  Titanium.UI.createImageView({
					//url:bookItems.volumeInfo.imageLinks.smallThumbnail,
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
        			// touchEnabled:false
        				        			 
        		});
        	bookId=Titanium.UI.createLabel(
        		{
        			text:bookItems.id,
        			font:{fontSize:'10dp',fontWeight:'normal'},
        			left:left+20,
        			top:50, 
        			color:'white'
        		}
        	)
        			row.add(logo);
        			row.add(bookTitle);
        			row.add(bookId);
					tableData.push(row);
        	/*	row.add(bookTitle);
        		tableData.push(row); */
        		
        		 
        		 		
    		//alert(bookItems.volumeInfo.title);
    	}
    	table.setData(tableData);
    	searchWindow.add(table);
    	visited=1;
    		//table.remove(tableData);
    	
    };
    httpClient.open("GET", url);
    httpClient.send();
}	
searchWindow.addEventListener('blur',function()
{
	searchWindow.close();
})


/*
	//searchWindow.addEventListener('')
// parsing the xml using HTTPClient
function getXmlConnection(searchString)
{
	//alert('funtion called');
	var searchWindow=Titanium.UI.createWindow(
		{
			title:'Search Window',
   			backgroundColor:'#000',
    		exitOnClose:true,
    		width:'auto'
		}
	);
	
	var top=0;
	var labelTitle=Titanium.UI.createLabel(
	{
		text:'Search Book by Title',
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
	//left:center,
    height:50,
    top:top+45,
    width:200,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    focusable:true
	});
	top=bookTitle.top+bookTitle.height;
	//Search Button
	var searchButton=Titanium.UI.createButton(
	{
		title:'Search',
		top: top+15,
   		width: 100,
   		height: 50
	}
	);
	top=searchButton.top+searchButton.height;
	var flag=0;
	var xhr=Titanium.Network.createHTTPClient();
	xhr.onload=function()
	{
		var data=[];
		var doc=this.responseXML.documentElement;
		var elements = doc.getElementsByTagName("member");
		//alert('Connected with Xml');
		var member="";
		
		for(var i=0;i<elements.length;i++)
		{		 
		  nodeMemberName=elements.item(i).getElementsByTagName("m_name");
          valueMemberName=nodeMemberName.item(0).text;
          valueMemberName=valueMemberName.toString().toLowerCase();
          if(valueMemberName==searchString.trim())
          {
          	
          	nodeMemberId=elements.item(i).getElementsByTagName("m_id");
          	nodeMemberNo=elements.item(i).getElementsByTagName("m_no_of_books");
          	valueMemberId=nodeMemberId.item(0).text;	
           	valueMemberBooks=nodeMemberNo.item(0).text;          
          	member="\n"+valueMemberId+" " +valueMemberName+" "+valueMemberBooks;
          	alert("Found : "+ member); 
          	flag=1;
          	return;         	       
          	break;          	
          }
    	}
    	if(flag==0)
		alert('not found');
	};
	
	xhr.open('GET','http://www.prasad.p4o.net/vishnu.xml');
	xhr.send();
}

var books=new String("");
function parseGoogleBooks(response)
{
        for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        books.concat(item.volumeInfo.title);
        // in production code, item.text should have the HTML entities escaped.
        //document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
      }
      alert(books);
}
var i;
*/
