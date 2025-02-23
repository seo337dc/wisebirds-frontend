/** @type {import('next').NextConfig} */
const nextConfig = (() => {
  return {
    reactStrictMode: true,
    compiler: {
      styledComponents: true, // SSR styled-component 적용
    },
  };
})();

export default nextConfig;
