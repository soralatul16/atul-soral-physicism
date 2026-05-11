#!/bin/bash
cd "$(dirname "$0")"

echo "====================================="
echo "   Auto-Saving to GitHub..."
echo "====================================="
echo ""

# Stage all changes
git add .

# Check if there are actually changes to commit
if git diff-index --quiet HEAD --; then
    echo "✅ No new changes detected. Everything is already saved!"
else
    # Commit with an automated timestamp
    current_time=$(date "+%Y-%m-%d %H:%M:%S")
    git commit -m "Auto-backup on $current_time"
    
    # Pull latest changes to avoid conflicts
    echo "Syncing with GitHub..."
    git pull --rebase origin main
    
    # Push to GitHub
    echo "Pushing changes..."
    git push
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ SUCCESS! All your files are now backed up on GitHub."
    else
        echo ""
        echo "❌ ERROR: Failed to push to GitHub. Please check your internet connection."
    fi
fi

echo ""
echo "You can safely close this window now."
sleep 4
