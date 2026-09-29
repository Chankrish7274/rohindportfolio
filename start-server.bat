@echo off
title Rohind Ragesh Portfolio - Local Server
echo =========================================================
echo  Starting Enterprise Portfolio Server on Localhost...
echo =========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
