# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git config user.name "JSFiend"
git config user.email "combine.lee@gmail.com "
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
git push -f git@github.com:JSFiend/think-you-do.git master:gh-pages
