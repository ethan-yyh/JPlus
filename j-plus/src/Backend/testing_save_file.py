#!C:/xampp/python/python.exe
#!/usr/bin/python
import cgi
import cgitb
import os

cgitb.enable()

# # Create instance of FieldStorage
form = cgi.FieldStorage()

# implement the rest to get file and its name
# make sure to include extension ex. resume.pdf
