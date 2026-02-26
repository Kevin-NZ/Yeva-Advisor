
#cp ~/Downloads/yeva-advisor.jsx src/App.jsx

npm version patch   # 1.0.0 → 1.0.1
#npm version minor   # 1.0.0 → 1.1.0
#npm version major   # 1.0.0 → 2.0.0

npm run build

cp dist/assets/*js ~/JSX/yeva-advisor-app/assets/index.js
cp src/App.jsx ~/JSX/yeva-advisor-app/src/App.jsx

sleep 3
(cd ~/JSX/yeva-advisor-app && git add * && git commit -m 'Deploy' && git push)
