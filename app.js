// Agrawal Samaj Platform - Privacy Policy & Data Governance Logic
document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initSearchFilter();
  initPrintButton();
  initDeletionForm();
});

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
