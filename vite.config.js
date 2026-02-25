import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { execSync } from 'child_process'

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))

let gitHash = 'dev'
try {
  gitHash = execSync('git rev-parse --short HEAD').toString().trim()
} catch {
  // Not a git repo or git not available — fall back to 'dev'
}

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __GIT_HASH__:    JSON.stringify(gitHash),
  }
})
