//Program to display the number of days till Christmas and number of days till my next birthday.
exports.assign3d = function() 
{  
    today=new Date();
    var cmas=new Date(today.getFullYear(), 11, 25);
    if (today.getMonth()==11 && today.getDate()>25) 
    {
        cmas.setFullYear(cmas.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
    " days left until Christmas!");
    
    var myBirthday, today, bday, diff, days;
    myBirthday = [8,8]; // 8th of August
    today = new Date();
    bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
    if( today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear()+1);
    }
    diff = bday.getTime()-today.getTime();
    days = Math.floor(diff/(1000*60*60*24));
    console.log(days+" days until Kirans' birthday!");    
}