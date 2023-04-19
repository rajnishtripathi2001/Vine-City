import React from "react";
import "./Section4.css";

export default function Section4() {
  return (
    <section className="sec4">
      <h1>Choose Your Journey In Vine City</h1>

      <section className="inner-sec">
        <div className="part">
          <div className="upper">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-dark="false"
                class="mmrc1 bgcr1"
                fill="none"
              >
                <path
                  fill="#ffb73e"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 9a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V11a2 2 0 00-2-2H6zm6 9a2 2 0 100-4 2 2 0 000 4z"
                ></path>
                <path
                  stroke="#ffb73e"
                  stroke-width="2"
                  d="M8 11V5.65A4.65 4.65 0 0112.65 1v0a4.65 4.65 0 014.41 3.179L17.5 5.5"
                ></path>
              </svg>
            </div>
            <div className="after1"></div>
          </div>

          <div className="artical">
            <h2>Vinish</h2>
            <p>
              Vinish can launch a business within the Nation, use the National
              digital currency, create communities and events.
            </p>
          </div>
        </div>
        <div className="part">
          <div className="upper">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-dark="false"
                class="bgcr2 mmrc2"
              >
                <path
                  fill="#fff"
                  d="M12 18a2 2 0 100-4 2 2 0 000 4zm6-9a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V11a2 2 0 012-2h1V7a5 5 0 1110 0v2h1zm-6-5a3 3 0 00-3 3v2h6V7a3 3 0 00-3-3z"
                ></path>
              </svg>
            </div>
            <div className="after2"></div>
          </div>

          <div className="artical">
            <h2>Resident</h2>
            <p>
              Residents can vote, participate in elections, create petitions,
              access all Vinish events and get a personal Vinish ID card.
            </p>
          </div>
        </div>
        <div className="part">
          <div className="upper">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                data-dark="false"
                class="bgcr2 mmrc2"
              >
                <path
                  fill="#fff"
                  d="M12 18a2 2 0 100-4 2 2 0 000 4zm6-9a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V11a2 2 0 012-2h1V7a5 5 0 1110 0v2h1zm-6-5a3 3 0 00-3 3v2h6V7a3 3 0 00-3-3z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="artical">
            <h2>Politician</h2>
            <p>Member of the official structure.</p>
            <div className="btcontainer">
              <button className="transbtn">Parliament</button>
              <button className="transbtn">Government</button>
              <button className="transbtn">Judges</button>
              <button className="transbtn">Continental Office</button>
              <button className="transbtn">Regional Office</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
