/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:[
    {
      source:'/about',
      destination:'/',
      permanent:true,
    }
  ]
}

module.exports = nextConfig
