@echo off
title Push Portfolio to GitHub
echo ====================================================
echo  Pushing Santhosh Portfolio to GitHub...
echo ====================================================
echo.

"C:\Users\DELL\AppData\Local\Programs\MinGit\cmd\git.exe" push -u origin main --force
"C:\Users\DELL\AppData\Local\Programs\MinGit\cmd\git.exe" push origin main:gh-pages --force

echo.
echo ====================================================
echo  Push Complete! 
echo  Vercel will now automatically deploy your website.
echo ====================================================
pause
