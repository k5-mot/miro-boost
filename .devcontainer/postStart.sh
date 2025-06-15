#!/usr/bin/env bash

printf "\e[36mpostStartCommand\e[0m\n"

sudo chown -R $(whoami):$(whoami) backend/.venv
sudo chown -R $(whoami):$(whoami) frontend/node_modules

function setup_uv() {
  printf "\e[34mSetup Backend environment...\e[0m\n"
  pushd backend
  uv python install 3.12
  uv sync --dev
  popd
}

function setup_npm() {
  printf "\e[34mSetup Frontend environment...\e[0m\n"
  pushd frontend
  npm install --verbose
  popd
}

setup_npm &
setup_uv &
wait
printf "\e[32mSetup complete!\e[0m\n"
