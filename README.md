# FESDriversLicenseCheck
Project for the lecture "Mobile Application Exercises"

## Installation Guide (tested on Windows 10):
- Download XAMPP on https://www.apachefriends.org/de/index.html and follow
the installation instructions. (Preferred path: "C:/xampp")
- Move the project folder "FESDriversLicenseCheck" to the directory "C:/xampp/htdocs"
 -- see also: https://shellcreeper.com/how-to-create-valid-ssl-in-localhost-for-xampp/ --
- Go to this project's "install" folder and move the folder "crt" into "C:/xampp/apache"
- Execute "make-cert.bat" and press the enter button until the program is done
- Enter the newly created folder "fes.test" and execute the "server.crt" file
- Click on "install certificate", choose your local machine and place all certificates
in the Trusted Root Certification Authorities
-- see also: https://robsnotebook.com/xampp-ssl-encrypt-passwords/ --
- !Warning! The following steps will change the settings of xampp, so that "localhost" will
automatically be redirected to "https://localhost" and the root of localhost will be the
"FESDriversLicenseCheck" folder
- Replace the "C:/xampp/apache/conf/httpd.conf" file with the one in this project's "install" folder
- Replace the "C:/xampp/apache/conf/extra/httpd-xampp.conf" file with the one in this project's "install" folder
- If you want to host the app by forwarding you need to change the IP-Address in the "httpd-xampp.conf"-file
to your accessible IP-Address in the following extract:

  <VirtualHost *:80>

   DocumentRoot "C:\xampp\htdocs\FESDriversLicenseCheck"

   ServerName fes.test

   ServerAlias *.fes.test

   Redirect permanent / https://127.0.0.1

  </VirtualHost>

- You can use any kind of MySQL environment you like, we went with the MySQL Workbench, because
we had them installed before we started working with XAMPP
- Change the credentials in this project's "/src/php_executions/connect.php" file to your own
- Move all the .php-files in this project's "/src/php_executions" directory into "C:/xampp/php/pear"
- Finally execute the queries in this project's "install/mysqlQueries.sql" file
 (Also change the credentials in the second query)
