#!/bin/bash

# GitHub token (This is not a secure practice)
GITHUB_TOKEN="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"

# Get the current directory
current_dir=$(pwd)

# Initialize task number
task_num=1

# Configure git to use the token for authentication
git config --global url."https://api:$GITHUB_TOKEN@github.com/".insteadOf "https://github.com/"

# Loop through each file in the current directory
for file in "$current_dir"/*; do
    # Check if it's a file (not a directory)
    if [ -f "$file" ]; then
        # Get the filename and basename (without extension)
        filename=$(basename "$file")
        basename="${filename%.*}"
        
        # Skip the script itself
        if [ "$filename" = "$(basename "$0")" ]; then
            continue
        fi
        
        # Handle README file separately
        if [[ "${filename,,}" == "readme"* ]]; then
            git add "$filename"
            git commit -m "README: Updated documentation"
            git push
            continue
        fi
        
        # Add the file
        git add "$filename"
        
        # Commit the file using basename (without extension)
        git commit -m "task#$task_num: $basename"
        
        # Push the commit
        git push
        
        # Increment task number
        ((task_num++))
    fi
done

# Remove the global git config to avoid leaving the token in git configuration
git config --global --unset url."https://api:$GITHUB_TOKEN@github.com/".insteadOf

echo "Process completed. The script itself was not pushed."
