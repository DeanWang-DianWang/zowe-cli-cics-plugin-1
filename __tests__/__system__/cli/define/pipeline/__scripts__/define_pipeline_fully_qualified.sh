#!/usr/bin/env bash
set -e # fail the script if we get a non zero exit code

pipeline_name=$1
csd_group=$2
configfile=$3
shelf=$4
wsdir=$5
region_name=$6
HOST=$7
PORT=$8
USER=${9}
PASSWORD=${10}
PROTOCOL=${11}
REJECT=${12}
zowe cics define pipeline "$pipeline_name" "$csd_group" --configfile "$configfile" --shelf "$shelf" --wsdir "$wsdir" --region-name "$region_name"  --status true --host $HOST --port $PORT --user $USER --password $PASSWORD --protocol "$PROTOCOL" --reject-unauthorized "$REJECT"
