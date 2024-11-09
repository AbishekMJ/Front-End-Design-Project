const speakersData = {
  speaker1: {
    image: {
      src: "https://th.bing.com/th/id/OIP.ANEJ90pv23_-eng2e1RD6QHaHa?rs=1&pid=ImgDetMain",
      alt: "John Doe"
    },
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Acme corp",
    socialMedia: [
      { icon: "fab fa-linkedin", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-facebook", link: "#" }
    ],
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas."
  },
  speaker2: {
    image: {
      src: "https://th.bing.com/th/id/R.86976160f0aba9097feb2f24ab118202?rik=j3N8nF1iM%2fwa4w&riu=http%3a%2f%2fwww.thefamouspeople.com%2fprofiles%2fimages%2ftim-berners-lee-2.jpg&ehk=603UnibyJ0PjFvTPel2Qh6F9NOry8xoz5Cn%2b1eqjw4w%3d&risl=&pid=ImgRaw&r=0",
      alt: "Berners Lee"
    },
    name: "B Lee",
    title: "Chief Engagement Officer",
    company: "Acme Corp",
    socialMedia: [
      { icon: "fab fa-linkedin", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-facebook", link: "#" }
    ],
    bio: "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.   "
  },
  speaker3: {
    image: {
      src: "https://thedeveloperstory.com/wp-content/uploads/2021/07/The-Greatest-Programmers-2-1024x724.png",
      alt: "Torvaldus"
    },
    name: "Torvaldus",
    title: "Technical Developer",
    company: "Pantheon",
    socialMedia: [
      { icon: "fab fa-linkedin", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-facebook", link: "#" }
    ],
    bio: "Focus on building strong business partnerships and enhancing client relationships. Leverage cross-platform collaboration to implement best practices and drive growth. Pursue emerging opportunities with a strategic approach to e-business. Continuously adapt to real-time market trends to stay competitive"
  },
  speaker4: {
    image: {
      src: "https://www.kcl.ac.uk/newimages/ah/digital-humanities/people/TannerSimon2.xff41ce23.jpg?w=540&h=540&f=webp",
      alt: "John Doe"
    },
    name: "John Doe",
    title: "Chief Marketing Officer",
    company: "Specbee",
    socialMedia: [
      { icon: "fab fa-linkedin", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-facebook", link: "#" }
    ],
    bio:"Build and nurture impactful business partnerships while strengthening client relationships. Utilize cross-platform synergy to implement effective practices and fuel growth. Identify and capitalize on new opportunities through a strategic e-business approach. Stay agile by adapting to real-time market dynamics for sustained competitiveness."
  },
  

};


function showDetails(speakerId) {
  const speaker = speakersData[speakerId];
  const details = document.getElementById("speaker-details");
  details.innerHTML = `
    
     
<div id="info-box">
    <div style="display: flex; align-items: start; padding:20px;">
        <div style="display: flex; align-items: center; margin-right: 20px;">
            <img src="${speaker.image.src}" alt="${speaker.image.alt}" style="width:220px; height: 200px; border-radius: 50%; margin-right: 15px;">
            <div>
             <h3 style="margin: 0;  font-size: 2rem; font-weight: bold; color: #333; white-space: nowrap;">${speaker.name}</h3>
                <p style="margin: 5px 0; font-weight: bold; color: #555; font-size: 0.9em; white-space: nowrap">${speaker.title}</p>
                <p style="margin: 5px 0; color: #777; font-size: 0.8em; ">${speaker.company}</p>
                <div style="display: flex; gap: 10px; margin-top: 10px; font-size: 1.2em; color: #333;">
                    <a href="${speaker.socialMedia[0].link}" target="_blank" style="color: #0A66C2;"><i class="fab fa-linkedin"></i></a>
                    <a href="${speaker.socialMedia[1].link}" target="_blank" style="color: #1DA1F2;"><i class="fab fa-twitter"></i></a>
                    <a href="${speaker.socialMedia[2].link}" target="_blank" style="color: #3b5998;"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
        </div>
        <div style="width: 1px; background-color: #ddd; height: auto; align-self: stretch; margin-right: 20px;"></div>
   <div style="flex-grow: 2; text-align: left; padding: 40px; font-size: 1.0rem; line-height: 1.5;">
            ${speaker.bio}
        </div>

    </div>
</div>

 `;

  const infoBox = document.getElementById("info-box");
  infoBox.style.display = "block"; 
}


function closeDetails() {
  const infoBox = document.getElementById("info-box");
  infoBox.style.display = "none";

}



function scrollRight() {
  window.scrollBy({
    top: 0,          
    left: 500,       
    behavior: 'smooth' 
  });
}


function scrollLeft() {
  window.scrollBy({
    top: 0,          
    left: -500,      
    behavior: 'smooth' 
  });
}


  


