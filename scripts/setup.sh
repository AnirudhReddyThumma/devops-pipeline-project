#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Starting the app..."
node server.js