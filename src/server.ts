import 'zone.js/node';
import express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';

const app = express();
const PORT = process.env['PORT'] || 4000; // ✅ Fix for PORT access

const DIST_FOLDER = join(process.cwd(), 'dist/living-county-lewis-client/browser');

// Serve static files
if (existsSync(DIST_FOLDER)) {
  app.use(express.static(DIST_FOLDER));
}

// Handle Angular SSR requests
app.get('*', (req, res) => {
  res.sendFile(join(DIST_FOLDER, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
