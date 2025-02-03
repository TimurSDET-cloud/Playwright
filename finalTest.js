const { test, expect } = require('@playwright/test');

// Define test for logging into Demo App and verifying To Do item. Test Case 1
test('Verify "Implement user authentication" is in To Do column with correct tags', async ({ page }) => {
    // Navigate to Demo App login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    
    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/dashboard');

    // Navigate to "Web Application" section
    await page.click('text=Web Application');
    
    // Verify "Implement user authentication" is in the "To Do" column
    const todoItem = await page.locator(".todo-column .task:has-text('Implement user authentication')");
    await expect(todoItem).toBeVisible();

    // Confirm tags "Feature" and "High Priority"
    await expect(todoItem.locator(".tag:has-text('Feature')")).toBeVisible();
    await expect(todoItem.locator(".tag:has-text('High Priority')")).toBeVisible();
});

// Define test for logging into Demo App and verifying To Do item. Test Case 2
test('Verify "Fix navigation bug" is in To Do column with correct tags', async ({ page }) => {
    // Navigate to Demo App login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    
    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/dashboard'); // might be not needed

    // Navigate to "Web Application" section
    await page.click('text=Web Application');
    
    // Verify "Fix navigation bug" is in the "To Do" column
    const todoItem = await page.locator(".todo-column .task:has-text('Fix navigation bug')");
    await expect(todoItem).toBeVisible();

    // Confirm tag "Bug"
    await expect(todoItem.locator(".tag:has-text('Bug')")).toBeVisible();
});

// Define test for logging into Demo App and verifying In Progress item
test('Verify "Design system updates" is in In Progress column with correct tags', async ({ page }) => {
    // Navigate to Demo App login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    
    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/dashboard'); //optional again

    // Navigate to "Web Application" section
    await page.click('text=Web Application');
    
    // Verify "Design system updates" is in the "In Progress" column
    const inProgressItem = await page.locator(".in-progress-column .task:has-text('Design system updates')");
    await expect(inProgressItem).toBeVisible();

    // Confirm tag "Design"
    await expect(inProgressItem.locator(".tag:has-text('Design')")).toBeVisible();
});

// Define test for logging into Demo App and verifying To Do item
test('Verify "Push notification system" is in To Do column with correct tags', async ({ page }) => {
    // Navigate to Demo App login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    
    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/dashboard'); 

    // Navigate to "Mobile Application" section
    await page.click('text=Mobile Application');
    
    // Verify "Push notification system" is in the "To Do" column
    const todoItem = await page.locator(".todo-column .task:has-text('Push notification system')");
    await expect(todoItem).toBeVisible();

    // Confirm tag "Feature"
    await expect(todoItem.locator(".tag:has-text('Feature')")).toBeVisible();
});

// Define test for logging into Demo App and verifying In Progress item
test('Verify "Offline mode" is in In Progress column with correct tags', async ({ page }) => {
    // Navigate to Demo App login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    
    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/dashboard'); 

    // Navigate to "Mobile Application" section
    await page.click('text=Mobile Application');
    
    // Verify "Offline mode" is in the "In Progress" column
    const inProgressItem = await page.locator(".in-progress-column .task:has-text('Offline mode')");
    await expect(inProgressItem).toBeVisible();

    // Confirm tags "Feature" and "High Priority"
    await expect(inProgressItem.locator(".tag:has-text('Feature')")).toBeVisible();
    await expect(inProgressItem.locator(".tag:has-text('High Priority')")).toBeVisible();
});

// Define test for logging into Demo App and verifying Done item
test('Verify "App icon design" is in Done column with correct tags', async ({ page }) => {
    // Navigate to Demo App login page
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    
    // Perform login
    await page.fill('#username', 'admin');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    
    // Wait for navigation after login
    await page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/dashboard'); 
    // Navigate to "Mobile Application" section
    await page.click('text=Mobile Application');
    
    // Verify "App icon design" is in the "Done" column
    const doneItem = await page.locator(".done-column .task:has-text('App icon design')");
    await expect(doneItem).toBeVisible();

    // Confirm tag "Design"
    await expect(doneItem.locator(".tag:has-text('Design')")).toBeVisible();
});