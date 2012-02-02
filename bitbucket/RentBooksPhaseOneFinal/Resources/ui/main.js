    var win = Titanium.UI.currentWindow;  
   
    var msg = Titanium.UI.createLabel({  
        text:"You have successfully logged in. Upon logging in we sent back your email address and your name. You can pass all kinds 		of 	data simply by creating objects on your window.\n\nYour email is:\n" + win.memberid + "\n\nyour name is:\n"+win.name,  
        top:10,    
        color:'black',
        backgroundColor:'white',
        width:'100%',  
        height:'auto'  
    });  
    win.add(msg);  