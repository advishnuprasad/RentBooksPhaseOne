/*
 * @author:vishnu
 */
function resultPage(searchString,table)
{	
	//lert('called');
	var tableData = [];
    url="https://www.googleapis.com/books/v1/volumes?q="+searchString +"&maxResults=5";
    var httpClient = Titanium.Network.createHTTPClient();
    httpClient.onload =function (e) 
    {    	
    	var myJsonFile=JSON.parse(this.responseText);
    	var length=myJsonFile.items.length;
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
        	bookId=Titanium.UI.createLabel(
        	{
        			text:bookItems.id,
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
			row.bookId= bookItems.id;
			bookTitle.addEventListener('click',function()
			{
				alert('Selected Book is ');
			})
			row.addEventListener('click',function(e)
			{				
				
				alert('Selected Book is '+e.row.bookTitle);
				
			})
		}
    	table.setData(tableData);
    	//searchWindow.add(table);
    	//return table;  
    };
    httpClient.open("GET", url);
    httpClient.send(); 
    return table;
    //return 0;   			
}
module.exports = resultPage;