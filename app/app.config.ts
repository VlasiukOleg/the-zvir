export default defineAppConfig({
  ui: {
    header: {
      slots: {
      root: 'bg-light-accent dark:bg-gray-700 border-none shadow-xl z-50  md:mx-8 rounded-full mt-4 transition-all ',
      container: 'px-6 py-3 min-h-[auto] flex items-center justify-between',
      header: 'bg-light-accent border-b border-black/30 dark:bg-gray-700',
      body: 'bg-light-accent p-6 dark:bg-gray-700',
      content: 'bg-light-accent lg:flex xl:hidden dark:bg-gray-700',
      overlay: 'lg:flex xl:hidden',
      toggle: 'lg:flex xl:hidden',
      }
    }
  }
})
