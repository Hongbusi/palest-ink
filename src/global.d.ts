declare global {
  interface Window {
    removeLoading: () => void
    toggleDarkMode: () => void
    systemDarkMode: () => void
  }
}

export {}
