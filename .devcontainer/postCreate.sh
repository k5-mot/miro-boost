#!/usr/bin/env bash

printf "\e[36mpostCreateCommand\e[0m\n"

function chown_dir() {
  local dir=$1
  if [ -d "$dir" ]; then
    sudo chown -R $(whoami):$(whoami) "$dir"
  fi
}

function setup_uv() {
  printf "\e[34mSetup Backend environment...\e[0m\n"
  chown_dir backend/.venv
  pushd backend
  uv python install 3.12
  uv sync --dev
  popd
}

function setup_npm() {
  printf "\e[34mSetup Frontend environment...\e[0m\n"
  chown_dir frontend/node_modules
  pushd frontend
  npm install
  popd
}

setup_npm &
setup_uv &
wait
printf "\e[32mSetup complete!\e[0m\n"
