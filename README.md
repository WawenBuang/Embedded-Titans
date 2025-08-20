[README.md](https://github.com/user-attachments/files/21908106/README.md)
# 🌐 Project Overview: Kinetico Promotion Website
**Author:** Bronson Barnabas  
**Purpose:** Build a promotional website to introduce new users to Kinetico’s water purifier rental system in Papua New Guinea, and guide them through account creation and WhatsApp group onboarding.

---

## 🧭 Website Goals

1. **Educate Visitors**  
   - Explain what Kinetico is, its mission, and how the online rental system works.
   - Highlight benefits: clean water access, daily income, insurance protection, and VIP rewards.

2. **Invite Participation**  
   - Provide a **link to create a Kinetico account** (external or embedded).
   - Provide a **form for users to join a WhatsApp group** for updates, support, and community.

---

## 🔗 User Flow

1. **Homepage**  
   - Welcome message and intro to Kinetico  
   - Button: “Learn More” → goes to About page  
   - Button: “Start Earning with Kinetico” → goes to Account Creation page

2. **About Page**  
   - Overview of Kinetico’s history, mission, and PNG partnership  
   - Visual breakdown of product options and income potential  
   - Testimonials or success stories (optional)

3. **Create Account Page**  
   - External link to Kinetico registration (e.g., `https://www.kwssvip.com`)  
   - Instructions on how to sign up and choose a product

4. **Join WhatsApp Group Page**  
   - Simple form: Name, Phone Number, Email  
   - Submit button → stores data or sends to Bronson’s email  
   - Confirmation message with WhatsApp group invite link

---

## 🛠️ Tech Stack Suggestions

- **Frontend:** HTML, CSS, JavaScript (or React if preferred)  
- **Form Handling:** Google Forms, Formspree, or custom backend (Node.js + Express)  
- **Hosting:** GitHub Pages, Netlify, or Vercel  
- **WhatsApp Integration:** Manual invite via link or automated message using Twilio (optional)

---

## ✅ Example Form Fields

```
<form action="https://formspree.io/f/your-form-id" method="POST">
  <label for="name">Full Name:</label>
  <input type="text" name="name" required>

  <label for="phone">WhatsApp Number:</label>
  <input type="tel" name="phone" required>

  <label for="email">Email Address:</label>
  <input type="email" name="email" required>

  <button type="submit">Join WhatsApp Group</button>
</form>
```

---
