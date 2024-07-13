#!/bin/bash

# Loop through numbers 0 to 28
for i in {0..28}; do
  # Construct the filename with padding for consistent order
  filename="${i}-answer.txt"
  # Check if the file exists
  if [ -f "$filename" ]; then
    # Cat the file content
    cat "$filename"
  fi
done
