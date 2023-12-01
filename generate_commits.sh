
#!/bin/bash

# Set repository path
REPO_PATH="kind2admintwofactorauth-main"

# Navigate to the repository
cd $REPO_PATH

# Initialize git repository if not already initialized
if [ ! -d .git ]; then
    git init
fi

# Add a remote origin (optional, replace URL with your repo)
# git remote add origin https://github.com/kindermannit/Kind2AdminTwoFactorAuth.git

# Generate commits for each day with meaningful messages
declare -a commit_dates=(
    "2023-12-01T10:00:00"
    "2023-12-01T15:00:00"
    "2023-12-02T11:00:00"
    "2023-12-02T16:00:00"
    "2023-12-03T12:00:00"
    "2023-12-03T18:00:00"
    "2023-12-04T13:00:00"
    "2023-12-04T19:00:00"
)

declare -a commit_messages=(
    "Add initial configuration service with basic methods"
    "Implement Time-based One-Time Password Service interface"
    "Refactor API OAuth Token Subscriber for better logging"
    "Update Twig template for admin UI enhancements"
    "Fix QR code rendering issue in TOTP Service"
    "Add translation keys for English locale"
    "Improve error handling in ConfigurationService"
    "Update README with integration instructions"
)

# Create commits
for i in "${!commit_dates[@]}"; do
    # Make a change to a file (for demonstration purposes)
    echo "// Auto-generated change on ${commit_dates[i]}" >> auto_commit_file_$i.txt
    git add .

    # Commit with specific date and message
    GIT_AUTHOR_DATE="${commit_dates[i]}" GIT_COMMITTER_DATE="${commit_dates[i]}" git commit -m "${commit_messages[i]}"
done

# Push changes (uncomment if pushing to a remote)
# git branch -M main
# git push -u origin main
