"use client";

import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent");
    if (!saved) {
      setVisible(true);
    } else {
      setConsentGiven(true);
    }
  }, []);

  const saveConsent = (data) => {
    localStorage.setItem("cookieConsent", JSON.stringify(data));
    setConsentGiven(true);
    setVisible(false);
    setPreferencesOpen(false);
  };

  const resetConsent = () => {
    localStorage.removeItem("cookieConsent");
    setVisible(true);
    setPreferencesOpen(true);
  };

  if (!visible && !preferencesOpen && !consentGiven) return null;

  return (
    <>
      {(visible || preferencesOpen) && (
        <div className={styles.banner}>
          {!preferencesOpen ? (
            <div className={styles.modal}>
              <div className={styles.header}>Manage Consent</div>
              <div className={styles.content}>
                <p className={styles.text}>
                  To provide the best experiences, we use technologies like
                  cookies to store and/or access device information...
                </p>
                <div className={styles.buttons}>
                  <button
                    onClick={() =>
                      saveConsent({
                        functional: true,
                        statistics: true,
                        marketing: true,
                      })
                    }
                  >
                    Accept
                  </button>
                  <button
                    onClick={() =>
                      saveConsent({
                        functional: true,
                        statistics: false,
                        marketing: false,
                      })
                    }
                  >
                    Deny
                  </button>
                  <button onClick={() => setPreferencesOpen(true)}>
                    View Preferences
                  </button>
                </div>
              </div>
              <div className={styles.links}>
                <Link href="/cookie-policy" target="_blank">
                  Cookies Policy
                </Link>
                <Link href="/privacy-policy" target="_blank">
                  Privacy Policy
                </Link>
              </div>
            </div>
          ) : (
            <div className={styles.preferences}>
              <div className={styles.prefContent}>
                <div className={styles.options}>
                  <div className={styles.optionBlock}>
                    <strong>Functional (Always Active)</strong>
                    <div className={styles.desc}>
                      Needed to enable basic site functionality.
                    </div>
                  </div>
                  <div className={styles.optionBlock}>
                    <label>
                      <strong>Statistics</strong>
                      <input
                        type="checkbox"
                        checked={statistics}
                        onChange={() => setStatistics(!statistics)}
                      />
                    </label>
                    <div className={styles.desc}>
                      Used for statistical analysis.
                    </div>
                  </div>
                  <div className={styles.optionBlock}>
                    <label>
                      <strong>Marketing</strong>
                      <input
                        type="checkbox"
                        checked={marketing}
                        onChange={() => setMarketing(!marketing)}
                      />
                    </label>
                    <div className={styles.desc}>
                      Used for personalized ads.
                    </div>
                  </div>
                </div>
                <div className={styles.prefText}>
                  <p>
                    We use cookies to improve your experience. You can manage
                    your preferences here.
                  </p>
                </div>
                <div className={styles.sideButtons}>
                  <button
                    onClick={() =>
                      saveConsent({
                        functional: true,
                        statistics: true,
                        marketing: true,
                      })
                    }
                  >
                    Accept all
                  </button>
                  <button
                    onClick={() =>
                      saveConsent({
                        functional: true,
                        statistics: false,
                        marketing: false,
                      })
                    }
                  >
                    Deny
                  </button>
                  <button
                    onClick={() =>
                      saveConsent({ functional: true, statistics, marketing })
                    }
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {consentGiven && !visible && !preferencesOpen && (
        <button
          className={styles.miniManageBtn}
          onClick={() => setPreferencesOpen(true)}
        >
          🍪 Cookies
        </button>
      )}
    </>
  );
}