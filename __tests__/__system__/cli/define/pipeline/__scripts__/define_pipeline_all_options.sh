#!/usr/bin/env bash
set -e # fail the script if we get a non zero exit code

pipeline_name=$1
csd_group=$2
configfile=$3
shelf=$4
wsdir=$5
region_name=$6
description=$7

zowe cics define pipeline "$pipeline_name" "$csd_group" --configfile "$configfile" --shelf "$shelf" --wsdir "$wsdir" --region-name "$region_name" --description "$description"  --enable false
