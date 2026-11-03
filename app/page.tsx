import Portrait from "@/components/Portrait";
import RoadRider from "@/components/RoadRider";
import ArcadeSelect from "@/components/ArcadeSelect";
export default function HomePage() {
    return <div className="personal-home">
    <p className="home-location">chitwan, nepal <span aria-hidden="true">↝</span> rome, italy</p>
    <div className="name-art"><span className="hand-note">hey, i'm</span><h1>SANDESH<span>CHAPAGAIN</span></h1></div>
    <Portrait />
    <div className="home-intro home-story">
      <p>i played road rash once and that was pretty much it. all i wanted to do after that was sit at a computer. games first, then wondering how any of it worked.</p>
      <p>i'm from chitwan, nepal. these days i'm in rome studying engineering sciences at tor vergata. the computer obsession came with me.</p>
      <p>now i'm just as curious about the person in front of the screen. how we think, what we mean, why getting a computer to do something can still be such a pain. that's what got me interested in cognitive science. i want to understand that better, and help build whatever comes next.</p>
      <p>sometimes that's a person talking to a machine. sometimes it's two strangers talking to each other. either way, i want to make it easier for them to connect.</p>
    </div>
    <RoadRider />
    <ArcadeSelect label="choose a path" variant="paths" items={[
      {id:"work",title:"things i've made",short:"the work",kind:"apps & experiments",summary:"ideas i had to try. some became apps, some are still experiments.",href:"/work",art:"/art/marks/path-work.webp",action:"explore the work"},
      {id:"about",title:"how i got here",short:"the backstory",kind:"chitwan → rome",summary:"one game, a computer, and an obsession that never really went away.",href:"/about",art:"/art/roadrash-rider.webp",action:"start at the beginning"},
      {id:"direction",title:"what next?",short:"what next",kind:"cognition & computing",summary:"master's, how we think, and the things i still need to learn.",href:"/direction",art:"/art/marks/path-direction.webp",action:"see where i'm headed"},
    ]}/>
    <p className="home-signoff">anyway, glad you're here. <span aria-hidden="true">↙</span></p>
  </div>;
}
