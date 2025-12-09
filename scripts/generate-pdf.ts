import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
	// Launch browser
	const browser = await chromium.launch({
		headless: true,
	});

	const page = await browser.newPage();

	// Option 1: Use local dev server (make sure it's running)
	const url = process.env.PDF_URL || "http://localhost:5173";

	// Option 2: Use built files (uncomment after building)
	// const url = `file://${resolve(__dirname, '../dist/index.html')}`;

	console.log(`Loading page: ${url}`);
	await page.goto(url, {
		waitUntil: "networkidle", // Wait for all resources to load
	});

	// Wait for any dynamic content to render
	await page.waitForTimeout(1000);

	// Generate PDF with ATS-optimized settings
	const pdfPath = resolve(__dirname, "../data/cv.pdf");
	await page.pdf({
		path: pdfPath,
		format: "A4",
		printBackground: true, // Include background colors/images
		margin: {
			top: "0.5cm",
			right: "0.5cm",
			bottom: "0.5cm",
			left: "0.5cm",
		},
		// ATS-friendly settings
		preferCSSPageSize: false, // Use standard A4
		displayHeaderFooter: false, // No headers/footers that confuse parsers
	});

	console.log(`PDF generated successfully at: ${pdfPath}`);
	await browser.close();
}

generatePDF().catch((error) => {
	console.error("Error generating PDF:", error);
	process.exit(1);
});
