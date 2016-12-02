#SAP Gateway Test Case Builder
Sap Gateway Test Case Builder is a chrome browser plugin that generates SAP  Gateway test case in Gateway Client (/IWFND/GW_CLIENT) 
very easily and quickly. 

#Current Problem
The Fiori applications make multiple OData calls to comminicate with backen. With the draft enabled applications, the number of calls are
even more.  

If there is any error in one of the calls, only reproducing that particular call may not be sufficient to recreate the error. 
What is needed here, is a sequence of test cases repsenting the OData calls as fired by the browser. 
Now one needs to copy every header, payload, URL, HTTP Method as is from the Broeser Devtools to the Gateway Test Client. This is a 
tiresome manual process and prone to human error. 

This tool makes the process automatic, easy and free from humam error. 

#Dependency
The plugin works in system G1Y currenly. The ABAP artifacts are now available only in G1Y which understands the commands/requests fired 
by the Chrome plugin. 

#Installation Steps
1.  Download CRX file from the Git repository
2.  Open URL chrome://extensions/ in chrome browser
3.  Drag and drop the CRX file on the page 

You are ready to Go now....

#How to Use
1.  


