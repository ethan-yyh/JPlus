#!C:/xampp/python/python.exe
#!/usr/bin/python
import cgi
import cgitb
import os

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
# implement the rest to get file and its name
# make sure to include extension ex. resume.pdf
