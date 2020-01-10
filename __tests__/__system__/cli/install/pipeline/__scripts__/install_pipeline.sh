#!/usr/bin/env bash
set -e

pipeline_name=$1
csd_group=$2
region_name=$3
zowe cics install urimap "$pipeline_name" "$csd_group" --region-name "$region_name"