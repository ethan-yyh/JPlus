#!C:/xampp/python/python.exe

import cgi
import cgitb
# import os

cgitb.enable()

# # Create instance of FieldStorage
form = cgi.FieldStorage()

# Get filename here.
fileitem = form['filename']
print(fileitem)
# Test if the file was uploaded
if fileitem.filename:
   # strip leading path from file name to avoid
   # directory traversal attacks
   fn = os.path.basename(fileitem.filename)
   open('/tmp/' + fn, 'wb').write(fileitem.file.read())
   message = 'The file "' + fn + '" was uploaded successfully'
 
else:
   message = 'No file was uploaded'
 
print ("""\
Content-Type: text/html\n
<html>
<body>
   <p>%s</p>
</body>
</html>
""" % (message,))
# # implement the rest to get file and its name
# # make sure to include extension ex. resume.pdf
# print("Content-type:text/html\n")
# print("<html>")
# print("<head>")
# print("<title>Sum by Python CGI</title>")
# print("</head>")
# print("<body>")
# print("<h2>Heloo </h2>")
# print("</body>")
# print("</html>")