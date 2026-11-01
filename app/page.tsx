import Link from "next/link";
import Portrait from "@/components/Portrait";
import RoadRider from "@/components/RoadRider";
export default function HomePage() {
    return <div className="personal-home">
    <p className="home-location">chitwan, nepal <span aria-hidden="true">↝</span> rome, italy</p>
    <div className="name-art"><span className="hand-note">hey, i'm</span><h1>SANDESH<span>CHAPAGAIN</span></h1></div>
    <Portrait />
    <div className="home-intro">
      <p>i make apps. i love good art.<br />and i'm a little obsessed with computers.</p>
      <p className="home-small">i'm from chitwan, now in rome doing engineering sciences at tor vergata.</p>
      <p className="home-connection">i love apps where strangers can just talk and feel connected. that's what i like about <Link href="/work/yappie">yappie</Link> and <Link href="/work/ditch">ditch</Link>.</p>
    </div>
    <RoadRider />
    <nav className="home-paths" aria-label="Explore my portfolio">
      <Link href="/work"><span>things i've made<small>yappie, ditch & the other experiments</small></span><span className="path-arrow" aria-hidden="true">↗</span></Link>
      <Link href="/about"><span>how i got here<small>it started with road rash</small></span><span className="path-arrow" aria-hidden="true">↗</span></Link>
      <Link href="/direction"><span>what next?<small>master's, cognition & a lot to learn</small></span><span className="path-arrow" aria-hidden="true">↗</span></Link>
      <Link href="/thoughts"><span>the computer thing<small>i want ai to be my os</small></span><span className="path-arrow" aria-hidden="true">↗</span></Link>
    </nav>
    <p className="home-signoff">anyway, glad you're here. <span aria-hidden="true">↙</span></p>
  </div>;
}
