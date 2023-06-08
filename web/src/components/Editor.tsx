import CodeMirror from '@uiw/react-codemirror'
import { githubDark } from '@uiw/codemirror-theme-github'
import { javascript } from '@codemirror/lang-javascript'

export function Editor() {
  return (
    <CodeMirror
      style={{ fontSize: '16px' }}
      theme={githubDark}
      extensions={[javascript({ typescript: true })]}
      height='950px'
      value={`function add(a, b) {
  return a + b
}`}
    />
  )
}
