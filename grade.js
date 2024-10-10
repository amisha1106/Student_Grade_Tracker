const calcy = () =>{
    let marks = document.getElementById('sm').value;
    let dbms = document.getElementById('dbms').value;
    let oop = document.getElementById('oop').value;
    let as = document.getElementById('as').value;
    let de = document.getElementById('de').value;
    let ds = document.getElementById('ds').value;
    let eec = document.getElementById('eec').value;
    let grades = "";
    
    let totalmarks = parseFloat(marks)*6;
    let totalGrades = parseFloat(dbms) + parseFloat(oop) + parseFloat(as) + parseFloat(de)  +  parseFloat(ds) +  parseFloat(eec);
  
    let perc = (totalGrades/totalmarks) * 100;
    if(marks==null||marks==""){
      alert("Please Enter The Subject Mark");
      return false;
    }
    if(dbms>marks||oop>marks||as>marks||de>marks||ds>marks||eec>marks){
      alert("Enter Valid Marks");
      return false;
      }
  
    debugger;
  
    if(perc <= 100  && perc >= 90){
      grades = 'O';
      document.getElementById('data').innerHTML = `${grades}`
      document.getElementById('data').style.color='lightgrey';
      document.getElementById('comment').style.color='lightgrey';
      document.getElementById('comment').innerHTML="You are on Right track";

    }else if(perc <= 89  && perc >= 80){
      grades = 'E';
      document.getElementById('data').innerHTML = `${grades}`
      document.getElementById('data').style.color='lightblue';
      document.getElementById('comment').style.color='lightblue';
      document.getElementById('comment').innerHTML="You need little focus";
    }else if(perc <= 79  && perc >= 70){
      grades = 'A';
      document.getElementById('data').innerHTML = `${grades}`
      document.getElementById('data').style.color='lightgreen';
      document.getElementById('comment').style.color='lightgreen';
      document.getElementById('comment').innerHTML="You can score more!!";
    }else if(perc <= 69  && perc >= 60){
      grades = 'B';
      document.getElementById('data').innerHTML = `${grades}`
      document.getElementById('data').style.color='Yellow';
      document.getElementById('comment').style.color='Yellow';
      document.getElementById('comment').innerHTML="You need Consistency";
    }else if(perc <= 59  && perc >= 50){
      grades = 'C';
      document.getElementById('data').innerHTML = `${grades}`
      document.getElementById('data').style.color='LightOrange';
      document.getElementById('comment').style.color='LightOrange';
      document.getElementById('comment').innerHTML="You need to focus more";
    }else if(perc <= 49  && perc >= 40){
      grades = 'D';
      document.getElementById('data').innerHTML = `${grades}`
      document.getElementById('data').style.color='Dark Orange';
      document.getElementById('comment').style.color='Dark Orange';
      document.getElementById('comment').innerHTML="You have to study hard";
    }else{
      document.getElementById('data').innerHTML = `${grades}`
      document.getElementById('data').style.color='Red';
      document.getElementById('comment').style.color='Red';
      document.getElementById('comment').innerHTML="Give more attention to study";
    }
  
    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` Out of ${totalmarks} your total is  ${totalGrades} and percentage is ${perc}%. <br> You are Pass. `
  
    }
    else{
      document.getElementById('showData').innerHTML = ` Out of ${totalmarks} your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
  }
  
