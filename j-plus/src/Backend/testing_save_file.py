#!C:/xampp/python/python.exe

import cgi
import cgitb
import os

cgitb.enable()

# # Create instance of FieldStorage
form = cgi.FieldStorage()

# Get filename here.
fileitem = form["file"]

print("Content-type:text/html\n")
print("<html>")
print("<head>")
print("<title>Sum by Python CGI</title>")
print("</head>")
print("<body>")

if fileitem.filename:
   fn = os.path.basename(fileitem.filename)
   open( fn, 'wb').write(fileitem.file.read())
   message = 'The file "' + fn + '" was uploaded successfully'
else:
   message = 'No file was uploaded'

print(message)

print("<h2>Heloo </h2>")
print("</body>")
print("</html>")

