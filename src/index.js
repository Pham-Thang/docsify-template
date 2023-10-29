// init docsify
window.$docsify = {
  name: 'QLTSv2 Documents',
  repo: '/',
  mode: 'history',
  // basePath: '/',
  // Sidebar
  loadSidebar: true,
  subMaxLevel: 3,
  sidebarDisplayLevel: 1, // set sidebar display level
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
  },
  // Tabs: https://jhildenbiddle.github.io/docsify-tabs/#/?id=usage
  tabs: {
    persist    : true,      // default
    sync       : true,      // default
    theme      : 'classic', // default
    tabComments: true,      // default
    tabHeadings: true       // default
  }
}