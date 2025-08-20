// SPA navigation logic
function setActiveNav(page) {
  const navButtons = document.querySelectorAll('nav button');
  navButtons.forEach(btn => btn.classList.remove('active'));
  if (page === 'about') navButtons[1].classList.add('active');
  else if (page === 'account') navButtons[2].classList.add('active');
  else if (page === 'whatsapp') navButtons[3].classList.add('active');
  else navButtons[0].classList.add('active');
}

function navigateTo(page) {
  setActiveNav(page);
  const content = document.getElementById('content');
  if (page === 'about') {
    content.innerHTML = `
      <h2>About Kinetico</h2>
      <img src="images/kinetico_logo.png" alt="Kinetico Logo" style="width:120px;margin-bottom:16px;">
      <p>If you’re new and curious about Kinetico, here’s why it’s both trustworthy and rewarding—especially for anyone in PNG looking for clean water and smart ways to earn:</p>
      <div class="services">
        <h3>💧 Why Choose Kinetico Online Rental?</h3>
        <ol>
          <li><strong>Trusted Global Brand with Local Impact</strong><br>
            Kinetico has been a pioneer in water purification since 1970, with award-winning technology and ISO certifications.<br>
            In PNG, they’ve partnered directly with BSP Bank and the government to improve water access and create economic opportunities.
          </li>
          <li><strong>Earn While Supporting Clean Water</strong><br>
            By renting water purifier equipment online, you’re not just investing—you’re helping families access safe drinking water.<br>
            Daily income is generated from your rental, with returns managed and secured by BSP Bank.
          </li>
          <li><strong>Flexible Investment Options</strong><br>
            Start small with the PureMomenter (50 PGK, 2.5 PGK/day) or go big with the Premier XP™ (6000 PGK, 180 PGK/day).<br>
            Each product has a clear cycle, fixed income, and guaranteed returns.
          </li>
          <li><strong>VIP Rewards & Referral Bonuses</strong><br>
            Invite others and earn up to 5% commission.<br>
            Climb VIP levels and unlock bonuses up to 500 PGK.
          </li>
          <li><strong>Full Insurance Coverage</strong><br>
            All equipment is insured by Pacific MMI Insurance—your investment is protected even if the device is damaged.
          </li>
          <li><strong>Mission-Driven & Certified</strong><br>
            Kinetico is certified by WQA, NSF, CE, WRAS, ACS, and more.<br>
            Their mission is to deliver sustainable water solutions and economic growth, especially in developing regions.
          </li>
        </ol>
        <h4 style="margin-top:24px;">Product Options</h4>
        <div id="productGallery" class="visuals"></div>
        <ul>
          <li>PureMomenter: 50 PGK, 2.5 PGK/day</li>
          <li>Premier XP™: 6000 PGK, 180 PGK/day</li>
        </ul>
      </div>
    `;
    // Dynamically load product images from images/products folder
    setTimeout(() => {
      const gallery = document.getElementById('productGallery');
      if (gallery) {
        // Example: List of product image filenames (update this array as you add/remove images)
        const productImages = [
          'puremomenter.jpg',
          'premierxp.jpg',
          // Add more filenames here as you upload new products
        ];
        productImages.forEach(img => {
          const el = document.createElement('img');
          el.src = `images/products/${img}`;
          el.alt = img.split('.')[0];
          el.style.margin = '0 12px 12px 0';
          gallery.appendChild(el);
        });
      }
    }, 100);
  } else if (page === 'account') {
    content.innerHTML = `
      <h2>Create Your Kinetico Account</h2>
      <img src="images/kinetico_device.jpg" alt="Kinetico Device" style="width:120px;margin-bottom:16px;">
      <p>Ready to start earning? Click below to register and choose your product.</p>
      <a href="https://www.kwssvip.com/index/auth/signup/invitecode/KPfCEX.html" target="_blank">
        <button>Go to Kinetico Registration</button>
      </a>
      <ol>
        <li>Sign up and choose your preferred product.</li>
        <li>Follow instructions for payment and setup.</li>
      </ol>
    `;
  } else if (page === 'whatsapp') {
    content.innerHTML = `
      <h2>Join Our WhatsApp Group</h2>
      <img src="images/whatsapp.png" alt="WhatsApp" style="width:80px;margin-bottom:16px;">
      <form id="whatsappForm" action="https://formspree.io/f/xwkzqgqv" method="POST">
        <label for="name">Full Name:</label>
        <input type="text" name="name" required>
        <label for="phone">WhatsApp Number:</label>
        <input type="tel" name="phone" required>
        <label for="email">Email Address:</label>
        <input type="email" name="email" required>
        <button type="submit">Join WhatsApp Group</button>
      </form>
      <div id="successMsg" class="success-message" style="display:none;">
        Thank you! Please check your email for the WhatsApp group invite link.<br>
        <a href="https://chat.whatsapp.com/F8NdXQOzhmg8t6vxeD4ofU?mode=ac_t" target="_blank">
          <button style="margin-top:12px;background:#25D366;color:#fff;border:none;padding:10px 24px;border-radius:8px;font-size:1rem;cursor:pointer;">Join WhatsApp Group Now</button>
        </a>
      </div>
    `;
    // Add form handler
    setTimeout(() => {
      const form = document.getElementById('whatsappForm');
      if (form) {
        form.onsubmit = function(e) {
          e.preventDefault();
          form.style.display = 'none';
          document.getElementById('successMsg').style.display = 'block';
          // Optionally, send form data via AJAX here
        };
      }
    }, 100);
  } else {
    // Homepage
    content.innerHTML = `
      <h2>Welcome to Kinetico Online Rental</h2>
      <img src="images/kinetico_logo.png" alt="Kinetico Logo" style="width:120px;margin-bottom:16px;">
      <p><strong>Kinetico</strong> is a globally recognized company specializing in advanced water treatment systems. Founded in 1970 by engineers Bill Prior and Jim Kewley, Kinetico revolutionized the industry by inventing the first <strong>non-electric, dual-tank, on-demand water softener</strong>. The name itself reflects the concept of <em>kinetic energy</em>—movement without electricity—since their systems operate using the flow of water rather than electrical power.</p>
      <h3 style="margin-top:24px;">🌍 Global Reach & Mission</h3>
      <ul>
        <li>Headquartered in Ohio, USA, with offices in multiple countries including Papua New Guinea.</li>
        <li><strong>Mission:</strong> Deliver smart, sustainable water solutions that improve lives and protect the planet.</li>
      </ul>
      <h3>💡 Technology Highlights</h3>
      <ul>
        <li><strong>Non-electric operation:</strong> Uses water flow to power itself—no electricity needed.</li>
        <li><strong>Twin-tank design:</strong> Ensures uninterrupted soft water supply.</li>
        <li><strong>Demand-driven regeneration:</strong> Saves water and salt by regenerating only when needed.</li>
        <li><strong>Soft/clean water rinse:</strong> Extends system life and improves efficiency.</li>
      </ul>
      <h3>🛠️ Products & Services</h3>
      <ul>
        <li>Water softeners, purifiers, and filtration systems for residential, commercial, and industrial use.</li>
        <li>Online rental programs that allow users to invest in water purification equipment and earn daily income.</li>
      </ul>
      <h3>🏆 Certifications & Recognition</h3>
      <ul>
        <li>ISO-certified for water security and data management.</li>
        <li>Certified by WQA, NSF, CE, WRAS, ACS, and more.</li>
        <li>Winner of multiple awards including House Beautiful and Build It Awards.</li>
      </ul>
      <p>Kinetico stands out for combining <strong>engineering excellence</strong>, <strong>environmental responsibility</strong>, and <strong>economic opportunity</strong>—especially through its online rental model in PNG and other regions.</p>
      <div class="visuals">
        <img src="images/kinetico_device.jpg" alt="Kinetico Water Purifier">
      </div>
      <div style="margin-top:24px;">
        <button onclick="navigateTo('about')">Learn More</button>
        <button onclick="navigateTo('account')">Start Earning with Kinetico</button>
        <button onclick="navigateTo('whatsapp')">Join WhatsApp Group</button>
      </div>
      <section id="proofSection" style="margin-top:40px;">
        <h3>💸 Proof of Daily Income & Withdrawals</h3>
        <p>See real photos of my daily income and withdrawal receipts. I update this section regularly so you can trust Kinetico’s earning potential!</p>
        <div id="proofGallery" class="visuals"></div>
      </section>
      <section id="contactSection" style="margin-top:40px;">
        <h3>👤 About Me & Contact Info</h3>
        <div style="display:flex;align-items:center;gap:32px;flex-wrap:wrap;">
          <img src="images/profile.jpg" alt="Bronson Barnabas" style="width:120px;height:120px;object-fit:cover;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.12);">
          <div>
            <p><strong>Name:</strong> Bronson Barnabas</p>
            <p><strong>Email:</strong> <a href="mailto:bronsonbarnabas27@gmail.com" style="color:#0097a7;text-decoration:underline;">bronsonbarnabas27@gmail.com</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/67570000000" style="color:#0097a7;text-decoration:underline;">+675 7000 0000</a></p>
            <p><strong>Location:</strong> Port Moresby, PNG</p>
          </div>
        </div>
      </section>
    `;
    // Dynamically load product images from images/products folder
    setTimeout(() => {
      const gallery = document.getElementById('productGallery');
      if (gallery) {
        // Example: List of product image filenames (update this array as you add/remove images)
        const productImages = [
          'puremomenter.jpg',
          'premierxp.jpg',
          // Add more filenames here as you upload new products
        ];
        productImages.forEach(img => {
          const el = document.createElement('img');
          el.src = `images/products/${img}`;
          el.alt = img.split('.')[0];
          el.style.margin = '0 12px 12px 0';
          gallery.appendChild(el);
        });
      }
      // Dynamically load proof images from images/proof folder
      const proofGallery = document.getElementById('proofGallery');
      if (proofGallery) {
        // Example: List of proof image filenames (update this array as you add/remove images)
        const proofImages = [
          'income1.jpg',
          'income2.jpg',
          'withdrawal1.jpg',
          // Add more filenames here as you upload new proof images
        ];
        proofImages.forEach(img => {
          const el = document.createElement('img');
          el.src = `images/proof/${img}`;
          el.alt = 'Proof: ' + img.split('.')[0];
          el.style.margin = '0 12px 12px 0';
          proofGallery.appendChild(el);
        });
      }
    }, 100);
  }
}

// Initial load
window.onload = function() {
  navigateTo();
};
