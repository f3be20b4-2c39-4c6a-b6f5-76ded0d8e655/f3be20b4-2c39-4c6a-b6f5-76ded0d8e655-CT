@echo off
REM Auto Commit and Push Script
REM This script automatically commits and pushes changes to GitHub

cd /d e:\Erandix

REM Get current date and time for the commit message
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)

REM Add all changes
git add .

REM Check if there are changes to commit
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo No changes to commit at %mydate% %mytime%
    exit /b 0
)

REM Commit with timestamp
git commit -m "Auto commit - %mydate% %mytime%"

REM Push to GitHub
git push

echo Commit and push completed at %mydate% %mytime%
