@echo off
echo Removing node_modules from git and committing with .gitignore...
git rm -r --cached node_modules
git add .
git commit -m "Add .gitignore and remove node_modules from tracking"
echo Done!
pause