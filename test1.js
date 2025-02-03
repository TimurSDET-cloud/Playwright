const { test, expect } = require('@playwright/test');

// Define test for logging into Demo App and verifying To Do item
test('Verify "Implement user authentication" is in To Do column with correct tags', async ({ page }) => {
    // Navigate to Demo App login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    
    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/dashboard'); // Adjust based on app behavior

    // Navigate to "Web Application" section
    await page.click('text=Web Application');
    
    // Verify "Implement user authentication" is in the "To Do" column
    const todoItem = await page.locator(".todo-column .task:has-text('Implement user authentication')");
    await expect(todoItem).toBeVisible();

    // Confirm tags "Feature" and "High Priority"
    await expect(todoItem.locator(".tag:has-text('Feature')")).toBeVisible();
    await expect(todoItem.locator(".tag:has-text('High Priority')")).toBeVisible();
});
