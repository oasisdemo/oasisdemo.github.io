@rem commit.bat
set path=%path%;"D:\\Program Files (x86)\\Git\\bin"
git add --all
git commit -m "Initial commit"
git push -u origin master
pause
