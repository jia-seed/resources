import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageb')({
  component: PageB,
})

function PageB() {
  return (
    <div style={{ padding: '0 4rem 4rem' }}>
        <h1>this page is for practical things</h1>
        <p>the exact step by step to building projects directly</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Cheatsheet">html cheatsheet resource 1</a></li>
            <li>- <a href="https://www.w3schools.com/html/default.asp">html cheatsheet resource 2</a></li>
            <li>- <a href="https://nextjs.org/docs">next.js docs</a></li>
            <li>- <a href="https://itsfoss.com/vs-code-multi-cursor/">multi-cursor editing in vscode</a></li>
        </ul>
        <h2>using vscode</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>1. should probably turn on auto-save (diff people prefer different things) but it's cmd+shift+p, type "auto save" and select "toggle auto save" so vscode automatically saves after a short delay when you stop typing. otherwise you just have to go cmd+s each time you finish editing a file. some people don't like this though, because it can mask syntax errors temporarily if ur dev server crashes every keystroke.</li>
          <li>2. sometimes the code is correct but there are squiggles. just cmd+shift+p and type in typescript: restart ts server. or idk i just quit vscode and open it again and then it's fine. this happens because of a stale ttsserver cache where it's in a confused state after u edit many files.</li>
          <li>3. multicursor editing for when you're making n identical edits in n places simultaneously: good shortcuts are (cmd+shift+l, to highlight the n appearance of the thing) and (holding option and clicking every place you want to start adding something, then doing cmd+right arrow and typing what you want at the end. for example, putting several phrases into a list).</li>
          <li>4. other multicursor trick. select the n thing you want to edit, press cmd+d the number of times it appears next / number of times you want that n thing to change type your change, and for example if you're closing it (same list items example) you can go to the closing item you want to replace, click cmd+D the n amount of times you want to replace the n thing, and type the replacement edit.</li>
        </ul>

        <p><strong>multi-cursor editing</strong></p>
          <iframe
            src="https://youtube.com/embed/wU5EIz7lmTg?cc_load_policy=1&autoplay=1&mute=1"
            style={{ width: '100%', maxWidth: '720px', aspectRatio: '16 / 9', border: 'none' }}
            title="multi-cursor editing example"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
    </div>
  )
}
//make a section about cc_load_policy=1 is captions are shown by default when video starts, &, broswers block autoplay with sound, so mute=1 is necessary if using autoplay=1. used like autoplay=1&mute=1
//make a section about the style for responsiveness for iframe 