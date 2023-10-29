// init docsify
window.$docsify = {
  name: 'QLTSv2 Documents',
  repo: '/',
  mode: 'history',
  // basePath: '/',
  // Sidebar
  loadSidebar: true,
  // subMaxLevel: 3,
  // sidebarDisplayLevel: 2, // set sidebar display level
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md',
  },
  // Copy code
  buttonText: 'Copy to clipboard',
  errorText: 'Error',
  successText: 'Copied',
  // Search
  search: {
    placeholder: 'Nhập để tìm kiếm',
    noData: 'Không tìm thấy kết quả!',
    localStorage: false,
  },
  // Tabs: https://jhildenbiddle.github.io/docsify-tabs/#/?id=usage
  tabs: {
    persist    : true,      // default
    sync       : true,      // default
    theme      : 'classic', // default
    tabComments: true,      // default
    tabHeadings: true       // default
  },
  toc: {
    scope: '.markdown-section',
    headings: 'h1, h2, h3, h4, h5, h6',
    title: '<b>Contents</b>',
  },
  autoHeaders: {
    separator: 'decimal', // decimal, dash, bracket, or other
    // custom: '--',
    levels: { // 1-6
      start: '2',
      finish: '4'
    },
    // scope: '#main',
    debug: false
  }
}