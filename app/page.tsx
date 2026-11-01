import Link from "next/link";
import Portrait from "@/components/Portrait";
export default function HomePage() {
    return <div className="personal-home">
    <p className="home-location">chitwan, nepal <span aria-hidden="true">↝</span> rome, italy</p>
    <div className="name-art"><span className="hand-note">hey, i'm</span><h1>SANDESH<span>CHAPAGAIN</span></h1><span className="name-star" aria-hidden="true">✳</span></div>
    <Portrait />
    <div className="home-intro">
      <p>i make apps. i love good art.<br />and i'm a little obsessed with computers.</p>
      <p className="home-small">currently in rome, doing engineering sciences at tor vergata.<br className="desktop-break"/> mostly working on <Link href="/work/yappie">yappie</Link> and <Link href="/work/ditch">ditch</Link>.</p>
    </div>
    <nav className="home-paths" aria-label="Explore my portfolio">
      <Link href="/work"><span className="path-symbol" aria-hidden="true">↗</span><span>things i've made<small>yappie, ditch & the other experiments</small></span><i aria-hidden="true">01</i></Link>
      <Link href="/about"><span className="path-symbol bike-symbol" aria-hidden="true">↝</span><span>how i got here<small>it started with road rash</small></span><i aria-hidden="true">02</i></Link>
      <Link href="/direction"><span className="path-symbol" aria-hidden="true">✳</span><span>what next?<small>master's, cognition & a lot to learn</small></span><i aria-hidden="true">03</i></Link>
      <Link href="/thoughts"><span className="path-symbol" aria-hidden="true">⌘</span><span>the computer thing<small>i want ai to be my os</small></span><i aria-hidden="true">04</i></Link>
    </nav>
    <p className="home-signoff">anyway, glad you're here. <span aria-hidden="true">↙</span></p>
  </div>;
}
