#!/bin/bash

echo "Cleaning old builds..."
rm -rf .next out

echo "Installing dependencies..."
npm install

echo "Running production build..."
npm run build-prod

echo "Preparing Next.js app for Netlify..."
npx next-on-netlify

echo "Checking output folders..."
if [ -d "out" ]; then
    echo "✅ 'out' folder created for Netlify. Contents:"
    ls -la out
else
    echo "❌ 'out' folder not found. Check previous steps for errors."
fi