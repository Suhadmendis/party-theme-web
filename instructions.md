1. Check the project.
2. We are going to remove the backend and the database temporarily.
3. Change the project by removing the backend and the database temporarily.
4. In a Markdown file, keep track of how they were used and document their structure for future reference.

## Goal
- Keep in mind that the primary goal is to get the project running successfully on the local machine.
- It is already known and expected that image-related functionality and database-dependent functionality may not work after the backend and database are removed.
- Focus on ensuring that the frontend application can start, run, and be tested locally without the backend and database.

5. If there are PHP files that are no longer required because the backend is being removed, convert or replace them with HTML files where appropriate.
6. Remove PHP dependencies and PHP-specific functionality that is not needed for the frontend-only version of the project.
7. After the migration is complete, make sure there is no remaining PHP code, PHP dependency, PHP configuration, or PHP-specific functionality left in the project.
8. Verify that the project can run without requiring a PHP runtime or server.
9. If there are any Cloudinary credentials, configuration details, environment variables, integration notes, or setup requirements, document them in the backend documentation Markdown file for future use.
10. Do not delete Cloudinary-related implementation details without first recording the necessary information in the backend documentation.

11. If any page stops loading or becomes unusable because the backend has been removed, create meaningful dummy data to keep the page functional.
12. Use mock data files, JSON files, or other frontend-friendly data sources wherever necessary to simulate backend responses.
13. Ensure that all major pages can be viewed, navigated, and tested locally even when real backend services are unavailable.
14. The goal is to preserve the user experience as much as possible using realistic placeholder data until the backend is restored.

15. Create a new Git branch for all of these changes.
16. Commit the work completed so far with a clear and concise commit message that summarizes the changes made.
17. Do not mention individual authors, contributors, or personal names in commit messages.
18. Push the branch to the remote GitHub repository after the changes have been committed.
19. Ensure the branch contains all project modifications, documentation updates, mock data additions, and frontend-only migration changes completed as part of this task.
