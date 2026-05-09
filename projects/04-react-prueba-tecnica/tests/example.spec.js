import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CATS_URL = 'https://cataas.com'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.locator('p')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CATS_URL)).toBeTruthy()
})

test('app shows new random fact and image when button is clicked', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  const button = await page.getByRole('button', { name: 'Get new fact' })
  await button.click()

  const text = await page.locator('p')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CATS_URL)).toBeTruthy()
})
