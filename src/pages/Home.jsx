import React from "react";
import { Header } from "../components/Header";
import video from ".//video.mp4";
import { Footer } from "../components/footer";

export function Home() {
  return (
    <div className="home-container">  {/* Added a container class */}
      <Header />
      <div className="top-section">
        <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4"/>
        </video>
        <div className="top-content">
          <h1 style={{ fontSize: "5rem" }}>Welcome to Our Currency Converter! <br /> Because Math is Hard.</h1>
        </div>
      </div>

      <div className="middle">
        <h2>About</h2>
        <p>So, you've found yourself in need of converting those pesky currencies, huh? Don't worry, we've got you covered! Our currency converter is like that trusty sidekick who's always there to help you navigate the confusing world of international finance.
<br />

<br />Here's what our little wizardry tool can do for you:
<br />
<ul>
  <li><strong>Instant Conversion:</strong> Want to know how many euros your dollars can get you? Or perhaps you're curious about the value of your yen in dollars? Our converter will give you the answers faster than you can say "money, money, money!"</li>
  <li><strong>Real-Time Rates:</strong> We're not about that outdated information life. Our converter pulls in the latest exchange rates, so you can be sure you're getting the most accurate conversion possible. No more relying on yesterday's news!</li>
  <li><strong>User-Friendly Interface:</strong> We've made sure our converter is as easy to use as possible. With just a few clicks, you'll be swapping currencies like a pro. And hey, if you get lost, we've got tooltips to guide you along the way.</li>
  <li><strong>No Math Required:</strong> Let's face it, math isn't everyone's cup of tea. But fear not! Our converter does all the number crunching for you, so you can leave your calculator at home. Sit back, relax, and let us handle the hard stuff.</li>
</ul>
<br />
So there you have it, folks! Whether you're a seasoned traveler or just dipping your toes into the world of foreign exchange, our currency converter is here to make your life a whole lot easier. Say goodbye to currency confusion and hello to hassle-free conversions!</p>
      </div>
      <div className="below">
        <h2>Connect</h2>
        <p className="connectCenter">Got questions, feedback, or just want to say hi? I'm all ears!<br /> I am a computer science and engineering student with a passion for innovation.
        Let's combine our skills and <span class="extra">create</span> something <span class="extra">extraordinary</span>.
        </p>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
