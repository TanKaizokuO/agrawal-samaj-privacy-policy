// Agrawal Samaj Platform - Privacy Policy & Data Governance Logic
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollSpy();
  initSearchFilter();
  initPrintButton();
  initDeletionForm();
});

/* Theme Toggle (Light / Dark) */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(activeTheme);
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light', false);
    }
  });
}

function setTheme(theme, save = true) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon(true);
  } else {
    document.documentElement.removeAttribute('data-theme');
    updateThemeIcon(false);
  }
  if (save) {
    localStorage.setItem('theme', theme);
  }
}

function updateThemeIcon(isDark) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  btn.innerHTML = isDark
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

/* ScrollSpy for Table of Contents */
function initScrollSpy() {
  const sections = document.querySelectorAll('.content-section[id]');
  const tocLinks = document.querySelectorAll('.toc-link');
  if (!sections.length || !tocLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* Live Search Filter */
function initSearchFilter() {
  const searchInput = document.getElementById('policy-search');
  if (!searchInput) return;

  const sections = document.querySelectorAll('.content-section');
  const tocLinks = document.querySelectorAll('.toc-link');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
      sections.forEach((sec) => (sec.style.display = ''));
      tocLinks.forEach((link) => (link.parentElement.style.display = ''));
      return;
    }

    sections.forEach((sec) => {
      const text = sec.textContent.toLowerCase();
      const matches = text.includes(query);
      sec.style.display = matches ? '' : 'none';

      // Also filter corresponding TOC item
      const secId = sec.getAttribute('id');
      if (secId) {
        const link = document.querySelector(`.toc-link[href="#${secId}"]`);
        if (link && link.parentElement) {
          link.parentElement.style.display = matches ? '' : 'none';
        }
      }
    });
  });
}

/* Print Button */
function initPrintButton() {
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* Account Deletion Request Generator */
function initDeletionForm() {
  const form = document.getElementById('account-deletion-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneInput = document.getElementById('del-phone');
    const nameInput = document.getElementById('del-name');
    const familyIdInput = document.getElementById('del-family-id');
    const reasonInput = document.getElementById('del-reason');
    const confirmCheck = document.getElementById('del-confirm');

    if (!confirmCheck || !confirmCheck.checked) {
      alert('Please confirm that you acknowledge the account deletion terms.');
      return;
    }

    const phone = phoneInput ? phoneInput.value.trim() : '';
    const name = nameInput ? nameInput.value.trim() : '';
    const familyId = familyIdInput ? familyIdInput.value.trim() : 'Not Provided';
    const reason = reasonInput ? reasonInput.value.trim() : 'User requested account erasure';

    if (!phone) {
      alert('Please enter your registered 10-digit mobile number.');
      return;
    }

    const recipient = 'help.agrawal.app@gmail.com';
    const subject = encodeURIComponent(`Account Deletion Request - Agrawal Samaj App - ${phone}`);
    const body = encodeURIComponent(
`Dear Grievance & Data Protection Officer,

I hereby submit a formal request for account deletion and data erasure from the Agrawal Samaj Digital Platform under Section 12(3) of the Digital Personal Data Protection Act (DPDP Act), 2023 and the Google Play User Data Policy.

Account Information:
- Registered Mobile Number: ${phone}
- Member Name: ${name}
- Family ID (if known): ${familyId}
- Reason for Deletion: ${reason}

I understand that upon verification:
1. My public member profile, directory listings, photographs, family links, and active credentials will be immediately purged.
2. Statutory financial audit logs and mandatory processing records will be retained in restricted storage for 12 months as mandated by Indian law and DPDP Rule 8(3), after which they will be permanently destroyed.

Please confirm receipt and completion of this request within the statutory 30-day window.

Sincerely,
${name || 'Agrawal Samaj Member'}
`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    const statusMsg = document.getElementById('deletion-status-msg');
    if (statusMsg) {
      statusMsg.style.display = 'block';
    }
  });
}
