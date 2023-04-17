# Extremely Simple Script To Merge All JS Files
# There's No Point Of Setting Up NPM For A Project Like This

import pathlib
import os

output = ""

for file in pathlib.Path(os.getcwd()).glob('**/*.js'):
    if (os.path.basename(file) != "helper.js"):
        handle = open(file, "r")
        output += "\n\n"
        output += handle.read()
        handle.close()

lib = open("./dist/helper.js", "w")
lib.write(output)
