#!/bin/zsh 

zsh $ULLD_DEV_ROOT/buildUtils/network/runWhenBackOnline.zsh
echo "" > $ULLD_DEV_ROOT/buildUtils/network/runWhenBackOnline.zsh
cd $ULLD_TEST_ROOT
zsh ./whenBackOnline.zsh
