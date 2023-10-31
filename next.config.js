/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  env:{
    API_URL:"https://api.dishmenu.guide",
    API_KEY:"ASDAD23RFSDFSDASS",
    PHONE:"380939872525",
    FB:"victorsteshyn"
  }
}

module.exports = nextConfig
