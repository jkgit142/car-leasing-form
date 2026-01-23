@echo off
echo Car Leasing Form - Setup and Deployment Commands
echo ================================================

:menu
echo.
echo 1. Install dependencies
echo 2. Run development server
echo 3. Build for production
echo 4. Git setup and commit
echo 5. Remove node_modules from git
echo 6. Push to GitHub
echo 7. Exit
echo.
set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" goto install
if "%choice%"=="2" goto dev
if "%choice%"=="3" goto build
if "%choice%"=="4" goto git_setup
if "%choice%"=="5" goto remove_node_modules
if "%choice%"=="6" goto push
if "%choice%"=="7" goto exit

:install
echo Installing dependencies...
npm install
pause
goto menu

:dev
echo Starting development server...
npm run dev
pause
goto menu

:build
echo Building for production...
npm run build
pause
goto menu

:git_setup
echo Setting up git and committing...
git add .
git commit -m "Add database integration and deployment config"
echo Git setup complete!
pause
goto menu

:remove_node_modules
echo Removing node_modules from git tracking...
git rm -r --cached node_modules
git add .gitignore
git commit -m "Add .gitignore and remove node_modules"
echo node_modules removed from git!
pause
goto menu

:push
echo Pushing to GitHub...
echo Note: You need to set up GitHub authentication first
echo Run: git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/jkgit142/car-leasing-form.git
git push -u origin main
pause
goto menu

:exit
echo Goodbye!
pause