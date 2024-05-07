## GUI

### Test Navigation
**Description**  
This test verifies the navigation bar's visibility and layout.

**Steps:**
1. Open the application page on address 127.0.0.1:3007.

**Expected Result:**  
- The navigation bar should be visible at the top of the page.
- The navigation bar should contain the "Wybierz zakres znaków jakie mają zawierać posty:" heading.
- Two input fields labeled "Od:" and "Do:" should be present for specifying character ranges.
- An "apply" button should be available for applying filters.

**Actual Result:**  
The navigation bar is visible and contains the expected elements. The layout adjusts smoothly to different screen sizes.

**Status:**  Pass

**Notes:**  

---

### Test Post Display Settings
**Description**  
This test ensures the proper display of post display settings.

**Steps:**
1. Open the application page on address 127.0.0.1:3007.

**Expected Result:**  
- The post display settings section should be visible below the navigation bar.
- It should contain a label "Number of posts:" and a dropdown menu to select the number of posts to display.

**Actual Result:**  
The post display settings section is visible and contains the expected elements. The layout adjusts smoothly to different screen sizes.

**Status:**  Pass

**Notes:**  

---

### Test Post Section
**Description**  
This test verifies the layout and content of the post section.

**Steps:**
1. Open the application page on address 127.0.0.1:3007.

**Expected Result:**  
- Posts should be displayed below the post display settings section.
- Each post should have a title, body, and a comment section.
- The comment section should display the specified number of comments.
- Posts should be arranged properly without overlapping.

**Actual Result:**  
The post section displays posts correctly with titles, bodies, and comment sections. The layout adjusts smoothly to different screen sizes.

**Status:**  Fail

**Notes:**  Posts may require some rework to make them more distinguishible from other elements

---

### Test Comment Section
**Description**  
This test ensures the correct appearance of the comment section within each post.

**Steps:**
1. Open the application page on address 127.0.0.1:3007.

**Expected Result:**  
- Comment sections should be displayed below each post.
- Each comment section should contain the specified number of comments.
- Comments should be properly formatted and distinguishable from each other.
- Comments should not overlap or leak out of their containers.

**Actual Result:**  
The comment sections are displayed correctly below each post with the specified number of comments. Comments are properly formatted and distinguishable. The layout adjusts smoothly to different screen sizes.

**Status:**  Pass

**Notes:**  

---

### Test Comment Display
**Description**  
This test checks the display of comments within each post.

**Steps:**
1. Open the application page on address 127.0.0.1:3007.

**Expected Result:**  
- Comments should be visible within each post's comment section.
- Each comment should display the user's email, name, and content.
- Comments should not overlap or leak out of their containers.

**Actual Result:**  
Comments are displayed within each post's comment section as expected. Each comment displays the user's email and content properly. The layout adjusts smoothly to different screen sizes.

**Status:**  Pass

**Notes:**  
