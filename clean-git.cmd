@echo off
echo Removing node_modules from git history completely...
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch -r node_modules" --prune-empty --tag-name-filter cat -- --all
git add .gitignore
git commit -m "Add .gitignore and clean git history"
echo Done! Now you can push safely.
pause