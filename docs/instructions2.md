1. Review the landing page hero/banner section and reduce its overall height to improve the initial viewport experience and content visibility.

2. Ensure the hero section remains visually appealing, responsive, and consistent across desktop, tablet, and mobile devices after the height adjustment.

3. Review the two tiles/cards displayed below the hero section.

4. Improve the visual design of these tiles where appropriate, including spacing, typography, colors, shadows, borders, hover states, and overall presentation.

5. Preserve the existing functionality and content of the tiles while improving their visual quality.

6. Review the section that uses the light green background and identify the cause of the broken or corrupted styling.

7. Fix any background rendering, image loading, CSS, layout, overlay, gradient, or responsiveness issues affecting this section.

8. Ensure the section displays correctly across all supported screen sizes and browsers.

9. Review the content structure of the sections that follow the light green background section.

10. Identify any duplicate, unnecessary, low-value, or repetitive sections.

11. Remove one of the redundant sections where appropriate.

12. Replace removed content with a more meaningful, useful, and business-focused section that improves the user experience and supports the website's goals.

13. Ensure the overall landing page flow remains logical, visually balanced, and conversion-focused after the changes.

14. Review spacing and visual hierarchy between all landing page sections and make improvements where necessary.

15. Verify that all changes maintain consistency with the existing branding, design language, and user experience established throughout the project.


16. Review the "Special Offer Just for You" section on the landing page.

17. Limit the number of displayed products, offers, or items in this section to a maximum of six entries.

18. Ensure the selection logic remains consistent and displays the most appropriate six items according to the existing business rules.

19. Maintain a clean and balanced layout when only six items are displayed.

20. Verify that the section remains fully responsive across desktop, tablet, and mobile devices.

21. If additional items exist beyond the first six, ensure they do not negatively affect page performance or layout rendering.

22. Review the spacing, alignment, and visual presentation of the six displayed items and improve the user experience where appropriate.

23. Review the Frequently Asked Questions (FAQ) section on the website.

24. Redesign the FAQ user interface to provide a more polished, modern, and visually appealing experience.

25. The current FAQ presentation should be considered a candidate for redesign if it does not meet the overall visual quality expected for a premium party and event services website.

26. Explore alternative design patterns for the FAQ section, including but not limited to modern accordions, expandable cards, interactive panels, animated transitions, grouped categories, or other user-friendly approaches.

27. Ensure the FAQ design aligns with the overall branding, color palette, typography, and design language of the website.

28. Improve spacing, readability, typography, visual hierarchy, and interaction feedback throughout the FAQ section.

29. Add smooth animations or transitions where appropriate to enhance the user experience without negatively affecting performance.

30. Ensure the FAQ section remains fully responsive and easy to use on desktop, tablet, and mobile devices.

31. Preserve all existing FAQ content unless there is a clear reason to improve wording, organization, or clarity.

32. Organize FAQ items logically and make it easy for users to find answers quickly.

33. Ensure accessibility best practices are followed, including keyboard navigation, screen-reader compatibility, and sufficient visual contrast.

34. The final FAQ implementation should feel consistent with a high-quality event, party decoration, and celebration-focused website rather than a generic template component.

35. Review the "About Chase in Dreams Events" section and its surrounding layout.

36. Identify the unnecessary empty space between the "About Chase in Dreams Events" section and the footer.

37. Remove the excessive gap while maintaining proper visual separation between content and the footer.

38. Review margins, padding, container sizing, layout rules, and responsive behavior that may be causing the spacing issue.

39. Ensure the footer connects naturally to the end of the page content without leaving large unused areas.

40. Verify the spacing behavior on desktop, tablet, and mobile devices to ensure consistency across all screen sizes.

41. Perform a final layout review of the lower portion of the landing page to ensure visual balance after the spacing adjustment.

42. Review the Shop page category and tab navigation that is generated from Cloudinary folders.

43. Identify the folder that contains brand-related assets and internal branding resources.

44. Exclude the brand folder from the customer-facing Shop page navigation.

45. Ensure the brand folder does not appear as a visible tab, category, filter option, or browsing destination within the Shop page.

46. The removal should only affect the public Shop page user interface and should not delete, modify, or remove the underlying Cloudinary assets.

47. Preserve access to the brand folder for administrative, development, documentation, and maintenance purposes where required.

48. Ensure all remaining Cloudinary folders continue to load and function correctly after the brand folder is excluded.

49. Verify that removing the brand folder does not introduce layout issues, empty states, navigation errors, or filtering problems within the Shop page.

50. Document the exclusion logic so future developers understand why the brand folder is intentionally hidden from customer-facing views.

51. Redesign the "Cloudinary Folder Structure" page to use a folder-first navigation experience.

52. On the initial page load, display only the list of available Cloudinary folders and subfolders.

53. Do not automatically display all assets from every folder on the main view.

54. Present folders in a clean, organized, and easy-to-navigate interface.

55. When a user selects or clicks a folder, load and display the contents of that specific folder.

56. Display folder contents in a structured list, table, tree view, or similar format that is easy to browse.

57. For each asset, display relevant Cloudinary information and metadata where available.

58. Include asset details such as file name, public ID, folder path, resource type, format, dimensions, file size, creation date, update date, tags, and any additional metadata available through the Cloudinary response.

59. Display metadata in a readable and organized layout rather than as raw JSON.

60. Group metadata logically so users can quickly understand asset information.

61. Provide a clear navigation method to return from asset view to the folder list.

62. Support browsing between folders without requiring a full page refresh.

63. Implement the functionality using Vue.js and follow the project's existing architecture and component structure.

64. Optimize the page so that asset data is only loaded when a folder is selected rather than loading everything at once.

65. Ensure the page remains performant even when folders contain large numbers of assets.

66. Add loading states, empty states, and error handling for Cloudinary requests.

67. Maintain a responsive layout that works well on desktop, tablet, and mobile devices.

68. Preserve the existing purpose of the page as a Cloudinary asset reference and management-view tool while significantly improving usability and navigation.

69. Integrate Supabase into the project and establish a working connection between the application and the existing Supabase environment.

70. Use the existing Supabase project and connect to the database named "RD Theme".

71. Verify that the Supabase connection is functioning correctly in local development before proceeding with database-related implementation.

72. Create a dedicated table for company information if it does not already exist.

73. Name the table `company` and structure it in a way that supports company profile and business information management.

74. Review the existing website content and identify all company-related information currently displayed throughout the site.

75. Gather company information from relevant locations including the footer, contact sections, business information areas, and other company-related content.

76. Store the identified company information in the Supabase `company` table.

77. Include information such as company name, addresses, contact numbers, email addresses, social media links, business descriptions, operating hours, and any other relevant business details available within the project.

78. Replace hardcoded company information where appropriate and retrieve the information dynamically from Supabase.

79. Create a dedicated service, utility, or data-access layer for all company-related Supabase operations.

80. Ensure that company information can be loaded efficiently and reused throughout the application.

81. Add proper error handling, loading states, and fallback behavior if Supabase data is temporarily unavailable.

82. Ensure that the footer, contact-related sections, and any company information displays continue to function correctly after the migration.

83. Follow the existing Vue.js architecture and project conventions when implementing Supabase integration.

84. Keep database configuration, environment variables, API keys, and connection settings secure and properly documented.

85. Document the Supabase setup, database structure, table schema, and integration approach in project documentation for future maintenance.

86. Verify that the project can successfully read company information from Supabase and display it correctly throughout the website.

87. Perform end-to-end testing of the Supabase integration before considering the task complete.

88. Add a new footer link or footer action named "Seller Login".

89. Position the "Seller Login" entry in a discreet location within the footer so it is accessible without interfering with the primary customer-facing navigation.

90. Ensure the styling of the "Seller Login" link is consistent with the existing footer design and branding.

91. Create a dedicated Seller Login page for this functionality.

92. Implement the Seller Login page using the existing Vue.js architecture and project conventions.

93. Connect Seller Login authentication to Supabase authentication services.

94. Use secure authentication practices and avoid storing sensitive credentials in the frontend.

95. Implement proper login validation, error handling, loading states, and user feedback.

96. Ensure only authenticated sellers can access seller-specific functionality and protected pages.

97. Create a foundation for future seller-related features, including product management, inventory management, quotation management, media management, and administrative functions.

98. Implement route protection for seller-only pages and redirect unauthenticated users to the Seller Login page.

99. Keep the Seller Login implementation modular and scalable so additional seller features can be added in future phases without major architectural changes.

100. Document the authentication flow, Supabase integration, access control approach, and any required configuration steps in the project documentation.

101. Implement the Seller Login as a dedicated button in the footer rather than a registration or account creation flow.

102. Do not provide public registration, self-signup, account creation, or user onboarding functionality.

103. Seller accounts are managed internally and credentials are provided directly by the business.

104. Create a dedicated seller authentication structure in Supabase for internal seller access.

105. Create a dedicated `sellers` table if an appropriate table does not already exist.

106. Include fields such as seller name, username, email (optional), password/authentication identifier, status, role, creation date, and last login information where appropriate.

107. Seed the database with three sample seller accounts for development and testing purposes.

108. Use placeholder development credentials that can be replaced later by production seller accounts.

109. Document all development credentials clearly and separately so they can be removed or replaced before production deployment.

110. After successful login, display the seller's name in the website header.

111. The seller name should be visible only when an authenticated seller session exists.

112. Add seller session handling so login state persists appropriately across page navigation.

113. Restrict access to the "Quotation" page and related quotation functionality.

114. Restrict access to the "Cloudinary Folder Structure" page and related functionality.

115. Only authenticated sellers should be able to view or access these protected areas.

116. Normal visitors and unauthenticated users must not be able to access seller-only pages through navigation, direct URLs, or other application routes.

117. Hide seller-only navigation items from unauthenticated users.

118. Display seller-only navigation items dynamically when a valid seller session exists.

119. Implement proper route protection and authorization checks for all seller-only functionality.

120. Redirect unauthorized users to the Seller Login page when they attempt to access protected content.

121. Add logout functionality and ensure seller sessions can be terminated securely.

122. Ensure the authentication and authorization implementation follows Supabase best practices and project security requirements.

123. Document the seller authentication architecture, table structure, permissions model, protected routes, and session management approach in project documentation.


124. Redesign and enhance the seller-only Quotation page to function as a quotation management tool rather than a simple static page.

125. Restrict all quotation creation, editing, viewing, and saving functionality to authenticated sellers only.

126. Maintain visual consistency with the rest of the website and follow the existing design language, branding, colors, spacing, and typography.

127. Add a searchable product selection area at the top of the quotation page.

128. The search field should support suggestions, autocomplete behavior, and item selection.

129. Search results should be sourced from the available product, asset, or catalog data already used within the project.

130. When a seller selects an item from the search suggestions, add the selected item as a new row in the quotation table.

131. Prevent duplicate UI issues and ensure item selection remains intuitive and easy to use.

132. Create a quotation table that supports adding, removing, and managing multiple quotation items.

133. Each row should contain at minimum:
    - Item name
    - Quantity field
    - Unit price field
    - Subtotal field
    - Remove action

134. Sellers should be able to manually enter quantity values.

135. Sellers should be able to manually enter pricing values.

136. Quantity and pricing should not be automatically locked to product data.

137. The quotation system should support custom pricing entered by the seller.

138. Calculate row subtotals based on quantity multiplied by unit price.

139. Update row subtotals automatically whenever quantity or price values change.

140. Display quotation totals at the bottom of the page.

141. Include at minimum:
    - Total item count
    - Subtotal amount
    - Grand total amount

142. Ensure all totals update in real time as quotation items are modified.

143. Add optional customer information fields above the quotation table.

144. Include optional fields for:
    - Customer name
    - Customer email address

145. Additional customer information fields may be added if useful to the quotation workflow.

146. Create a dedicated `quotations` table in Supabase.

147. Create any supporting quotation item tables necessary to maintain a normalized database structure.

148. Store quotation header information separately from quotation line items where appropriate.

149. Save all quotation data to Supabase.

150. Ensure quotations can be retrieved, viewed, and edited later.

151. Associate saved quotations with the authenticated seller who created them.

152. Store quotation creation date, update date, seller information, customer information, totals, and quotation line items.

153. Add validation to prevent invalid quotation data from being saved.

154. Provide clear success, error, and loading states during save operations.

155. Ensure the quotation page remains responsive and easy to use on desktop, tablet, and mobile devices.

156. Follow Vue.js best practices and implement the quotation functionality using reusable Vue components where appropriate.

157. Create a maintainable architecture that supports future quotation features such as PDF generation, quotation approval workflows, quotation status tracking, customer sharing, and reporting.

158. Document the quotation database schema, data flow, Supabase integration, and seller workflow in project documentation.

159. Perform end-to-end testing to verify quotation creation, calculation, saving, retrieval, editing, and seller access control before considering the implementation complete.



160. Extend the existing `company` table to support quotation number generation and tracking.

161. Add a column that stores the latest quotation sequence number used by the system.

162. Use this value as the source for generating new quotation reference numbers.

163. Every time a new quotation is created, increment the stored quotation sequence number by one.

164. Generate quotation references using the following format:

    QT-00000001

165. The numeric portion of the quotation reference must always be zero-padded to eight digits.

166. Example quotation references:
    - QT-00000001
    - QT-00000002
    - QT-00000003
    - QT-00000125
    - QT-00001567

167. Automatically generate the quotation reference number when a quotation is created.

168. Ensure that quotation reference numbers are unique across the entire system.

169. Store the generated quotation reference in the quotations table and associate it with the quotation record.

170. Display the quotation reference prominently within the quotation page.

171. Include the quotation reference in quotation listings, quotation detail pages, saved records, exports, and future reporting functionality.

172. Prevent duplicate quotation numbers from being generated even if multiple sellers create quotations concurrently.

173. Implement the sequence generation in a reliable and database-safe manner.

174. Add validation and error handling for quotation number generation failures.

175. Document the quotation numbering strategy, database fields, increment logic, and formatting rules in the project documentation.


176. Extend the quotation management system to support quotation search, retrieval, editing, and email delivery.

177. Add a quotation search area within the seller-only Quotation page.

178. Allow sellers to search previously created quotations using one or more of the following:
    - Quotation reference number
    - Customer name
    - Customer email
    - Seller name
    - Creation date
    - General keyword search

179. Display matching quotation results in a clear and user-friendly format.

180. Allow sellers to select an existing quotation from the search results.

181. When an existing quotation is selected, automatically load and populate the quotation form with the saved quotation data.

182. Restore all quotation information including:
    - Quotation reference number
    - Customer information
    - Quotation items
    - Quantities
    - Pricing
    - Totals
    - Seller information

183. Allow sellers to update and resave existing quotations.

184. Preserve quotation history and data integrity when quotations are edited.

185. Add a dedicated customer email field to the quotation workflow.

186. The customer email field should be visible, editable, and stored with the quotation record.

187. Validate email addresses before allowing email delivery actions.

188. Add a "Send Quotation" action to the quotation interface.

189. When a seller clicks "Send Quotation", deliver the quotation to the specified customer email address.

190. Implement a proper email delivery workflow rather than a placeholder implementation.

191. Generate a professional quotation email template that matches the company's branding and presentation standards.

192. Include the quotation reference number in the email subject and email content.

193. Include customer information, quotation details, itemized rows, totals, and company information within the email.

194. Ensure the quotation layout is readable across desktop and mobile email clients.

195. Support future PDF attachment functionality through a maintainable architecture.

196. Store quotation email delivery history where appropriate.

197. Track whether a quotation has been sent, when it was sent, and to which email address it was delivered.

198. Display quotation delivery status within the seller interface.

199. Provide clear success, failure, and retry messaging for email delivery actions.

200. Implement secure email delivery using a supported email provider, service, or backend workflow that is appropriate for production use.

201. Ensure email-related configuration values, credentials, API keys, and secrets are stored securely and are not exposed in frontend code.

202. Document the quotation email workflow, delivery architecture, configuration requirements, and future extension points in project documentation.

203. Perform end-to-end testing to verify quotation creation, quotation retrieval, quotation updates, quotation emailing, and quotation status tracking before considering the implementation complete.

204. Previously saved quotations must be treated as finalized records.

205. When a seller searches for and opens an existing quotation, the quotation should load in read-only mode by default.

206. Sellers must be able to review quotation details, customer information, quotation items, totals, and delivery history.

207. Existing quotations must not be modified, overwritten, or edited after they have been saved.

208. The quotation reference number must remain permanently associated with the original quotation record.

209. Sellers may resend an existing quotation to a customer email address if required, but resending must not modify the original quotation data.

210. If changes are required to an existing quotation, create a new quotation rather than modifying the original saved record.

211. Preserve quotation history and maintain an immutable record of all finalized quotations.

212. Ensure that quotation searches, quotation viewing, and quotation email delivery continue to function correctly while preserving the read-only nature of saved quotations.

213. Add a quotation cloning feature to the seller quotation management workflow.

214. The cloning feature must be available when viewing a previously saved quotation.

215. A cloned quotation must create a completely new quotation record rather than modifying the original quotation.

216. When a quotation is cloned, copy all relevant quotation information including:
    - Customer information
    - Quotation items
    - Quantities
    - Pricing
    - Notes
    - Other quotation-related data

217. Generate a brand-new quotation reference number for the cloned quotation.

218. The cloned quotation must never reuse the original quotation reference number.

219. The newly generated quotation reference must follow the same numbering format and sequence rules defined for all quotations.

220. After cloning, load the cloned quotation into an editable quotation creation form.

221. Sellers should be able to modify the cloned quotation before saving it as a new quotation.

222. Saving a cloned quotation must create a new database record with its own creation date, quotation reference number, seller association, and quotation history.

223. Maintain a relationship between the original quotation and the cloned quotation for auditing and traceability purposes.

224. Store the original quotation reference number as a source reference when a quotation is cloned.

225. Display clone history information where appropriate so future users can identify which quotation was used as the source.

226. Ensure the original quotation remains unchanged and continues to function as a read-only finalized record.

227. Add clear user interface actions for:
    - View Quotation
    - Resend Quotation
    - Clone Quotation

228. Follow the existing quotation security, seller authorization, and Supabase data-access patterns when implementing the cloning functionality.

229. Document the cloning workflow, database relationships, reference-number generation process, and audit-trail behavior in project documentation.


230. Support quotation items that do not have associated images or visual assets.

231. The quotation workflow should not depend on image availability.

232. Display item names as the primary identifier within quotation tables and quotation records.

233. Allow sellers to manually adjust the displayed item name while creating a new quotation.

234. Sellers should be able to rename an item in the quotation context without modifying the original product, Cloudinary asset, folder structure, or source catalog data.

235. The customized item name should be stored only within the quotation record.

236. This functionality should support situations where sellers need to provide more descriptive, customer-friendly, or context-specific item names.

237. The original source item and the quotation-specific display name should be stored separately where appropriate.

238. When viewing previously saved quotations in read-only mode, quotation item names must not be editable.

239. Finalized quotations must preserve the exact item names that were saved at the time the quotation was created.

240. When a quotation is cloned, the cloned quotation should inherit the saved item names from the original quotation.

241. After cloning, sellers may modify item names within the cloned quotation before saving it as a new quotation.

242. Ensure that item name customization works correctly with quotation creation, saving, viewing, cloning, searching, emailing, and future PDF generation functionality.

243. Document the distinction between source item names and quotation-specific item names in the project documentation.