import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'admin-lte': '/node_modules/admin-lte',
      'bootstrap': '/node_modules/bootstrap'
    },
  },
});
