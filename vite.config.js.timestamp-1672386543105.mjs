// vite.config.js
import { defineConfig } from "file:///C:/Users/HP/Desktop/PROGRAMMING/Portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/Desktop/PROGRAMMING/Portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var auth0Config = {
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID
};
var vite_config_default = defineConfig({
  plugins: [react()]
});
export {
  auth0Config,
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXFBST0dSQU1NSU5HXFxcXFBvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRGVza3RvcFxcXFxQUk9HUkFNTUlOR1xcXFxQb3J0Zm9saW9cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL0Rlc2t0b3AvUFJPR1JBTU1JTkcvUG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGgwQ29uZmlnID0ge1xyXG4gIGRvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOLFxyXG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXHJcbn07XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlULFNBQVMsb0JBQW9CO0FBQ3RWLE9BQU8sV0FBVztBQUVYLElBQU0sY0FBYztBQUFBLEVBQ3pCLFFBQVEsUUFBUSxJQUFJO0FBQUEsRUFDcEIsVUFBVSxRQUFRLElBQUk7QUFDeEI7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ25CLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
