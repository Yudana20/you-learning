@echo off
pushd "%~dp0"
npx @google/gemini-cli %*
popd
