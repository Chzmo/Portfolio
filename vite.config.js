import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const auth0Config = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
