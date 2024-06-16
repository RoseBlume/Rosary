#! /bin/bash
cd scripts/build
if [ $4 -eq "desktop"]
then
    source desktop.sh
elif [ -z $4]
then
    source desktop.sh
elif [$4 -eq "android"] 
then
    source android.sh
else
    echo "error invalid value for platform"
    source ../error.sh
fi