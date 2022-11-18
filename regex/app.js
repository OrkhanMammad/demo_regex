





function confirm() {
    let UserName = document.querySelector('.UserName').value;
    let PassWord = document.querySelector('.PassWord').value;
    let Mail = document.querySelector('.MailAcc').value;

    if (!/^[a-z][a-z]{7,}$/.test(PassWord)) {
        alert("format is wrong");
    }
    else{
        alert("true");
    }












    /* if(!/^[A-Z][a-z]{5,}$/.test(UserName)){
        document.querySelector('.UserName').style.border ="solid 2px red"
        document.getElementById('txtusername').innerHTML="The format of E-Mail is wrong..."
    }
    else{
        document.querySelector('.UserName').style.border ="solid 2px green";
        document.getElementById('txtusername').innerHTML="";
        alert("Username has been approved");
    }
    */

    /* if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Mail))
     {
         document.querySelector('.MailAcc').style.border ="solid 2px red"
         document.getElementById('txtmail').innerHTML="The format of E-Mail is wrong..."
     }
     else{
         document.querySelector('.MailAcc').style.border ="solid 2px green";
         document.getElementById('txtmail').innerHTML="";
         alert("E-Mail has been approved")
         
     }
     
     
     */
}
