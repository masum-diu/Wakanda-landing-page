import React from "react";
import freelancerlogo from "../assets/freelancer-area-image/Group 1.svg";
import socialProof from "../assets/freelancer-area-image/Social Proof.svg";
import icon1 from "../assets/featureIcon/Icon.svg";
import icon2 from "../assets/featureIcon/Icon (1).svg";
import icon3 from "../assets/featureIcon/Icon (2).svg";
import wireframe from "../assets/wireframes.svg";
const Home = () => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          width: "78%",
          margin: "0 auto",
          maxWidth: "1500px",
        }}
      >
        <div className="freelancerInfo" style={{ width: "300px" }}>
          <h1 style={{ fontSize: "27px" }}>
            Recruit top talented freelancer for your business
          </h1>
          <p style={{ fontSize: "8px", width: "200px" }}>
            Connect you to thoudsands of talented freelancer from any industry.
            You can have the best people in just few simple steps.
          </p>
          <button
            style={{
              backgroundColor: "#0077c0",
              width: "66px",
              fontSize: "9px",
              fontWeight: "600",
              height: "25px",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
        <div className="freelancerInfoImage">
          <img src={freelancerlogo} alt="" width={300} height={350} />
        </div>
      </section>

      <section className="socialProofAarea" style={{ marginTop: "10px" }}>
        <img src={socialProof} alt="" style={{ width: "100%" }} />
      </section>

      <section
        className="featuers"
        style={{
          marginTop: "10px",
          backgroundColor: "#0077c0",
          height: "400px",
        }}
      >
        <div
          className="benefit"
          style={{
            width: "78%",
            margin: "0 auto",
            maxWidth: "1500px",
          }}
        >
          <h5
            style={{
              paddingTop: "25px",
              textAlign: "center",
              color: "#fff",
              fontWeight: "600",
              fontSize: "9px",
              letterSpacing: "2px",
            }}
          >
            FEATURE
          </h5>
          <h1
            style={{
              textAlign: "center",
              color: "#fff",
              width: "250px",
              margin: "0 auto",
            }}
          >
            The benefit of using our platform
          </h1>
          <div
            className="icons"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "40px",
              color: "#fff",
            }}
          >
            <div className="icons-info">
              <img src={icon1} alt="" />
              <h4>Professional & Fast</h4>
              <p style={{ fontSize: "9px", width: "250px" }}>
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </div>
            <div className="icons-info">
              <img src={icon2} alt="" />
              <h4>24/7 support</h4>
              <p style={{ fontSize: "9px", width: "250px" }}>
                You have any concerns or questions? Don???t worry, we have our
                support team to help you at anytime and anywhere.
              </p>
            </div>
            <div className="icons-info">
              <img src={icon3} alt="" />
              <h4>Safe & Secure</h4>
              <p style={{ fontSize: "9px", width: "250px" }}>
                We know that safety is the most important thing for our
                customer, so all of our payments are processed instantly and
                securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="footer-area"
        style={{
          width: "78%",
          margin: "0 auto",
          maxWidth: "1500px",
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="footerImage">
          <img src={wireframe} alt="" />
        </div>
        <div
          className="footerLists"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ marginLeft: "40px", width: "400px" }}>
            Wakanda is an easy platform to find talent
          </h1>
          <ol
            style={{
              listStyle: "none",
            }}
          >
            <li>
              <span
                style={{
                  backgroundColor: "#C7EEFF",
                  padding: "2%",
                  borderRadius: "50%",
                }}
              >
                1
              </span>{" "}
              Sign in to our website
            </li>
            <li style={{ marginTop: "20px" }}>
              <span
                style={{
                  backgroundColor: "#C7EEFF",
                  padding: "2%",
                  borderRadius: "50%",
                }}
              >
                2
              </span>{" "}
              Fill out neccesary information
            </li>
            <li style={{ marginTop: "20px" }}>
              <span
                style={{
                  backgroundColor: "#C7EEFF",
                  padding: "2%",
                  borderRadius: "50%",
                }}
              >
                3
              </span>{" "}
              Discover thoudsands of freelancers
            </li>
            <li style={{ marginTop: "20px" }}>
              <span
                style={{
                  backgroundColor: "#C7EEFF",
                  padding: "2%",
                  borderRadius: "50%",
                }}
              >
                4
              </span>{" "}
              View freelancer???s profile and hire
            </li>
            <li style={{ marginTop: "20px" }}>
              <span
                style={{
                  backgroundColor: "#C7EEFF",
                  padding: "2%",
                  borderRadius: "50%",
                }}
              >
                5
              </span>{" "}
              Complete payment & it???s time to work!
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
