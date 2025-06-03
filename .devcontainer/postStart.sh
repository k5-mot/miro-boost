#!/usr/bin/env bash

printf "\e[36mpostStartCommand\e[0m\n"

printf "\e[34mSetup Backend environment...\e[0m\n"
pushd backend
uv python install 3.12
uv sync --dev
popd

printf "\e[34mSetup Frontend environment...\e[0m\n"
pushd frontend
npm -g install npm git-cz pnpm
npm install
popd
