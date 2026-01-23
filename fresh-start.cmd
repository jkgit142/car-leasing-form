@echo off
echo Creating fresh repository without node_modules...
rmdir /s /q .git
git init
git add .gitignore
git add pages/
git add public/
git add package.json
git add database.sql
git add vercel.json
git add README.md
git add *.cmd
git add *.sh
git commit -m "Initial commit: Car leasing form without node_modules"
git branch -M main
git remote add origin https://github.com/jkgit142/car-leasing-form.git
echo Ready to push! Run: git push -u origin main --force
pause