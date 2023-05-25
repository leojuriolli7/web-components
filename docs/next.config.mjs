import withMdx from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import { getHighlighter } from 'shiki'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    externalDir: true
  },
  images: {
    disableStaticImages: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader'
    })
    return config
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  redirects: () => [
    { source: '/docs', destination: '/docs/introduction', permanent: true }
  ]
}

export default withMdx({
  options: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        /** @type {import("rehype-pretty-code").Options} */
        ({
          theme: { dark: 'one-dark-pro', light: 'github-light' },
          getHighlighter,
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node, id) {
            node.properties.className = ['word']
            node.properties['data-word-id'] = id
          }
        })
      ]
    ]
  }
})(nextConfig)
