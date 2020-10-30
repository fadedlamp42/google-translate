#!/bin/sh

#fixes a sandbox error, solution found from
#https://www.reddit.com/r/linux/comments/dvb43s/til_electron_requires_setuid_root_to_operate/
#https://unix.stackexchange.com/questions/303213/how-to-enable-user-namespaces-in-the-kernel-for-unprivileged-unshare

sysctl -w kernel.unprivileged_userns_clone=1
