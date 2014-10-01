#!/usr/bin/env bash

REPO="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BUILD="${REPO}/build"
SRC="${REPO}/lib/bowser"

cd "${REPO}"
git submodule init
git submodule update
rm -fr "${BUILD}"
mkdir "${BUILD}"
cp "${REPO}/lib/bowser/bowser.js" "${BUILD}"

