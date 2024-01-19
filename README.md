# Welcome to Foot and Ball Flash Cards

A subsidary of [Foot and Ball Academy](https://footandball.com.au/)!

Get the source code and deploy to github pages with the following
```
git clone git@github.com:natbutter/fabfc-beta.git
cd fabfc
flutter build web
cd build/web
git init
git add *
git commit -m "deploy web app"
git branch -M main
git remote add origin git@github.com:natbutter/fabfc-web.git
git push -u origin main
```

Configure github pages to render from / root and main!
