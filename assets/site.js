(() => {
  "use strict";

  const config = window.LEAPWISE_SITE || {};
  const email = String(config.email || "").trim();
  const companyNumber = String(config.companyNumber || "").trim();
  const registeredIn = String(config.registeredIn || "").trim();
  const registeredOffice = String(config.registeredOffice || "").trim();

  document.querySelectorAll(".js-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  if (email && email.includes("@")) {
    const emailHref = `mailto:${email}?subject=${encodeURIComponent(
      "New enquiry for LeapWise Global Consulting"
    )}`;

    document.querySelectorAll(".js-email-link").forEach((link) => {
      link.href = emailHref;
      link.hidden = false;
    });

    document.querySelectorAll(".js-email-text").forEach((element) => {
      element.textContent = email;
    });

    document.querySelectorAll(".js-contact-pending").forEach((element) => {
      element.hidden = true;
    });
  }

  if (companyNumber && registeredOffice) {
    const disclosure =
      `LeapWise Global Consulting is registered in ${registeredIn || "the United Kingdom"} ` +
      `under company number ${companyNumber}. Registered office: ${registeredOffice}.`;

    document.querySelectorAll(".js-legal-disclosure").forEach((element) => {
      element.textContent = disclosure;
      element.hidden = false;
    });
  }
})();
