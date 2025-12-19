# Fitness 365 Website

A premium, high-converting React website for Fitness 365, Ahmedabad. Built with React, TypeScript, Vite, and Framer Motion.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory (copy from `.env.example` if available):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 📧 EmailJS Configuration (Important)

This website uses EmailJS to send lead inquiries directly to your email without a backend server.

### Step 1: Create Account
Go to [EmailJS](https://www.emailjs.com/) and create a free account.

### Step 2: Add Email Service
1. Go to "Email Services" tab.
2. Click "Add New Service".
3. Select "Gmail" (or your preferred provider).
4. Connect your account and click "Create Service".
5. Copy the **Service ID** (e.g., `service_xyz123`) and paste it into `.env` as `VITE_EMAILJS_SERVICE_ID`.

### Step 3: Create Email Template
1. Go to "Email Templates" tab.
2. Click "Create New Template".
3. **Template Settings**:
   - **Subject**: `New Lead: {{full_name}} - {{goal}}`
   - **Content**:
     ```html
     <h3>New Lead from Website</h3>
     <p><strong>Name:</strong> {{full_name}}</p>
     <p><strong>Email:</strong> {{email}}</p>
     <p><strong>Phone:</strong> {{phone}}</p>
     <p><strong>Goal:</strong> {{goal}}</p>
     <p><strong>Preferred Time:</strong> {{preferred_time}}</p>
     <p><strong>Message:</strong></p>
     <p>{{message}}</p>
     ```
4. **Auto-Reply (Optional)**:
   - You can enable "Auto-Reply" in the template settings to send a confirmation to the user.
   - **To Email**: `{{email}}`
   - **Subject**: `Welcome to Fitness 365!`
   - **Content**: `Hi {{full_name}}, thanks for your interest! We will contact you shortly.`
5. Save the template.
6. Copy the **Template ID** (e.g., `template_abc123`) and paste it into `.env` as `VITE_EMAILJS_TEMPLATE_ID`.

### Step 4: Get Public Key
1. Go to "Account" (click your avatar in top right).
2. Copy the **Public Key** and paste it into `.env` as `VITE_EMAILJS_PUBLIC_KEY`.

---

## 🖼️ Managing Content

### Images
Place your real images in `src/assets/images/`.
To use them, update `src/data/gallery.ts` or `src/data/programs.ts` to import them:

```typescript
import gym1 from '../assets/images/gym-1.jpg';
// ...
export const GALLERY_IMAGES = [gym1, ...];
```

### Text & Data
You can easily update prices, text, and settings in the `src/data/` folder:

- **Business Info**: `src/data/business.ts` (Phone, Address, Links)
- **Pricing**: `src/data/pricing.ts`
- **Programs**: `src/data/programs.ts`
- **Coaches**: `src/data/coaches.ts`
- **FAQ**: `src/data/faq.ts`

---

## 🇮🇳 Indian Market Specifics
- Currency is set to INR (₹).
- Phone numbers are formatted for India (+91).
- WhatsApp integration is pre-configured.

## 🛠️ Tech Stack
- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: EmailJS
