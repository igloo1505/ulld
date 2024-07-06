cd $ULLD_TEST_ROOT
echo "Setting the git config to support the igloo1505 account. If you want to push to the dedicated ULLD repository, modify the setClonedUlldBaseGitConfig.zsh in the monorepo's buildUtils directory."
ssh-add -D
ssh-add ~/.ssh/github
git config user.name "igloo1505"
git config user.email "iglinskia44@gmail.com"
git remote set-url origin git@github.com:igloo1505/ulldApp.git
