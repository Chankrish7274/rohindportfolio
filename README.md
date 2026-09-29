# ROHIND RAGESH - ENTERPRISE IT & CLOUD OPERATIONS PORTFOLIO

A bespoke, interactive personal portfolio website engineered specifically for **Rohind Ragesh** (IT Support Specialist & AWS Certified Cloud Practitioner).

This is designed as an **Enterprise IT Operations Command Center combined with a Modern Technical Portfolio**, reflecting real-world production experience across 100+ endpoints, Active Directory, ManageEngine Endpoint Central, SentinelOne EDR, Tenable Vulnerability Management, Netskope DLP, and AWS Cloud foundations.

---

## 🚀 Live Features & Capabilities

1. **Top Telemetry & NOC Status Bar:**
   - Real-time fleet health monitor (100+ endpoints online)
   - Live system clock in Indian Standard Time (IST / UTC+5:30)
   - Dynamic gateway ping monitor (10–16ms latency)
   - Web Audio API tactical sound effects toggle (zero external audio files)
   - Multi-Theme Switcher (Cyber SOC Dark, Slate NOC, Emerald Hardened, High-Contrast Terminal)

2. **Hero Command Center & Telemetry HUD:**
   - Real-time animated canvas network constellation
   - Interactive live SOC monitor widget with recent remediation logs
   - Instant metrics counters (5+ Years IT, 100+ Endpoints, 99.2% Patch Compliance, 2+ Years Vulnerability Mgmt)
   - Direct CTA links to Incident Lab, CLI Console, and Resume

3. **Interactive Enterprise Terminal / Web CLI:**
   - Embedded bash/PowerShell style CLI (`rohind@quantiphi-ops:~$`)
   - 11+ supported commands: `whoami`, `status`, `endpoints`, `security`, `cloud`, `cert`, `skills`, `ping`, `nslookup`, `traceroute`, `rca`, `contact`, `clear`
   - Tab auto-complete, command history navigation (Up/Down arrows), and quick command chips

4. **Root Cause Analysis (RCA) & Incident Simulator:**
   - 3 real enterprise incident case studies:
     - *Case 1: Zero-Day CVE Remediation Across 100+ Workstations*
     - *Case 2: Remote Fleet VPN Latency & MTU Clamping*
     - *Case 3: Active Directory Account Lockout Storm (Event 4740)*
   - 5-stage interactive pipeline: Discovery ➔ InfoSec Alignment ➔ Sandbox Staging ➔ Silent Rollout ➔ EDR Verification & KB Article

5. **Cybersecurity & Endpoint Defense Center:**
   - Breakdown of the Security Triad: SentinelOne Singularity EDR, Tenable Nessus Scans, and Netskope DLP
   - Enterprise Vulnerability Severity & SLA Matrix (CVSS 3.1 criteria, 24h/72h SLA targets)

6. **Interactive Fleet Topology Explorer:**
   - 5-layer interactive infrastructure stack:
     - *Layer 5: AWS Cloud & Enterprise SaaS*
     - *Layer 4: Identity & Active Directory DS*
     - *Layer 3: Enterprise Perimeter & Networking*
     - *Layer 2: Unified Endpoint Mgmt & EDR*
     - *Layer 1: Workstations (Windows, macOS, Linux)*
   - Clicking any layer displays in-depth engineering configurations and runbooks.

7. **Verified Certifications & Formal Education:**
   - AWS Certified Cloud Practitioner (Validation: `78Y7S13BFJ4EQQWB`)
   - ManageEngine Certified Product Associate (ID: `MECP00036147`)
   - Master in Network Administration (Jetking Institute)
   - Bachelor of Computer Applications (Dr. N.G.P. Arts and Science College)

8. **Enterprise Service Desk / Priority Dispatch Form:**
   - Priority-based service ticket submission (P1, P2, P3, P4)
   - Automated incident ID generator (`INC-2026-XXXX`)
   - Direct contact cards with 1-click clipboard copy (Email, Mobile, LinkedIn)

9. **Resume Viewer & Standalone Printable Version:**
   - In-app glassmorphism modal with instant print/save as PDF (`window.print()`)
   - Standalone `resume.html` with clean print stylesheets for recruiter submissions.

---

## 📁 Repository Structure

```text
c:\Users\acer\Downloads\rohind\
├── index.html       # Primary enterprise command center portfolio
├── styles.css       # Complete dark SOC theme, HUD tokens, glassmorphism, responsive styles
├── app.js           # Interactive terminal, RCA simulator, Web Audio engine, telemetry logic
├── resume.html      # Standalone, clean, ATS-optimized, print-ready resume document
└── README.md        # Architecture overview and documentation
```

---

## 🛠️ Technologies & Languages Used

- **HTML5 (Semantic & Accessible):** Structured for maximum accessibility (ARIA tags, WCAG 2.1 AA compliant), OpenGraph metadata, and SEO.
- **Modern CSS3:** 
  - CSS Variables & Design Tokens
  - CSS Grid & Flexbox
  - Backdrop-filter Glassmorphism
  - Keyframe animations & `@media (prefers-reduced-motion)`
  - Media queries optimized for mobile (320px) up to 4K displays
  - `@media print` optimized CSS for one-click PDF generation
- **Vanilla ES6+ JavaScript:**
  - Zero heavy external dependencies or frameworks for lightning-fast sub-second load times
  - Native HTML5 Canvas 2D API for the interactive ambient constellation network
  - Native Web Audio API for tactical synthesized sound effects without external audio files
  - IntersectionObserver API for animated metric counters
  - Clipboard API for one-click contact copying

---

## 🌐 How to Run & Deploy

### Local Preview
Simply double-click `index.html` in any web browser (Chrome, Edge, Firefox, Safari). No build step or Node.js server required!

### Cloud Deployment Options
- **AWS S3 + CloudFront (Recommended for AWS Cloud Practitioners):** Upload `index.html`, `styles.css`, `app.js`, and `resume.html` directly into an S3 bucket configured for static web hosting with CloudFront HTTPS distribution.
- **GitHub Pages:** Push the folder to a GitHub repository and enable GitHub Pages in Settings -> Pages.
- **Vercel / Netlify:** Connect the folder or drag-and-drop for instant SSL global deployment.
