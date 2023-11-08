import React, { useEffect } from "react";
import "./Style.css";
import Logo from "./download.jpeg";

const Main = () => {
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let slideIndex = n; // Declare slideIndex here
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  function currentSlide(n) {
    showSlides(n);
    console.log("hii");
  }

  useEffect(() => {
    let slideIndex = 1;
    showSlides(slideIndex);
  }, []);

  return (
    <div>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="sti">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#feedback">Feedback</a>
        <div className="topnav-right">
          <a href="#">Login</a>
          <a href="#">Sign-Up</a>
        </div>
      </div>
      <div className="space"></div>
      <h2>Our Story</h2>

      <p>
        Our journey began with a simple idea: to create a digital space that
        empowers individuals to take control of their tasks and schedules,
        making their lives more efficient and enjoyable. We recognized the need
        for a flexible, easy-to-use, and feature-rich to-do list application,
        and that's where [Your Company Name] was born.
      </p>

      <div className="slideshow-container" id="home">
        <div className="space"></div>
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src={Logo}
            style={{ width: "100%", height: "30%" }}
            alt="Slide 1"
          />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src={Logo}
            style={{ width: "100%", height: "30%" }}
            alt="Slide 2"
          />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src={Logo}
            style={{ width: "100%", height: "40%" }}
            alt="Slide 3"
          />
          <div className="text">Caption Three</div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>

      <div id="about">
        <div className="space"></div>
        <div className="space"></div>
        <h2>About Us</h2>

        <p>
          Welcome to [Your To-Do List Website Name], your trusted companion for
          staying organized and productive. At [Your Company Name], we believe
          that a well-organized life is a key to success, and our mission is to
          help you achieve just that.
        </p>

        <h5>What Sets Us Apart</h5>
        <p>
          At [Your To-Do List Website Name], we stand out from the crowd with
          our commitment to user-centric design, functionality, and innovation.
          Here are some key features that set us apart: Intuitive Interface: Our
          user-friendly interface ensures that you can start creating tasks and
          lists within minutes. No steep learning curves, just pure
          productivity. Customization: We understand that everyone has unique
          preferences and needs. That's why we offer a wide range of
          customization options, allowing you to tailor your to-do lists to suit
          your style. Cross-Platform Accessibility: Access your to-do lists from
          anywhere, on any device. Our platform is designed to sync seamlessly
          across desktop, mobile, and tablet devices. Collaboration: Whether
          you're working on a group project or managing household chores, our
          collaboration features make it easy to share tasks and stay on the
          same page. Productivity Insights: Gain valuable insights into your
          task management habits and track your progress over time with our
          productivity analytics.
        </p>
        <p>
          At [Your To-Do List Website Name], we stand out from the crowd with
          our commitment to user-centric design, functionality, and innovation.
          Here are some key features that set us apart: Intuitive Interface: Our
          user-friendly interface ensures that you can start creating tasks and
          lists within minutes. No steep learning curves, just pure
          productivity. Customization: We understand that everyone has unique
          preferences and needs. That's why we offer a wide range of
          customization options, allowing you to tailor your to-do lists to suit
          your style. Cross-Platform Accessibility: Access your to-do lists from
          anywhere, on any device. Our platform is designed to sync seamlessly
          across desktop, mobile, and tablet devices. Collaboration: Whether
          you're working on a group project or managing household chores, our
          collaboration features make it easy to share tasks and stay on the
          same page. Productivity Insights: Gain valuable insights into your
          task management habits and track your progress over time with our
          productivity analytics.
        </p>
        <p>
          At [Your To-Do List Website Name], we stand out from the crowd with
          our commitment to user-centric design, functionality, and innovation.
          Here are some key features that set us apart: Intuitive Interface: Our
          user-friendly interface ensures that you can start creating tasks and
          lists within minutes. No steep learning curves, just pure
          productivity. Customization: We understand that everyone has unique
          preferences and needs. That's why we offer a wide range of
          customization options, allowing you to tailor your to-do lists to suit
          your style. Cross-Platform Accessibility: Access your to-do lists from
          anywhere, on any device. Our platform is designed to sync seamlessly
          across desktop, mobile, and tablet devices. Collaboration: Whether
          you're working on a group project or managing household chores, our
          collaboration features make it easy to share tasks and stay on the
          same page. Productivity Insights: Gain valuable insights into your
          task management habits and track your progress over time with our
          productivity analytics.
        </p>

        <h5>Our Commitment to You</h5>
        <p>
          We are dedicated to continually improving and expanding our platform
          to meet the evolving needs of our users. Your feedback and suggestions
          are invaluable in shaping the future of [Your To-Do List Website
          Name]. Thank you for choosing [Your To-Do List Website Name] as your
          go-to solution for managing your tasks, goals, and aspirations. We're
          here to simplify your life and help you make every day count. Join the
          [Your Company Name] community today and start your journey towards
          enhanced productivity and organization.
        </p>
      </div>

      <footer>
        <div id="contact">
          <div className="space"></div>
          <a href="#">Contact-us</a>
        </div>

        <div id="feedback">
          <div className="space"></div>
          <a href="#" target="_blank">Feedback</a>
        </div>
      </footer>
    </div>
  );
};

export default Main;
