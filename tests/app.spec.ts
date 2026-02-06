import { test, expect } from '@playwright/test';
import * as path from 'path';

const screenshotDir = './screenshots';
const BASE = '/sunseeker';

async function takeScreenshot(page: any, name: string, fullPage = true) {
  const screenshotPath = path.join(screenshotDir, `${name}.png`);
  await page.screenshot({
    path: screenshotPath,
    fullPage,
  });
  console.log(`Screenshot saved: ${screenshotPath}`);
}

test.describe('Landing Page Tests', () => {
  test('should display hero section correctly', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Check hero section
    await expect(page.locator('.hero')).toBeVisible();
    await expect(page.locator('.hero h1')).toContainText('Find the Perfect Angle');

    // Check CTA buttons
    const appStoreButton = page.locator('a:has-text("App Store")').first();
    const playStoreButton = page.locator('a:has-text("Google Play")').first();
    await expect(appStoreButton).toBeVisible();
    await expect(playStoreButton).toBeVisible();

    await takeScreenshot(page, '01-landing-hero');
  });

  test('should display feature cards', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Check feature section
    const featureGrid = page.locator('.features-grid');
    await expect(featureGrid).toBeVisible();

    // Verify all 6 features are present
    const featureCards = page.locator('.feature-card');
    await expect(featureCards).toHaveCount(6);

    // Check feature titles
    await expect(page.locator('.feature-card:has-text("Real-Time Sun Tracking")')).toBeVisible();
    await expect(page.locator('.feature-card:has-text("Location-Based")')).toBeVisible();
    await expect(page.locator('.feature-card:has-text("Seasonal Adjustments")')).toBeVisible();
    await expect(page.locator('.feature-card:has-text("Energy Estimates")')).toBeVisible();
    await expect(page.locator('.feature-card:has-text("Smart Reminders")')).toBeVisible();
    await expect(page.locator('.feature-card:has-text("Eco Impact")')).toBeVisible();

    await takeScreenshot(page, '02-landing-features');
  });

  test('should display how it works section', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Scroll to how it works section
    const howItWorks = page.locator('.how-it-works');
    await howItWorks.scrollIntoViewIfNeeded();

    await expect(howItWorks).toBeVisible();
    await expect(page.locator('h2:has-text("How SunSeeker Works")')).toBeVisible();

    // Check 3 steps
    const steps = page.locator('.step');
    await expect(steps).toHaveCount(3);

    await takeScreenshot(page, '03-landing-how-it-works');
  });

  test('should display blog preview section', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Scroll to blog preview section
    const blogSection = page.locator('.blog-preview');
    await blogSection.scrollIntoViewIfNeeded();

    await expect(blogSection).toBeVisible();
    await expect(page.locator('h2:has-text("Solar Energy Tips")')).toBeVisible();

    await takeScreenshot(page, '04-landing-blog-preview');
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Check header navigation
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check nav links in .nav-links
    await expect(page.locator('.nav-links a:has-text("Home")')).toBeVisible();
    await expect(page.locator('.nav-links a:has-text("Blog")')).toBeVisible();
    await expect(page.locator('.nav-links a:has-text("About")')).toBeVisible();

    await takeScreenshot(page, '05-landing-header');
  });

  test('should display CTA section', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Scroll to CTA section
    const ctaSection = page.locator('.cta');
    await ctaSection.scrollIntoViewIfNeeded();

    await expect(ctaSection).toBeVisible();
    await expect(page.locator('.cta h2:has-text("Start Maximizing")')).toBeVisible();

    await takeScreenshot(page, '06-landing-cta');
  });
});

test.describe('About Page Tests', () => {
  test('should display about page content', async ({ page }) => {
    await page.goto(`${BASE}/about`);

    // Check main heading
    await expect(page.locator('.about-hero h1:has-text("About SunSeeker")')).toBeVisible();

    await takeScreenshot(page, '07-about-hero');
  });

  test('should display mission section', async ({ page }) => {
    await page.goto(`${BASE}/about`);

    // Check mission content
    await expect(page.locator('h2:has-text("Our Mission")')).toBeVisible();

    await takeScreenshot(page, '08-about-mission');
  });

  test('should display feature differentiators', async ({ page }) => {
    await page.goto(`${BASE}/about`);

    // Check for differentiating features
    await expect(page.locator('strong:has-text("Truly Free")')).toBeVisible();
    await expect(page.locator('strong:has-text("Privacy-First")')).toBeVisible();
    await expect(page.locator('strong:has-text("Science-Based")')).toBeVisible();
    await expect(page.locator('strong:has-text("Open Source")')).toBeVisible();

    await takeScreenshot(page, '09-about-features');
  });

  test('should display stats section', async ({ page }) => {
    await page.goto(`${BASE}/about`);

    // Check stats
    const statsSection = page.locator('.about-stats');
    await statsSection.scrollIntoViewIfNeeded();

    await expect(page.locator('.stat-number:has-text("25%")')).toBeVisible();
    await expect(page.locator('.stat-number:has-text("100%")')).toBeVisible();
    // Check the "0" stat - using text-is for exact match
    await expect(page.locator('.stat-number', { hasText: /^0$/ })).toBeVisible();

    await takeScreenshot(page, '10-about-stats');
  });

  test('should display CTA buttons', async ({ page }) => {
    await page.goto(`${BASE}/about`);

    // Check CTA buttons
    await expect(page.locator('a:has-text("View on GitHub")')).toBeVisible();
    await expect(page.locator('a:has-text("Read Our Blog")')).toBeVisible();

    await takeScreenshot(page, '11-about-cta');
  });
});

test.describe('Blog Page Tests', () => {
  test('should display blog index with posts', async ({ page }) => {
    await page.goto(`${BASE}/blog`);

    // Check blog header
    await expect(page.locator('.blog-header h1:has-text("Solar Energy Blog")')).toBeVisible();

    await takeScreenshot(page, '12-blog-index');
  });

  test('should display blog cards', async ({ page }) => {
    await page.goto(`${BASE}/blog`);

    // Check for blog cards
    const blogCards = page.locator('.blog-card');
    await expect(blogCards.first()).toBeVisible();

    // Should have 3 blog posts
    await expect(blogCards).toHaveCount(3);

    await takeScreenshot(page, '13-blog-cards');
  });

  test('should have featured post styling', async ({ page }) => {
    await page.goto(`${BASE}/blog`);

    // Check featured post
    const featuredPost = page.locator('.blog-card.featured');
    await expect(featuredPost).toBeVisible();

    await takeScreenshot(page, '14-blog-featured');
  });

  test('should navigate to first blog post', async ({ page }) => {
    await page.goto(`${BASE}/blog`);

    // Click first blog link
    const firstPost = page.locator('.blog-card a').first();
    await firstPost.click();

    // Verify we're on a blog post page
    await expect(page.locator('article')).toBeVisible();

    await takeScreenshot(page, '15-blog-post-detail');
  });
});

test.describe('Individual Blog Post Tests', () => {
  test('should display solar energy basics post', async ({ page }) => {
    await page.goto(`${BASE}/blog/understanding-solar-energy-basics/`);

    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();

    await takeScreenshot(page, '16-blog-solar-basics');
  });

  test('should display optimal angle guide post', async ({ page }) => {
    await page.goto(`${BASE}/blog/optimal-solar-panel-angle-guide/`);

    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();

    await takeScreenshot(page, '17-blog-angle-guide');
  });

  test('should display maintenance tips post', async ({ page }) => {
    await page.goto(`${BASE}/blog/solar-panel-maintenance-tips/`);

    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('h1')).toBeVisible();

    await takeScreenshot(page, '18-blog-maintenance-tips');
  });
});

test.describe('Navigation Tests', () => {
  test('should navigate between pages correctly', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Navigate to About
    await page.click('.nav-links a:has-text("About")');
    await expect(page).toHaveURL(/.*about/);
    await expect(page.locator('.about-hero h1')).toBeVisible();

    await takeScreenshot(page, '19-nav-about');

    // Navigate to Blog
    await page.click('.nav-links a:has-text("Blog")');
    await expect(page).toHaveURL(/.*blog/);

    await takeScreenshot(page, '20-nav-blog');

    // Navigate back to Home
    await page.click('.nav-links a:has-text("Home")');
    await expect(page).toHaveURL(/.*sunseeker\/?$/);

    await takeScreenshot(page, '21-nav-home');
  });

  test('should display footer correctly', async ({ page }) => {
    await page.goto(`${BASE}/`);

    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    await expect(footer).toBeVisible();
    await expect(page.locator('footer a:has-text("About")')).toBeVisible();
    await expect(page.locator('footer a:has-text("Blog")')).toBeVisible();
    await expect(page.locator('footer a:has-text("GitHub")')).toBeVisible();

    await takeScreenshot(page, '22-footer');
  });

  test('should have footer sections', async ({ page }) => {
    await page.goto(`${BASE}/`);

    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    // Check footer sections
    await expect(page.locator('.footer-section:has-text("Product")')).toBeVisible();
    await expect(page.locator('.footer-section:has-text("Resources")')).toBeVisible();
    await expect(page.locator('.footer-section:has-text("Legal")')).toBeVisible();

    await takeScreenshot(page, '23-footer-sections');
  });
});

test.describe('Responsive Design Tests', () => {
  test('should display correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(`${BASE}/`);

    await expect(page.locator('.hero')).toBeVisible();

    // Check mobile menu button is visible
    const menuButton = page.locator('.mobile-menu-toggle');
    await expect(menuButton).toBeVisible();

    await takeScreenshot(page, '24-mobile-home');

    await page.goto(`${BASE}/about`);
    await takeScreenshot(page, '25-mobile-about');

    await page.goto(`${BASE}/blog`);
    await takeScreenshot(page, '26-mobile-blog');
  });

  test('should toggle mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(`${BASE}/`);

    // Click mobile menu toggle
    const menuButton = page.locator('.mobile-menu-toggle');
    await menuButton.click();

    // Check that nav is expanded
    await expect(page.locator('nav')).toHaveClass(/menu-open/);

    await takeScreenshot(page, '27-mobile-menu-open');
  });

  test('should display correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(`${BASE}/`);

    await takeScreenshot(page, '28-tablet-home');

    await page.goto(`${BASE}/about`);
    await takeScreenshot(page, '29-tablet-about');

    await page.goto(`${BASE}/blog`);
    await takeScreenshot(page, '30-tablet-blog');
  });
});

test.describe('Link Tests', () => {
  test('should have valid internal links', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Test features anchor link
    const featuresLink = page.locator('.nav-links a:has-text("Features")');
    await featuresLink.click();
    await expect(page).toHaveURL(/.*#features/);

    await takeScreenshot(page, '31-features-anchor');
  });

  test('should have app store links', async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Check app store buttons have href
    const appStoreButton = page.locator('.hero-buttons a:has-text("App Store")');
    await expect(appStoreButton).toHaveAttribute('href', '/sunseeker/download#ios');

    const playStoreButton = page.locator('.hero-buttons a:has-text("Google Play")');
    await expect(playStoreButton).toHaveAttribute('href', '/sunseeker/download#android');

    await takeScreenshot(page, '32-app-store-links');
  });

  test('should have working legal pages', async ({ page }) => {
    await page.goto(`${BASE}/privacy`);
    await expect(page.locator('h1:has-text("Privacy Policy")')).toBeVisible();

    await page.goto(`${BASE}/terms`);
    await expect(page.locator('h1:has-text("Terms of Service")')).toBeVisible();
  });

  test('should have working download page', async ({ page }) => {
    await page.goto(`${BASE}/download`);
    await expect(page.locator('h1:has-text("Download SunSeeker")')).toBeVisible();
    await expect(page.locator('#ios')).toBeVisible();
    await expect(page.locator('#android')).toBeVisible();
  });
});
