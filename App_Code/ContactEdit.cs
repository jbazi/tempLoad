using System;
using System.Collections.Generic;
using System.Web;

/// <summary>
/// Summary description for ContactEdit
/// </summary>
public class ContactEdit
{
    public ContactEdit()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public DateTime showCurrentDate(){
        //DateTime dt = new DateTime.Today.ToString("MMM ddd d HH:mm yyyy");
        DateTime localDate = DateTime.Now;
        localDate.ToString("MMM ddd d HH:mm yyyy");
        return localDate;
    }
}
