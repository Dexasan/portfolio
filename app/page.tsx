import Portrait from "@/components/Portrait";
import RoadRider from "@/components/RoadRider";
import ArcadeSelect from "@/components/ArcadeSelect";
export default function HomePage() {
    return <div className="personal-home">
    <p className="home-location">chitwan, nepal <span aria-hidden="true">↝</span> rome, italy</p>
    <div className="name-art"><span className="hand-note">hey, i'm</span><h1>SANDESH<span>CHAPAGAIN</span></h1></div>
    <Portrait />
    <div className="home-intro">
      <p>computers got me curious.<br />how we think keeps me there.</p>
      <p className="home-small">i'm from chitwan, now in rome doing engineering sciences at tor vergata.</p>
      <p className="home-connection">i keep coming back to cognitive science and what computers could become. i think the next step is a computer that understands what we're trying to do, without making us think like a machine.</p>
      <p className="home-connection">two people finding each other. a person and a computer figuring something out. i care about that connection. i want to build things that make it come easier.</p>
    </div>
    <RoadRider />
    <ArcadeSelect label="choose a path" variant="paths" items={[
      {id:"work",title:"things i've made",short:"the work",kind:"apps & experiments",summary:"ideas i had to try. some became apps, some are still experiments.",href:"/work",glyph:"build",action:"explore the work"},
      {id:"about",title:"how i got here",short:"the backstory",kind:"chitwan → rome",summary:"one game, a computer, and an obsession that never really went away.",href:"/about",art:"/art/roadrash-rider.webp",action:"start at the beginning"},
      {id:"direction",title:"what next?",short:"what next",kind:"cognition & computing",summary:"master's, how we think, and the things i still need to learn.",href:"/direction",glyph:"mind",action:"see where i'm headed"},
      {id:"thoughts",title:"the computer thing",short:"the idea",kind:"human ↔ machine",summary:"what if my computer understood what i meant? and what if it actually stayed mine?",href:"/thoughts",glyph:"computer",action:"hear me out"}
    ]}/>
    <p className="home-signoff">anyway, glad you're here. <span aria-hidden="true">↙</span></p>
  </div>;
}
