@echo off
echo Building for production...
npm run build
echo.
echo Build complete! Upload the 'out' folder to your hosting.
echo.
echo Steps:
echo 1. Go to appservhosting.com cPanel
echo 2. Create subdomain: eveasy.assajan.net
echo 3. Upload contents of 'out' folder to subdomain directory
echo 4. Done!
pause