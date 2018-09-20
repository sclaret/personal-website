#! /bin/bash

export AWS_PROFILE=website-personal

aws s3 cp dist/index.html s3://simonclaret.com/index.html

aws s3 cp dist/assets s3://cdn.simonclaret.com/assets \
    --recursive \
    --exclude "*" \
    --include "*.css" \
    --include "*.js" \
    --include "*.png" \
    --include "*.jpg"
