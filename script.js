function showFriendDetails(friendName) {
    // Get the friendDetails container
    const friendDetails = document.getElementById('friendDetails');
    
    // Clear out the existing content
    friendDetails.innerHTML = '';

    // Set up different content based on which button was clicked
    let content = '';

    if (friendName === 'Steps on Claiming your Prize') {
        content = `
         <h2>Treasure Hunt Instructions:</h2>
<h3>Step 1: Treasures are scattered at various locations across the campus.</h3>
<h3>Step 2: Locate pieces of paper with our logo around campus.</h3>
<h3>Step 3: Each piece of paper represents a “treasure” worth a prize.</h3>
<h3>Step 4: Clues or hints will help you find the treasures.</h3>
<h3>Step 5: Bring any found logo paper to an officer to claim your prize.</h3>
<h3>Step 6: Ensure the paper's unique code is legible and intact.</h3>
<h3>Step 7: To claim your prize, scan the QR Code on the paper </h3>
<h3>or message us on our Facebook page, College Red Cross Youth Council ISU-Echague.</h3>
<h3>Step 8: The hunt runs from October 29 to October 31.</h3>
<br>
<h2>How to Claim Your Prize:</h2>
<h3>Step 1: Bring the verified paper to an officer.</h3>
<h3>Step 2: Enjoy your reward and celebrate with us!</h3>
<br>
     `;
    } else if (friendName === 'Friend 2') {
        content = `
<h2>Upcoming Events!</h2>
<h6> Mark your calendars and join us for these exciting events!</h6>
<h3>Red Cross Youth Month Celebration <span class="blue-outline">(October 31)</span></h3>
<h5>Join us in celebrating the significant contributions of young people to building better and more compassionate communities.</h5>
<h3>&nbsp; </h3>
<h3>Blood Typing <span class="blue-outline">(November 11)</span></h3>
<h5>Learn about the importance of blood donation and the critical need for compatible blood types. Understand your blood type and consider donating to save lives.</h5>
<h3>&nbsp; </h3>
<h3>General Assembly <span class="blue-outline">(November 15)</span></h3>
<h5>Attend our General Assembly and learn about the Red Cross Youth Council's mission, vision, values, and programs. 
Connect with other members and discover the opportunities available to you.</h5>
<h3>&nbsp; </h3>
<h3>Blood Letting  <span class="blue-outline">(November 22)</span></h3>
<h5>Participate in our blood-letting drive and help save lives. Every donation makes a difference!</h5>

            `;
    } else if (friendName === 'Friend 3') {
        content = `
      <h2>Contact Us!</h2>
<h33>Please don't hesitate to contact us </h33>
<h33>if you have any queries!</h33>
<div class="contact-list">
    <div class="contact-card">
        <img src="https://bit.ly/4dXEODN" alt="Profile Image 1" class="contact-image">
        <h3 class="contact-name">Jhoanna Camille</h3>
        <p class="contact-profession">CRCY President</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/Jhoannacamille" target="_blank" class="social-button">Facebook</a>
        </div>
    </div>

    <div class="contact-card">
        <img src="https://bit.ly/4f1SUp1" alt="Profile Image 2" class="contact-image">
        <h3 class="contact-name">Zyrus TJ Navarro</h3>
        <p class="contact-profession">CON REPRESENTATIVE</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/zyrustj.navarro" target="_blank" class="social-button">Facebook</a>
        </div>
    </div>

    <div class="contact-card">
        <img src="https://bit.ly/3Ymjh1K" alt="Profile Image 3" class="contact-image">
        <h3 class="contact-name">John Fernando Delfinado</h3>
        <p class="contact-profession">COE REPRESENTATIVE</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/johnfernando.villanuevadelfinado" target="_blank" class="social-button">Facebook</a>
        </div>
    </div>

    <div class="contact-card">
        <img src="https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/387804755_122113461434062956_8026367856573035904_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHFHUJ56xco65X-yR3dfeUrZQCWL_BA2y9lAJYv8EDbL15mjlH38zIzS0KkHdHV1_jVHzJVJXBqpW8c3JK9cwGw&_nc_ohc=vfsH870pADQQ7kNvgFhvfn-&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&_nc_gid=A4k4nKgSL1Q8ItqbYY4ouTw&oh=00_AYDnWjM4LiG2uqvcMhgWEoDvHXwsQLrAE1KTUqlZc-dT5Q&oe=672019DB" alt="Profile Image 4" class="contact-image">
        <h3 class="contact-name">Elizabeth Bayubay Galolo</h3>
        <p class="contact-profession">CAS REPRESENTATIVE</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/profile.php?id=100026784911718" target="_blank" class="social-button">Facebook</a>
        </div>
    </div>

    <div class="contact-card">
        <img src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/460943471_1046447160447941_8915044627840631055_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF92K_0gVYOMcsXnSr4hTEAowjxN7AZWEOjCPE3sBlYQ_GFS2eo-pa3MBPRLQFv-1EP6k6EOQTQXTOE8BXhrPl0&_nc_ohc=hNk9hbsf6IYQ7kNvgEL6bVh&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=Ar8qBG_-TsDhqS3WxcEu-0-&oh=00_AYB_J347asbE_GvIaj6wSj9mjMLvymvZdZ1oFWdmK-J4Ww&oe=67203B92" alt="Profile Image 5" class="contact-image">
        <h3 class="contact-name">Joemark Mejia</h3>
        <p class="contact-profession">CED REPRESENTATIVE</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/joemark.mejia.3" target="_blank" class="social-button">Facebook</a>
        </div>
    </div>

       <div class="contact-card">
        <img src="https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-1/443845140_460608096529537_4307437576666347060_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFdFBxO7zAsJQ48uObVwyM6T_tJ-CbA_8hP-0n4JsD_yL1q9Ykh7056ag15h3_-_KmfcO6Q3WBo-rzIC8s8h62W&_nc_ohc=DYv6N9iXQmIQ7kNvgGj1vOy&_nc_zt=24&_nc_ht=scontent.fmnl33-1.fna&_nc_gid=AO9iQIPud2c_JaCuqRptU98&oh=00_AYAJZjwAu1ht-HqfKp0L4NpnZCGHsb4uFAjlRuFkcpw3sw&oe=67201FCE" alt="Profile Image 5" class="contact-image">
        <h3 class="contact-name">Piolo Mendoza</h3>
        <p class="contact-profession">CA REPRESENTATIVE</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/PIOLOMNDZ" target="_blank" class="social-button">Facebook</a>
        </div>
    </div>
    
       <div class="contact-card">
        <img src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/462767338_1673482213233997_2288140893929872599_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGonPIZUFQHmQixLUXjX-VNXtqWeFn1PFBe2pZ4WfU8UBXZ0xzriDEWCu4oBRnuTHgUYg1phm_gKJ0CbOwJ_Yje&_nc_ohc=gk-J7IVKaV8Q7kNvgHBywHN&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AzOX0q2ksNVklGN2n_umt51&oh=00_AYDqNeG7lzLgl5BTEHk5RqB8wEuKFS30jgi-Etild354LA&oe=67204989" alt="Profile Image 5" class="contact-image">
        <h3 class="contact-name">Randolph Aj Ugaddan </h3>
        <p class="contact-profession">CBAPA REPRESENTATIVE</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/randolphajballesteros.ugaddan" target="_blank" class="social-button">Facebook</a>
        </div>
        
    </div>
       <div class="contact-card">
        <img src="sample 2.png" alt="Profile Image 5" class="contact-image">
        <h3 class="contact-name">CRCY OFFICIAL PAGE</h3>
        <p class="contact-profession">OFFICIAL PAGE</p>
        <div class="social-buttons">
            <a href="https://www.facebook.com/profile.php?id=61551888700101" target="_blank" class="social-button">Facebook</a>
        </div>
    </div>
    
        `;
    }

    // Insert the new content into the friendDetails div
    friendDetails.innerHTML = content;
}
document.addEventListener("DOMContentLoaded", function() {
    const text = "College Red Cross Youth Council"; // Text to type out
    const typedTextElement = document.getElementById("typed-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); // Delay between letters (100 ms)
        } else {
            // Reset after typing is complete
            setTimeout(() => {
                typedTextElement.textContent = ""; // Clear text
                index = 0; // Reset index
                type(); // Start typing again
            }, 2000); // Delay before restarting (2 seconds)
        }
    }

    type(); // Start typing effect
});