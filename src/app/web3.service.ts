import { Injectable } from '@angular/core';

import { of, Subject, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class Web3Service {


  private url = 'http://103.67.238.176:3000/api/';
  private _graphQLURL = "http://localhost:3000/alivetracking";

    constructor(public http:HttpClient) {
      
    }
   
    //for login
    loggedIn(){
      return !!localStorage.getItem('token')
    }
    loggedOut(){

    }
  public getclosedwing(data): Observable<any> {
    return this.http.post(`${this.url}getclosedcaseshod`,data);
  }
  public sendtohod(data): Observable<any> {
    return this.http.post(`${this.url}sendtohod`,data);
  }


  public sendToDB(data): Observable<any> {
    return this.http.post(`${this.url}register`,data);
  }



// user
public userregi(data): Observable<any> {
  console.log("service",data);

  return this.http.post(`${this.url}userregi`,data);
}


public updateuser(data): Observable<any> {
  console.log("service",data);


  return this.http.put(`${this.url}updateuser`,data);
  
}
public getuser(): Observable<any> {

  return this.http.get(`${this.url}getuser`);
}


public deluserid(data): Observable<any>
{
  console.log("service",data);
  
  return this.http.post(`${this.url}deluserid`,data)

}

public getuserid(data): Observable<any> {
  console.log("service",data);

  return this.http.post(`${this.url}getuserid`,data);
}

// AddTasks updateTask    gettasks  delTasks   getTaskID getTaskEmail
public AddTasks(data): Observable<any> {
  console.log("service",data);

  return this.http.post(`${this.url}AddTasks`,data);
}
public updateTask(data): Observable<any> {
  console.log("service",data);
  return this.http.put(`${this.url}updateTask`,data);  
}
public gettasks(): Observable<any> {
  return this.http.get(`${this.url}gettasks`);
}
public delTasks(data): Observable<any>
{
  console.log("service",data);  
  return this.http.post(`${this.url}delTasks`,data)
}
public getTaskID(data): Observable<any> {
  console.log("service",data);
  return this.http.post(`${this.url}getTaskID`,data);
}
// 
public getTaskEmail(data): Observable<any> {
  console.log("service",data);
  return this.http.post(`${this.url}getTaskEmail`,data);
}



  // holidays

  public Regholidays(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}Regholidays`,data);
    
  }
// getholidaysdata
public getholidaysdata(): Observable<any> {
  return this.http.get(`${this.url}getholidaysdata`);
}
// getholidaysno
public getholidaysno(data): Observable<any> {
  return this.http.post(`${this.url}getholidaysno`,data);
}
// updateholidays
public updateholidays(data): Observable<any> {
  console.log("service",data);

  return this.http.put(`${this.url}updateholidays`,data);
  
}
// delholidays
public delholidays(data): Observable<any>
{
  console.log("service",data);
  
  return this.http.post(`${this.url}delholidays`,data)

}


  // Designations

  public RegDesignations(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}RegDesignations`,data);
    
  }
// getDesignationsdata
public getDesignationsdata(): Observable<any> {
  return this.http.get(`${this.url}getDesignationsdata`);
}
// getDesignationsno
public getDesignationsno(data): Observable<any> {
  return this.http.post(`${this.url}getDesignationsno`,data);
}
// updateDesignations
public updateDesignations(data): Observable<any> {
  console.log("service",data);

  return this.http.put(`${this.url}updateDesignations`,data);
  
}
// delDesignations
public delDesignations(data): Observable<any>
{
  console.log("service",data);
  
  return this.http.post(`${this.url}delDesignations`,data)

}
  // Send Job Applications

  public sendjobApp(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}sendjobApp`,data);
    
  }
// getholidaysdata
public getSendapplyJobdata(): Observable<any> {
  return this.http.get(`${this.url}getSendapplyJobdata`);
}
// getholidaysno
public getSendapplyJobno(data): Observable<any> {
  return this.http.post(`${this.url}getSendapplyJobno`,data);
}





// jobsadd
 public jobsadd(data): Observable<any> {
  console.log(data);
  return this.http.post(`${this.url}jobsadd`,data);
  
}
// getjobsdata
public getjobsdata(): Observable<any> {
return this.http.get(`${this.url}getjobsdata`);
}
// getjobsno
public getjobsno(data): Observable<any> {
return this.http.post(`${this.url}getjobsno`,data);
}
// updatejobs
public updatejobs(data): Observable<any> {
console.log("service",data);

return this.http.put(`${this.url}updatejobs`,data);

}
// deljobs
public deljobs(data): Observable<any>
{
console.log("service",data);

return this.http.post(`${this.url}deljobs`,data)

}



// projectsadd
public projectadd(data): Observable<any> {
  console.log(data);
  return this.http.post(`${this.url}projectadd`,data);
  
}
// getProjectData
public getProjectData(): Observable<any> {
return this.http.get(`${this.url}getProjectData`);
}
// getprojecid
public getprojecid(data): Observable<any> {
return this.http.post(`${this.url}getprojecid`,data);
}

public getprojecname(data): Observable<any> {
  return this.http.post(`${this.url}getprojecname`,data);
  }
// updateproject
public updateproject(data): Observable<any> {
console.log("service",data);

return this.http.put(`${this.url}updateproject`,data);

}
// deldelprojectjobs
public delproject(data): Observable<any>
{
console.log("service",data);

return this.http.post(`${this.url}delproject`,data)

}





 // Assets

 public RegAssets(data): Observable<any> {
  console.log(data);
  return this.http.post(`${this.url}RegAssets`,data);
  
}
// getAssetsdata
public getAssetsdata(): Observable<any> {
return this.http.get(`${this.url}getAssetsdata`);
}
// getAssetsno
public getAssetsno(data): Observable<any> {
return this.http.post(`${this.url}getAssetsno`,data);
}
// updateAssets
public updateAssets(data): Observable<any> {
console.log("service",data);

return this.http.put(`${this.url}updateAssets`,data);

}
// delAssets
public delAssets(data): Observable<any>
{
console.log("service",data);

return this.http.post(`${this.url}delAssets`,data)

}









// Department
public regDepartment(data): Observable<any> {
  console.log("service",data);

  return this.http.post(`${this.url}regDepartment`,data);
}
public updateDepartment(data): Observable<any> {
  console.log("service",data);
  return this.http.put(`${this.url}updateDepartment`,data);  
}
public getDepartment(): Observable<any> {
  return this.http.get(`${this.url}getDepartment`);
}
public delDepartment(data): Observable<any>
{
  console.log("service",data);  
  return this.http.post(`${this.url}delDepartment`,data)
}
public getDepartmentid(data): Observable<any> {
  console.log("service",data);
  return this.http.post(`${this.url}getDepartmentid`,data);
}







  // contacts

 public Regcontact(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}Regcontact`,data);
    
  }
// getcontactdata
public getcontactdata(): Observable<any> {
  return this.http.get(`${this.url}getcontactdata`);
}
// getcontactno
public getcontactno(data): Observable<any> {
  return this.http.post(`${this.url}getcontactno`,data);
}
// updatecontact
public updatecontact(data): Observable<any> {
  console.log("service",data);

  return this.http.put(`${this.url}updatecontact`,data);
  
}
// delphone
public delphone(data): Observable<any>
{
  console.log("service",data);
  
  return this.http.post(`${this.url}delphone`,data)

}


// Tickets

public sendToTicket(data): Observable<any> {
  console.log(data);
  return this.http.post(`${this.url}createTickets`,data);  
}
public editticketdata(data): Observable<any> {
  console.log("service",data);
  return this.http.put(`${this.url}updateticket`,data); 
}

  public delticketid(data): Observable<any>
  {
    console.log("service",data);    
    return this.http.post(`${this.url}delticketid`,data)
  }
  public ticketdata(): Observable<any> {
    return this.http.get(`${this.url}gettickets`);
  }
  public getTicketId(data): Observable<any> {
    return this.http.post(`${this.url}getticketid`,data);
  }
  
  public getTicketemial(data): Observable<any> {
    return this.http.post(`${this.url}getTicketemial`,data);
  }
  // getempbankId delempbank updateempbank  getempbank  Addempbank   getempbankemail

  public Addempbank(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}Addempbank`,data);  
  }
  public updateempbank(data): Observable<any> {
    console.log("service",data);
    return this.http.put(`${this.url}updateempbank`,data); 
  }
  
    public delempbank(data): Observable<any>
    {
      console.log("service",data);    
      return this.http.post(`${this.url}delempbank`,data)
    }
    public getempbank(): Observable<any> {
      return this.http.get(`${this.url}getempbank`);
    }
    public getempbankId(data): Observable<any> {
      console.log("$$",data);
      
      return this.http.post(`${this.url}getempbankId`,data);
    }
    
    public getempbankemail(data): Observable<any> {
      return this.http.post(`${this.url}getempbankemail`,data);
    }
    
    public getempbankName(data): Observable<any> {
      return this.http.post(`${this.url}getempbankName`,data);
    }

  // Client 

  public clientregi(data): Observable<any> {
    return this.http.post(`${this.url}clientreg`,data);
  }  
  public getclients(): Observable<any> {
    return this.http.get(`${this.url}getclients`);
  } 
  public updateclent(data): Observable<any> {
    console.log(data);
    return this.http.put(`${this.url}updateclent`,data);    
  }
  public delclientid(data): Observable<any>
  {
    console.log("service",data);    
    return this.http.post(`${this.url}delclientid`,data)
  }
  public getClientId(data): Observable<any> {
    return this.http.post(`${this.url}getClientId`,data);
  }



// addtimingreg
// updateaddtimings
// deladdtimings
// getaddtimingsID
// getaddtimings

// Add Timing Sheet

public addtimingreg(data): Observable<any> {
  return this.http.post(`${this.url}addtimingreg`,data);
}  
public getaddtimings(): Observable<any> {
  return this.http.get(`${this.url}getaddtimings`);
} 
public updateaddtimings(data): Observable<any> {
  console.log(data);
  return this.http.put(`${this.url}updateaddtimings`,data);    
}
public deladdtimings(data): Observable<any>
{
  console.log("service",data);    
  return this.http.post(`${this.url}deladdtimings`,data)
}
public getaddtimingsID(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}getaddtimingsID`,data);
}



  // Emp salary 

  public Addempsal(data): Observable<any> {
    return this.http.post(`${this.url}Addempsal`,data);
  }  
  public getempsal(): Observable<any> {
    return this.http.get(`${this.url}getempsal`);
  } 
  public updateempsal(data): Observable<any> {
    console.log(data);
    return this.http.put(`${this.url}updateempsal`,data);    
  }
  public delempsal(data): Observable<any>
  {
    console.log("service",data);    
    return this.http.post(`${this.url}delempsal`,data)
  }
  public getempsalId(data): Observable<any> {
    return this.http.post(`${this.url}getempsalId`,data);
  }


  //  Provident Fund
  // getPFId delPF updatePF  getPF  AddPF
  public AddPF(data): Observable<any> {
    return this.http.post(`${this.url}AddPF`,data);
  }  
  public getPF(): Observable<any> {
    return this.http.get(`${this.url}getPF`);
  } 
  public updatEPF(data): Observable<any> {
    console.log("service",data);    
    return this.http.put(`${this.url}updatePF`,data);    
  }
  public delPF(data): Observable<any>  {
    console.log("service",data);    
    return this.http.post(`${this.url}delPF`,data)
  }
  public getPFId(data): Observable<any> {
    console.log("service",data);    

    return this.http.post(`${this.url}getPFId`,data);
  }


// Events
public postevent(data):Observable<any>{
  return this.http.post(`${this.url}postevent`,data)
}
public getevent():Observable<any>{
  return this.http.get(`${this.url}getevent`)
}
// modifydata  getmempbyname delmemployee getmempbyid Manregister Mlogin getmemployees updatemreg

public Mlogin(data): Observable<any> {
  return this.http.post(`${this.url}Mlogin`,data);
}

public Manregister(data): Observable<any> {
  return this.http.post(`${this.url}Manregister`,data);
}  
public getmemployees(): Observable<any> {
  return this.http.get(`${this.url}getmemployees`);
} 
public updatepass(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}updatepass`,data);    
}
public updatemreg(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}modifydata`,data);    
}

public delmemployee(data): Observable<any>  {
  console.log("service",data);    
  return this.http.post(`${this.url}delmemployee`,data)
}
public getmempbyid(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}getmempbyid`,data);
}


// hrmanreg  hrlogin  gethrman  gethmbyid gethmByname  delhremployee  updatehrman gethmByname


public hrlogin(data): Observable<any> {
  return this.http.post(`${this.url}hrlogin`,data);
}

public hrmanreg(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}hrmanreg`,data);
}  
public gethrman(): Observable<any> {
  return this.http.get(`${this.url}gethrman`);
} 

public updatehrman(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}updatehrman`,data);    
}
public updatehrpass(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}updatehrpass`,data);    
}
public updatehrmanLeaves_cas(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}updatehrmanLeaves_cas`,data);    
}
public updatehrmanLeaves_med(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}updatehrmanLeaves_med`,data);    
}
public delhremployee(data): Observable<any>  {
  console.log("service",data);    
  return this.http.post(`${this.url}delhremployee`,data)
}
public gethmbyid(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}gethmbyid`,data);
}
// gethmByname
public gethmByname(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}gethmByname`,data);
}
public getempByname(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}getEmpByname`,data);
}
public gethmname(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}gethmname`,data);
}

//   Empperupdate   getEmpper  EmpPerreg

public EmpPerreg(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}EmpPerreg`,data);
}  
public getEmpper(): Observable<any> {
  return this.http.get(`${this.url}getEmpper`);
} 
public Empperupdate(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}Empperupdate`,data);    
}


//   hmperupdate   gethmper  hmPerreg

public hmPerreg(data): Observable<any> {
  console.log("service",data);    

  return this.http.post(`${this.url}hmPerreg`,data);
}  
public gethmper(): Observable<any> {
  return this.http.get(`${this.url}gethmper`);
} 
public hmperupdate(data): Observable<any> {
  console.log("service",data);    
  return this.http.put(`${this.url}hmperupdate`,data);    
}







  // RegExpenses getExpenses getExpensesno updateExpenses delExpenses

  public RegExpenses(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.url}RegExpenses`,data);
    
  }
public getExpenses(): Observable<any> {
  return this.http.get(`${this.url}getExpenses`);
}
public getExpensesno(data): Observable<any> {
  return this.http.post(`${this.url}getExpensesno`,data);
}
public getExpenses_ID(data): Observable<any> {
  return this.http.post(`${this.url}getExpenses_ID`,data);
}

public getExpensesEMAIL(data): Observable<any> {
  return this.http.post(`${this.url}getExpensesEMAIL`,data);
}
public updateExpenses(data): Observable<any> {
  console.log("service",data);

  return this.http.put(`${this.url}updateExpenses`,data);
  
}
public delExpenses(data): Observable<any>
{
  console.log("service",data);
  
  return this.http.post(`${this.url}delExpenses`,data)

}







// Taxadd getTax  updateTaxl delTax getTaxlId
public Taxadd(data): Observable<any> {
  return this.http.post(`${this.url}Taxadd`,data);
}  
public getTax(): Observable<any> {
  return this.http.get(`${this.url}getTax`);
} 
public updateTaxl(data): Observable<any> {
  console.log(data);
  return this.http.put(`${this.url}updateTaxl`,data);    
}
public delTax(data): Observable<any>
{
  console.log("service",data);    
  return this.http.post(`${this.url}delTax`,data)
}
public getTaxlId(data): Observable<any> {
  return this.http.post(`${this.url}getTaxlId`,data);
}



// regdsalary
public regdsalary(data): Observable<any> {
  console.log("service",data);    
  return this.http.post(`${this.url}regdsalary`,data);
}  

setSalaryCode(input) {
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': localStorage.getItem('token') ? localStorage.getItem('token') : "" }) };
  let graphqlQuery = {
    "query": "mutation setSalaryCode($code: String!,$descr: String!,$bsalary: String!,$line:[Line], $gamount: String!) { setSalaryCode_M(code:$code,descr:$descr,bsalary:$bsalary,line:$line,gamount:$gamount) { code message } }",
    "variables": {
      "code": input.code,
      "descr": input.descr,
      "bsalary": input.bsalary,
      "line": input.line,
      "gamount": input.gamount
    }
  };
  return this.http.post(this._graphQLURL, graphqlQuery, httpOptions);
}









// Employee

  public login(data): Observable<any> {
    return this.http.post(`${this.url}login`,data);
  }
  public empregdata(): Observable<any> {
    return this.http.get(`${this.url}getemployees`);
  }  
  public delemployee(data): Observable<any>
  {
    console.log("service",data);    
    return this.http.post(`${this.url}delemployee`,data)
  } 
  //getting single employee

  // public getEmpById(id): Observable<any> {
  //   return this.http.get(`${this.url}getempbyid/${id}`);
  // } 

  public getEmpById(data): Observable<any> {
    console.log("Emp_id ",data);
    
    return this.http.post(`${this.url}getempbyid`,data);
  }
    // getEmpByname
  public getEmpByname(data): Observable<any> {
    return this.http.post(`${this.url}getEmpByname`,data);
  }
  public getEmpname(data): Observable<any> {
    return this.http.post(`${this.url}getEmpname`,data);
  }
   //sending edit data

   public sendEditData(data): Observable<any> {
    return this.http.put(`${this.url}modifyempdata`,data);
  } 

  public updateEmpLeaves_cas(data): Observable<any> {
    return this.http.put(`${this.url}updateEmpLeaves_cas`,data);
  }
  public updatemppass(data): Observable<any> {
    return this.http.put(`${this.url}updatemppass`,data);
  }
 public updateEmpLeaves_med(data): Observable<any> {
    return this.http.put(`${this.url}updateEmpLeaves_med`,data);
  }
    //sending leave data
    public sendleaveData(data): Observable<any> {
      return this.http.post(`${this.url}addleave`,data);
    }
    public getLeaveData(): Observable<any> {
      return this.http.get(`${this.url}getleavedata`);
    }
    public updateleve(data): Observable<any> {
      console.log(data);
  
      return this.http.put(`${this.url}updateleve`,data);
      }
  
    public delleaveid(data): Observable<any>
    {
      console.log("service",data);
      
      return this.http.post(`${this.url}delleaveid`,data)  
    }
  
    public getleaveId(data): Observable<any> {
      return this.http.post(`${this.url}getleaveId`,data);
    }
    public getMonYearLeav(data): Observable<any> {
      return this.http.post(`${this.url}getMonYearLeav`,data);
    }
    public getleaveemail(data): Observable<any> {
      return this.http.post(`${this.url}getleaveemail`,data);
    }
// Estimates

    public RegEstimates(data): Observable<any> {
      console.log("service",data);      
      return this.http.post(`${this.url}RegEstimates`,data);
    }
// RegEstimates delEstimartes updateEstimartes getEstimartesID getEstimartes
public getEstimartes(): Observable<any> {
  return this.http.get(`${this.url}getEstimartes`);
}
public findestimates(data): Observable<any> {
  return this.http.post(`${this.url}findestimates`,data);
}
public updateEstimartes(data): Observable<any> {
  console.log("service",data);      


  return this.http.put(`${this.url}updateEstimartes`,data);
  }

public delEstimartes(data): Observable<any>
{
  console.log("service",data);
  
  return this.http.post(`${this.url}delEstimartes`,data)  
}

public getEstimartesID(data): Observable<any> {
  return this.http.post(`${this.url}getEstimartesID`,data);
}


}
