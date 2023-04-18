import React from "react";
import "./AboutBody.css";

export default function AboutBody() {
  return (
    <div className="aboutBody">
      <div className="left-container">
        <h3>Quick Links</h3>
        <ul>
          <li>About Vine City</li>
          <li>Join Vine City</li>
          <li>Vine City Chat Room</li>
          <li>Resources and Activities</li>
          <li>Inclusivity and Diversity</li>
          <li>Join Vine City Today</li>
        </ul>
      </div>

      <div className="right-container">
        <div className="intro-box">
          <div className="about-header">
            <h1>Vine City: Your Virtual Nation and Online Community</h1>
          </div>
          <div className="intro-container">
            <img src="VCFlag.png" alt="vc Flag" width={350} height={200} />
            <p>
              Welcome to Vine City, a unique virtual nation and online community
              that is dedicated to promoting political engagement, activism, and
              socialization within a safe and secure virtual space. Our platform
              is designed to provide a virtual nation where individuals from all
              over the world can connect, engage in politics, run for political
              office, and contribute to shaping their community.
            </p>
          </div>
        </div>
        <div className="about-section">
          <h2>About Vine City</h2>
          <p>
            Vine City is a virtual nation that exists solely online. It is an
            online community that allows individuals to engage in politics and
            activism, promoting a sense of community and belonging. Vine City's
            primary goal is to provide a platform for people who are passionate
            about politics and who want to engage in activism but are unable to
            do so due to physical or geographical constraints.
          </p>

          <h2>Join Vine City</h2>
          <p>
            Becoming a member of Vine City is easy. All you need to do is sign
            up on our website and become a Vinish. As a Vinish, you can
            participate in political activities, run for political office, and
            contribute to shaping the community. By becoming a Resident, you can
            get the right to vote and participate in government decision-making.
          </p>

          <h2>Vine City Chat Room</h2>
          <p>
            Vine City offers a chat room exclusively for members to connect and
            communicate with like-minded individuals. You can share your ideas,
            thoughts, and opinions on our political initiatives, events, and
            activities. The chat room provides a safe and secure space for
            members to socialize and connect with each other.
          </p>

          <h2>Resources and Activities</h2>
          <p>
            At Vine City, we offer a variety of resources and activities
            exclusively for our members. We provide online events, webinars, and
            workshops on various political and social issues. We also provide
            members with access to our online resources library, which includes
            articles, blogs, and research papers on topics related to politics,
            social issues, and activism.
          </p>

          <h2>Inclusivity and Diversity</h2>
          <p>
            At Vine City, we believe in inclusivity and diversity. We promote a
            safe and secure virtual space for individuals from diverse
            backgrounds and cultures to connect and engage in politics and
            activism. We strive to create a community that reflects the values
            of inclusivity, diversity, and equality.
          </p>

          <h2>Join Vine City Today</h2>
          <p>
            Join Vine City today and become a part of a unique virtual nation
            and online community. Engage in politics, shape your community, and
            connect with like-minded individuals from around the world. Sign up
            now and become a Vinish.
          </p>

        </div>
        <div className="btns-container">
          <button>Join Today</button>
          <button>Get Official Document</button>
          
        </div>
      </div>
    </div>
  );
}
