/**
 * ==========================================================================
 * ROHIND RAGESH - MODERN INTERACTIVE IT PORTFOLIO
 * High-Impact JavaScript Engine:
 *  - Interactive Dashboard Mockup Switcher
 *  - Incident Response 4-Stage Pipeline
 *  - Sticky Nav Blur & ScrollSpy
 *  - 1-Click Clipboard Copying
 *  - Executive Resume Modal
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. STICKY NAV SCROLL & SCROLLSPY
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navBackdrop = document.querySelector('.mobile-nav-backdrop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        activeLink?.classList.add('active');
      }
    });
  });

  function closeMobileMenu() {
    if (navMenu) navMenu.classList.remove('mobile-open');
    if (navBackdrop) navBackdrop.classList.remove('active');
    if (mobileToggle) {
      mobileToggle.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('menu-locked');
  }

  function openMobileMenu() {
    if (navMenu) navMenu.classList.add('mobile-open');
    if (navBackdrop) navBackdrop.classList.add('active');
    if (mobileToggle) {
      mobileToggle.classList.add('is-open');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('menu-locked');
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('mobile-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    const mobileCtaButtons = navMenu.querySelectorAll('.mobile-nav-cta a, .mobile-nav-cta button');
    mobileCtaButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  /* ==========================================================================
     2. HERO DASHBOARD MOCKUP SWITCHER
     ========================================================================== */
  const mockupTabBtns = document.querySelectorAll('.m-tab-btn');
  const fleetVal = document.getElementById('m-fleet-val');
  const socVal = document.getElementById('m-soc-val');

  const mockupModes = {
    fleet: {
      fVal: "100+ Workstations",
      sVal: "99.2% Compliant"
    },
    soc: {
      fVal: "SentinelOne EDR",
      sVal: "0 Active Threats"
    },
    cloud: {
      fVal: "AWS IAM / EC2",
      sVal: "CloudWatch Healthy"
    }
  };

  mockupTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mockupTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mock') || 'fleet';
      if (mockupModes[mode]) {
        if (fleetVal) fleetVal.textContent = mockupModes[mode].fVal;
        if (socVal) socVal.textContent = mockupModes[mode].sVal;
      }
    });
  });

  /* ==========================================================================
     3. INTERACTIVE INCIDENT RESPONSE LAB
     ========================================================================== */
  const scenarios = {
    cve: {
      title: "Zero-Day CVE Remediation Across 100+ Endpoints",
      steps: [
        {
          num: "STAGE 01",
          title: "Tenable Vulnerability Discovery",
          log: `[Tenable Nessus Sensor - Subnet 10.0.12.0/24]
VULNERABILITY ID: CVE-2024-38021 (Windows Remote Code Execution)
CVSS v3 SCORE   : 8.8 (HIGH SEVERITY / EXPLOITABLE)
AFFECTED FLEET  : 48 Windows 10/11 Workstations across Engineering & Ops
ACTION TAKEN    : Flagged in Tenable console; prioritized with Cybersecurity team.`
        },
        {
          num: "STAGE 02",
          title: "Risk Scoring & InfoSec Alignment",
          log: `[InfoSec Incident Ticket #SEC-9921]
SEVERITY MATRIX : Tier 1 Critical Vulnerability
IMPACT ANALYSIS : Potential unauthorized memory corruption via malformed RPC packet.
APPROVER        : Information Security Lead & IT Operations
DECISION        : Emergency 24-hr silent patch deployment authorized.`
        },
        {
          num: "STAGE 03",
          title: "ManageEngine Silent Fleet Rollout",
          log: `[ManageEngine Endpoint Central - Silent Distribution Job]
TARGETS         : 48 Production Workstations
POLICY          : Install silently in background; suppress invasive reboot prompt.
PROGRESS        : [████████████████████████████████] 100% Complete
STATUS          : 48/48 Installed successfully. 0 Failures.`
        },
        {
          num: "STAGE 04",
          title: "SentinelOne Telemetry & Rescan Verification",
          log: `[SentinelOne Management Console & Tenable Audit]
SENTINELONE EDR : Behavioral engine reports clean baseline; no DLL injections.
TENABLE RESCAN  : CVE-2024-38021 Status: REMEDIATED (0 Findings)
KNOWLEDGE BASE  : Added patch hash and verification SOP to internal IT KB #KB-2024-91.
INCIDENT STATUS : CLOSED - Zero end-user downtime recorded.`
        }
      ]
    },

    vpn: {
      title: "Remote Fleet VPN Latency & MTU Clamping",
      steps: [
        {
          num: "STAGE 01",
          title: "Freshservice Incident Intake",
          log: `[Freshservice ITSM Ticket Intake]
INCIDENT ID     : INC-54201 (Priority: P2 High)
USER REPORTS    : 9 Remote Engineers experiencing VPN tunnel drops every 45-60 minutes when accessing internal git repos.
TRIAGE          : Verified Active Directory accounts active; checked ISP gateway.`
        },
        {
          num: "STAGE 02",
          title: "MTU & Route Analysis",
          log: `[Diagnostic Command Output via Remote Session]
> ping -f -l 1472 internal-repo.corp.local
Packet needs to be fragmented but DF set.
> traceroute -m 15 corp-vpn-gateway.internal
ANALYSIS: Residential ISP MTU clamping causing packet drop across VPN tunnel.`
        },
        {
          num: "STAGE 03",
          title: "MTU Clamping & Split-Tunnel Fix",
          log: `[ManageEngine Endpoint Central - Script Deployment]
1. Clamped client VPN adapter MTU to 1350 bytes (eliminating packet drops).
2. Configured strict split-tunnel DNS suffix search list in Windows network adapter.
3. Deployed silent configuration package across remote workstations.`
        },
        {
          num: "STAGE 04",
          title: "RCA Documentation & Verification",
          log: `[End-User Telemetry Verification]
PING TO REPO    : 14ms (0% packet loss over 500 ICMP packets)
VPN UPTIME      : 8+ Hours sustained without disconnect
KNOWLEDGE BASE  : Published permanent SOP KB-NET-402 (Prevented 70% repeat VPN tickets).`
        }
      ]
    },

    ad: {
      title: "Active Directory Account Lockout Storm (Event 4740)",
      steps: [
        {
          num: "STAGE 01",
          title: "Security Event 4740 Audit",
          log: `[Primary Domain Controller Event Viewer Log]
EVENT ID        : 4740 (A user account was locked out)
TARGET USERS    : 6 Accounts across Finance & Marketing OUs
CALLER MACHINE  : DESKTOP-W10-MKT04 & LAPTOP-CORP-FIN02
FREQUENCY       : 1 lockout attempt every 90 seconds.`
        },
        {
          num: "STAGE 02",
          title: "Process & Credential Manager Trace",
          log: `[Sysinternals & PowerShell Remote Triage]
CMD: Get-WinEvent -FilterHashtable @{LogName='Security';Id=4740} | Select -First 5
ANALYSIS: Stale cached password in Windows Credential Manager attempting to map legacy SMB network share after monthly company-wide password change.`
        },
        {
          num: "STAGE 03",
          title: "Credential Purge & Kerberos Renewal",
          log: `[PowerShell Remote Execution via Endpoint Central]
> cmdkey /delete:corp-fileserver.internal
> klist purge
Result: Old Kerberos ticket destroyed. Stale credentials purged from Vault.
Immediate stop of failed pre-authentication requests to Domain Controller.`
        },
        {
          num: "STAGE 04",
          title: "Account Unlock & GPO Hardening",
          log: `[Active Directory Administrative Center]
ACTION          : Unlock-ADAccount -Identity jsmith_mkt
REPLICATION     : Repadmin /syncall /AdeP (Synced across DC01 & DC02).
POLICY TWEAK    : Adjusted account lockout window threshold in GPO.
OUTCOME         : Zero user disruption; lockout cascade permanently resolved.`
        }
      ]
    }
  };

  let activeScenario = 'cve';
  let activeStep = 0;

  const scenarioTabs = document.querySelectorAll('.s-tab');
  const workflowStepsContainer = document.getElementById('workflow-steps');
  const wfLogTitle = document.getElementById('wf-log-title');
  const wfLogContent = document.getElementById('wf-log-content');

  function renderIncident() {
    const data = scenarios[activeScenario];
    if (!data) return;

    if (wfLogTitle) {
      wfLogTitle.textContent = `${data.title} — ${data.steps[activeStep].title}`;
    }
    if (wfLogContent) {
      wfLogContent.textContent = data.steps[activeStep].log;
    }

    if (workflowStepsContainer) {
      workflowStepsContainer.innerHTML = '';
      data.steps.forEach((st, idx) => {
        const stepEl = document.createElement('div');
        stepEl.className = `workflow-step ${idx === activeStep ? 'active' : ''}`;
        stepEl.innerHTML = `
          <span class="wf-step-idx">${st.num}</span>
          <span class="wf-step-title">${st.title}</span>
        `;
        stepEl.addEventListener('click', () => {
          activeStep = idx;
          renderIncident();
        });
        workflowStepsContainer.appendChild(stepEl);
      });
    }
  }

  scenarioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      scenarioTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeScenario = tab.getAttribute('data-scenario') || 'cve';
      activeStep = 0;
      renderIncident();
    });
  });

  renderIncident();

  /* ==========================================================================
     4. RESUME MODAL HANDLER
     ========================================================================== */
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = document.querySelectorAll('.btn-open-resume');
  const closeResumeBtn = document.getElementById('modal-close-btn');

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal?.classList.add('active');
    });
  });

  closeResumeBtn?.addEventListener('click', () => {
    resumeModal?.classList.remove('active');
  });

  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('active');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      resumeModal?.classList.remove('active');
    }
  });

  /* ==========================================================================
     5. 1-CLICK CLIPBOARD COPY
     ========================================================================== */
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = `Copied! ✓`;
          btn.style.borderColor = '#10b981';
          btn.style.color = '#34d399';
          setTimeout(() => {
            btn.innerHTML = original;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        });
      }
    });
  });

  /* ==========================================================================
     6. CONTACT FORM SUBMISSION FEEDBACK
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `Message Dispatched Successfully! ✓`;
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3500);
      }
    });
  }

  console.log("%c[ROHIND RAGESH ENTERPRISE PORTFOLIO ENGINE LOADED]", "color: #818cf8; font-weight: bold; font-size: 14px;");
});
