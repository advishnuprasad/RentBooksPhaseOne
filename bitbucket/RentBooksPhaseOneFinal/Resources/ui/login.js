/**
 * @author Vishnu 
 */
function login()
{
	var loginWindow = Titanium.UI.createWindow({  
        			title:'User Authentication Demo',  
        			backgroundColor:'white'
    				});        
    var username = Titanium.UI.createTextField({  
        color:'#336699',  
        top:'10%',  
      //  left:'10%',  
        width:200,  
        height:'auto',  
        hintText:'Email ID',  
        keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  
    loginWindow.add(username);  
      
    var password = Titanium.UI.createTextField({  
        color:'#336699',  
        top:'20%',  
        //left:'10%',  
        width:200,  
        height:'auto',  
        hintText:'Password',  
        passwordMask:true,  
        keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
    });  
    loginWindow.add(password);  
      
    var loginBtn = Titanium.UI.createButton({
    	  
        title:'Login',  
        top:'35%',  
        width:90,  
        height:'auto',  
        //borderRadius:1,  
        font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}  
    });  
    loginWindow.add(loginBtn);      
    loginWindow.open();
    //var loginReq = Titanium.Network.createHTTPClient();        
   var loginReq = Titanium.Network.createHTTPClient(); 
       
	loginBtn.addEventListener('click',function(e)  
	{  	
		if (username.value != '' && password.value != '')  
    	{    
    				
    		loginReq.open("POST","http://prasad.p4o.net/authenticate.php");
    		var params = {  
            username: username.value.toString().trim(),  
            password: password.value.toString() 
        	};
        	//alert(params.password);	  
        	loginReq.send(params);  	
		}  
    	else  
    	{  
	        alert("Username/Password are required");  
    	}  
	});  
	loginReq.onload = function()  
    {  
        var json = this.responseText;  
        var response = JSON.parse(json);  
        if (response.logged == true)  
    	{  
        	username.blur();  
        	password.blur();          
        	Ti.App.fireEvent('grantLogin', 
        	{  
        		//Ti.App.loginflag=true;
            	//name:response.name,
            	//memberid:response.memberid
        	});  
            loginWindow.close();  
    	}   
        else  
        {  
            alert(response.message);  
        }  
    };      
}
module.exports=login





