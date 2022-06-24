declare global {
  interface Window {
    removeLoading: () => void
    getDarkMode: () => void
    toggleDarkMode: () => void
    toggleLightMode: () => void
  }
}

export {}
