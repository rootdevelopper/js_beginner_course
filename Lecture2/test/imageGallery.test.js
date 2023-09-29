// Import necessary modules for testing
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { fireEvent } = require('@testing-library/dom');
const { screen } = require('@testing-library/dom');
const { TextEncoder } = require('text-encoding');

// Load the HTML content from the file
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Create a JSDOM environment
// const dom = new JSDOM(html);

const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
global.document = dom.window.document;
global.window = dom.window;
global.TextEncoder = TextEncoder;

// Set up a global variable for document and window
global.document = dom.window.document;
global.window = dom.window;

// Import the JavaScript file to be tested
const { displayImages, filterImages } = require('./script');

describe('Image Gallery', () => {
    beforeEach(() => {
        // Clear the search input
        const searchInput = screen.getByPlaceholderText('Search');
        searchInput.value = '';
    });

    it('displays all images initially', () => {
        // Call the displayImages function
        displayImages();

        // Check if all images are displayed
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(5); // Adjust the count based on your sample data
    });

    it('filters images based on search input', () => {
        // Call the filterImages function with a search input
        const searchInput = screen.getByPlaceholderText('Search');
        searchInput.value = 'image1'; // Filter for 'image1.jpg'
        fireEvent.input(searchInput);

        // Check if only one image is displayed
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(1);

        // Check if the displayed image contains 'image1'
        expect(images[0].src).toContain('image1');
    });

    it('displays all images when search input is cleared', () => {
        // Call the filterImages function with a search input
        const searchInput = screen.getByPlaceholderText('Search');
        searchInput.value = 'image1'; // Filter for 'image1.jpg'
        fireEvent.input(searchInput);

        // Clear the search input
        searchInput.value = '';
        fireEvent.input(searchInput);

        // Check if all images are displayed again
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(5); // Adjust the count based on your sample data
    });
});
