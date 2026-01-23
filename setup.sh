#!/bin/bash

echo "Car Leasing Form - Setup and Deployment Commands"
echo "================================================"

show_menu() {
    echo ""
    echo "1. Install dependencies"
    echo "2. Run development server"
    echo "3. Build for production"
    echo "4. Git setup and commit"
    echo "5. Remove node_modules from git"
    echo "6. Push to GitHub"
    echo "7. Exit"
    echo ""
}

while true; do
    show_menu
    read -p "Enter your choice (1-7): " choice
    
    case $choice in
        1)
            echo "Installing dependencies..."
            npm install
            ;;
        2)
            echo "Starting development server..."
            npm run dev
            ;;
        3)
            echo "Building for production..."
            npm run build
            ;;
        4)
            echo "Setting up git and committing..."
            git add .
            git commit -m "Add database integration and deployment config"
            echo "Git setup complete!"
            ;;
        5)
            echo "Removing node_modules from git tracking..."
            git rm -r --cached node_modules
            git add .gitignore
            git commit -m "Add .gitignore and remove node_modules"
            echo "node_modules removed from git!"
            ;;
        6)
            echo "Pushing to GitHub..."
            echo "Note: You need to set up GitHub authentication first"
            echo "Run: git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/jkgit142/car-leasing-form.git"
            git push -u origin main
            ;;
        7)
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo "Invalid choice. Please try again."
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done