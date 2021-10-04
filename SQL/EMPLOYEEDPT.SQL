emp_department -------------------------------------  TABLE

DPT_CODE DPT_NAME        DPT_ALLOTMENT
-------- --------------- -------------
      57 IT                      65000
      63 Finance                 15000
      47 HR                     240000
      27 RD                      55000
      89 QC                      75000
      
emp_details ----------------------------------------- TABLE
      
EMP_IDNO EMP_FNAME       EMP_LNAME         EMP_DEPT
--------- --------------- --------------- ----------
   127323 Michale         Robbin                  57        
   526689 Carlos          Snares                  63
   843795 Enric           Dosio                   57
   328717 Jhon            Snares                  63
   444527 Joseph          Dosni                   47
   659831 Zanifer         Emily                   47
   847674 Kuleswar        Sitaraman               57
   748681 Henrey          Gabriel                 47
   555935 Alex            Manuel                  57
   539569 George          Mardy                   27
   733843 Mario           Saule                   63
   631548 Alan            Snappy                  27
   839139 Maria           Foster                  57
   
  
return   
  
dpt_name
---------
Finance
IT
HR

From the following tables write a SQL query to find the names of departments where more than two employees are working. Return dpt_name
   
   

   

   


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



emp_department ---------------------------------------- TABLE

DPT_CODE DPT_NAME        DPT_ALLOTMENT
-------- --------------- -------------
      57 IT                      65000
      63 Finance                 15000
      47 HR                     240000
      27 RD                      55000
      89 QC                      75000
      
      
emp_details -------------------------------------------- TABLE

 EMP_IDNO EMP_FNAME       EMP_LNAME         EMP_DEPT
--------- --------------- --------------- ----------
   127323 Michale         Robbin                  57     57 IT                      65000
   526689 Carlos          Snares                  63
   843795 Enric           Dosio                   57
   328717 Jhon            Snares                  63
   444527 Joseph          Dosni                   47
   659831 Zanifer         Emily                   47
   847674 Kuleswar        Sitaraman               57
   748681 Henrey          Gabriel                 47
   555935 Alex            Manuel                  57
   539569 George          Mardy                   27
   733843 Mario           Saule                   63
   631548 Alan            Snappy                  27
   839139 Maria           Foster                  57
   
   
    RETURN THIS 


   First Name	Last Name
    Alan		  Snappy
    Maria		  Foster
    Michale		Robbin
    Enric		  Dosio
    Joseph		Dosni
    Zanifer		Emily
    Kuleswar	Sitaraman
    Henrey		Gabriel
    Alex		  Manuel
    George		Mardy
    
    From the following tables write a SQL query to find the departments with a budget more than Rs. 50000 and display the first name and last name of employees.


SELECT emp_details.emp_fname AS "First Name", emp_details.emp_lname AS "Last Name"
FROM emp_details
JOIN EMP_DEPARTMENT emp_d ON emp_details.emp_dept = emp_d.dpt_code 
WHERE emp_d.dpt_allotment > 50000 








ANSWER 1 DONT PEEK


SELECT emp_department.dpt_name
FROM emp_details 
JOIN emp_departments ON emp_details.emp_dept = emp_department.dpt_code
GROUP BY emp_department.dpt_name 
HAVING COUNT > 2


returns 
dpt_name
---------
Finance
IT
HR