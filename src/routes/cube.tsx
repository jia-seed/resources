import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cube')({
  component: Cube,
})

function Cube() {
  return (
    <div style={{ padding: '0 4rem 4rem' }}>
      <h1>bonus ;D how to solve a rubik's cube</h1>

      <p>i'm still not where i want to be in terms of solving rubik's cubes. <strong>it's been 37 days and i'm down to 20 seconds</strong>. however, i do really, really love it. 
        this was my progression i'm breaking down here.</p>
        
      <p>i started 4/12/2026 and did beginner's method on day 1, then i learned f2l on 4/19, day 8. on 4/29, day 18, i was enjoying f2l and beginner's ll, which got me down to 36 seconds.
        however i didn't enjoy it for long because it was time to learn a new method: 2 look oll and pll on 4/30, day 19. it was a big work week and it took a while to integrate/memorize. but then i was rewarded with a pr of 28.94 seconds on 5/10, 29 days in (so i broke sub 30 seconds in under 30 days!).
      </p>
      
      <p>on day 33 i met a 7 second cuber at vivarium, then told him to coach me at noisebridge the next day. he taught me to start the cross on the bottom and have no cube rotations for f2l. i think i had gotten a 25 second pr after midnight of that day before i met with him. 5/16 i immediately got my dopamine hit with the new bottom cross 1 orientation method working on 5/16 and got 24 seconds.
        now it's 5/18 and i woke up in the morning and solved it in 23.52 seconds. i'm currently learning full oll and pll + xcross. ALSO NO I GOT 20.87 sec at 4:44pm pst SAME DAY. enjoy the resources!</p>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>- <a href="https://youtu.be/7Ron6MN45LY?si=bIlGGMEyAwAY6NM2">beginner's method</a></li>
          <li>- <a href="https://youtu.be/Ar_Zit1VLG0?si=eRHG6cN3ix2nA__D">f2l</a></li>
          <li>- <a href="https://youtu.be/GhmYBgLoQQg?si=h1j0B_DkIpYUtoct">2 look oll</a></li>
          <li>- <a href="https://youtu.be/f_Yor-ydZjs?si=tXfLIITFIRIpglO1">2 look pll</a></li>
      </ul>

      <p><strong>rubik's cube journey</strong></p>

      <iframe
            src="https://youtube.com/embed/1aJIF6LKXqo?cc_load_policy=1&autoplay=1&mute=1"
            style={{ width: '100%', maxWidth: '720px', aspectRatio: '16 / 9', border: 'none' }}
            title="multi-cursor editing example"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
    </div> 
  )
}
