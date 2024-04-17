import React from 'react';
import { createRoot } from 'react-dom/client';
import Sidebar from './Sidebar';

// Function to create and style the sidebar container
function createSidebarContainer() {
  // Check if the container already exists
  let container = document.createElement('div');
  container.id = 'react-sidebar-container';
  document.body.appendChild(container);

  // Set styles for the sidebar container
  Object.assign(container.style, {
    position: 'fixed', // Fixed position to stay in place during scrolling
    top: '0', // Start from the top of the viewport
    right: '0', // Position on the right edge of the viewport
    width: '400px', // Width of the sidebar
    height: '100vh', // Full height of the viewport
    zIndex: '999999', // High z-index to overlay on top of other content
    overflowY: 'auto', // Allow scrolling within the sidebar
  });
  return container;
}

// Create or select the container and mount the React component
const container = createSidebarContainer();
const root = createRoot(container); // Create a root.
root.render(<Sidebar />); // Render the Sidebar component into the root.

console.log('Content script works and sidebar should be visible.');
