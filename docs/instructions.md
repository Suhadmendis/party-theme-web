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

20. Review the overall project structure and organize files into a clear, maintainable folder hierarchy.
21. The project currently contains files that may be scattered across multiple locations, including Markdown files, images, and other assets. Reorganize them where appropriate.
22. Consolidate images and other static assets into dedicated asset folders whenever possible.
23. Update all file paths, imports, references, and resource links throughout the project to match the new structure.
24. Group related files together and follow a consistent directory structure to improve maintainability.
25. Ensure that the reorganization does not break the application and verify that all resources continue to load correctly after the changes.

26. Keep Cloudinary integration functional wherever possible, even after removing the backend.
27. If Cloudinary assets can be accessed directly from the frontend, use the existing Cloudinary configuration and asset URLs to display images and media.
28. Prefer loading media directly from Cloudinary rather than replacing existing Cloudinary-hosted assets with local files.
29. Preserve Cloudinary-related functionality and update the implementation as needed so that media continues to be displayed correctly in the frontend-only version of the project.
30. Document any Cloudinary configuration, dependencies, environment variables, and implementation details that are required to restore or extend the integration in the future.

31. Review the styling and layout of the entire project to identify visual inconsistencies and layout issues.
32. Ensure that shared layout components behave consistently across all pages.
33. Verify that the footer is positioned correctly at the bottom of every page, including pages with limited content.
34. Fix any CSS, layout, spacing, flexbox, grid, or responsive design issues that prevent the footer from remaining at the bottom of the page.
35. Perform a general UI and styling review and correct any obvious layout issues discovered during the process.

36. Identify the existing snow-falling visual effect, animation, or seasonal styling currently used in the project.
37. Refactor the snow effect into a separate JavaScript module, component, or view file to keep the implementation isolated and maintainable.
38. Ensure that the snow effect is not loaded globally throughout the year.
39. Display the snow effect only during December based on the user's local date.
40. Add conditional logic so that the snow-related JavaScript, styles, and assets are loaded only when required.
41. Keep the implementation reusable so additional seasonal effects can be added in the future using the same pattern.
42. Verify that the website behaves normally outside of December and that no snow-related resources are unnecessarily loaded during other months.
43. Document the seasonal effect implementation and activation logic in the project documentation for future maintenance.

44. Use Vue.js for the implementation of seasonal effects and any related frontend behavior introduced as part of this task.
45. The snow effect should be implemented as a Vue component, Vue view, or Vue-managed module rather than plain JavaScript DOM manipulation.
46. Follow the existing Vue.js architecture and project conventions when integrating seasonal functionality.

47. Review the global search component in the header and ensure it is positioned correctly within the header layout.
48. The global search should remain aligned to the top-right area of the header according to the intended design.
49. Prevent the search component from expanding excessively or disrupting the overall header layout.
50. Adjust styling, sizing, spacing, and responsive behavior as needed so the search feature remains compact, usable, and visually consistent across all screen sizes.
51. Verify that header alignment and navigation elements remain properly positioned after the search component is updated.

52. Add a new menu item next to the existing "Quotation" menu item.
53. Name the new menu item "Cloudinary Folder Structure".
54. Create a dedicated HTML page for this feature.
55. Create a dedicated Vue.js file/component for this page and keep the implementation separate from existing pages.
56. The page should display the Cloudinary folder hierarchy in a readable tree or row-based structure.
57. Display folders, subfolders, and asset names so users can understand the organization of Cloudinary resources.
58. Do not render or display the actual images on this page.
59. Instead of showing image previews, display asset names, file names, paths, and folder relationships.
60. Make the structure easy to browse and understand so it can be used as a reference when locating Cloudinary assets.
61. Use data retrieved from Cloudinary where possible; otherwise, provide a structure that can be populated from Cloudinary data.
62. Ensure the page follows the existing project styling, navigation, and Vue.js architecture.
63. Make the page responsive and readable on both desktop and mobile devices.

64. Review the entire JavaScript folder structure and reorganize it into a clear, maintainable architecture.
65. Separate application-specific JavaScript written by developers from third-party libraries, vendor files, plugins, and downloaded dependencies.
66. Create a consistent folder structure for custom application code, shared utilities, Vue components, seasonal features, integrations, and vendor assets.
67. Group related JavaScript files according to their purpose and responsibility.
68. Use clear naming conventions and directory structures that make it easy to identify which files are maintained by the development team and which files are external dependencies.
69. If files are moved during the reorganization, update all script references, imports, exports, paths, build configurations, and related project settings accordingly.
70. Verify that all JavaScript functionality continues to work correctly after the restructuring.
71. Ensure that the new JavaScript architecture follows modern frontend development best practices and remains easy to maintain and extend in the future.
72. SEO is a high-priority requirement for this project and should be treated as one of the most important implementation tasks.
73. Perform a complete SEO audit of the project and identify all technical, content, metadata, and performance issues that could negatively impact search engine rankings.
74. Optimize every page with unique and meaningful page titles that target relevant party rental, event decoration, event planning, and celebration-related search terms.
75. Add unique meta descriptions to every page using keywords that potential customers are likely to search for when looking for party decorations, party rentals, event services, and related offerings.
76. Implement proper heading hierarchy (H1, H2, H3, etc.) across the entire website and ensure headings contain relevant keywords naturally.
77. Add structured data (Schema.org) wherever appropriate, including business information, services, contact information, reviews, FAQs, and other relevant entities.
78. Implement Open Graph and social sharing metadata for all major pages.
79. Implement Twitter/X card metadata for all major pages.
80. Ensure all images have meaningful and descriptive alt text.
81. Optimize image loading, image sizing, and image performance without negatively affecting quality.
82. Generate and maintain a sitemap for the entire website.
83. Configure and maintain a robots.txt file with appropriate rules for search engine indexing.
84. Ensure all pages are crawlable and indexable unless there is a specific reason to prevent indexing.
85. Review URL structures and make them search-engine friendly, readable, and consistent.
86. Remove duplicate metadata, duplicate titles, duplicate descriptions, and duplicate content issues where possible.
87. Improve internal linking throughout the website so search engines can easily discover and understand all content.
88. Create SEO-friendly content sections where appropriate to explain services, party decoration options, rental offerings, event categories, and related business services.
89. Add location-aware SEO content where appropriate to improve visibility for customers searching for services in relevant service areas.
90. Implement canonical URLs where necessary to prevent duplicate-content issues.
91. Ensure all pages have meaningful metadata even when content is generated dynamically.
92. Improve website performance, loading speed, and Core Web Vitals because search rankings are affected by performance.
93. Reduce unnecessary JavaScript, CSS, and asset loading wherever possible to improve SEO and page speed.
94. Verify mobile responsiveness across the entire website and fix any mobile usability issues that could affect search rankings.
95. Ensure all forms, navigation elements, and important content remain accessible to search engines and users.
96. Add FAQ sections where appropriate and implement FAQ structured data when applicable.
97. Add business-related structured data that helps search engines understand the services offered by the company.
98. Review all content and optimize it around real customer search intent rather than keyword stuffing.
99. Focus SEO efforts on users searching for party decorations, event decorations, party rentals, event rentals, celebration planning, birthday decorations, wedding decorations, corporate event decorations, and similar services.
100. Ensure the website follows current SEO best practices and is prepared for long-term organic search growth.
101. Document all SEO improvements, configurations, metadata strategies, structured data implementations, and optimization decisions in project documentation for future maintenance.
102. Before completion, perform a final SEO review and verify that all major pages meet technical SEO, content SEO, performance SEO, mobile SEO, and structured data requirements.