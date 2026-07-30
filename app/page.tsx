"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [issueCategory, setIssueCategory] = useState<
    "wifi" | "account" | "printer" | "hardware" | "software" | "email" | "network-access" | "mobile-collaboration" | "data-storage" | "security"
  >("wifi");
  const [chatStarted, setChatStarted] = useState(false);
  const [accountProblem, setAccountProblem] = useState<
    "forgot" | "locked" | "mfa" | null
  >(null);
  const [accountStepsDone, setAccountStepsDone] = useState(false);
  const [accountResolved, setAccountResolved] = useState<"yes" | "no" | null>(
    null,
  );
  const [printerProblem, setPrinterProblem] = useState<
    "offline" | "quality" | "scanner" | null
  >(null);
  const [printerStepsDone, setPrinterStepsDone] = useState(false);
  const [printerResolved, setPrinterResolved] = useState<"yes" | "no" | null>(
    null,
  );
  const [hardwareProblem, setHardwareProblem] = useState<
    "slow" | "power" | "crash" | "peripheral" | "charging" | null
  >(null);
  const [hardwareStepsDone, setHardwareStepsDone] = useState(false);
  const [hardwareResolved, setHardwareResolved] = useState<"yes" | "no" | null>(
    null,
  );
  const [softwareProblem, setSoftwareProblem] = useState<
    "crash" | "install" | "license" | "compatibility" | null
  >(null);
  const [softwareStepsDone, setSoftwareStepsDone] = useState(false);
  const [softwareResolved, setSoftwareResolved] = useState<"yes" | "no" | null>(
    null,
  );
  const [emailProblem, setEmailProblem] = useState<
    "delivery" | "sync" | "phishing" | "group" | null
  >(null);
  const [phishingClicked, setPhishingClicked] = useState<"yes" | "no" | null>(
    null,
  );
  const [emailStepsDone, setEmailStepsDone] = useState(false);
  const [emailResolved, setEmailResolved] = useState<"yes" | "no" | null>(null);
  const [networkAccessProblem, setNetworkAccessProblem] = useState<
    "vpn" | "vpn-drop" | "shared-drive" | "slow-network" | null
  >(null);
  const [networkAccessStepsDone, setNetworkAccessStepsDone] = useState(false);
  const [networkAccessResolved, setNetworkAccessResolved] = useState<
    "yes" | "no" | null
  >(null);
  const [mobileProblem, setMobileProblem] = useState<
    "phone-sync" | "camera-mic" | "meeting" | "notifications" | null
  >(null);
  const [mobileStepsDone, setMobileStepsDone] = useState(false);
  const [mobileResolved, setMobileResolved] = useState<"yes" | "no" | null>(
    null,
  );
  const [dataProblem, setDataProblem] = useState<
    "deleted" | "corrupt" | "storage" | "backup" | null
  >(null);
  const [dataStepsDone, setDataStepsDone] = useState(false);
  const [dataResolved, setDataResolved] = useState<"yes" | "no" | null>(null);
  const [securityIncident, setSecurityIncident] = useState<
    "ransomware" | "phishing" | "lost-device" | "suspicious-login" | null
  >(null);
  const [wifiAnswer, setWifiAnswer] = useState<"yes" | "no" | null>(null);
  const [networkVisible, setNetworkVisible] = useState<"yes" | "no" | null>(null);
  const [connectionIssue, setConnectionIssue] = useState<
    "password" | "cannot-connect" | "no-internet" | null
  >(null);
  const [passwordStepsDone, setPasswordStepsDone] = useState(false);
  const [passwordConnected, setPasswordConnected] = useState<
    "yes" | "no" | null
  >(null);
  const [connectionStepsDone, setConnectionStepsDone] = useState(false);
  const [connectionRestored, setConnectionRestored] = useState<
    "yes" | "no" | null
  >(null);
  const [wifiRestarted, setWifiRestarted] = useState(false);
  const [internetWorking, setInternetWorking] = useState<"yes" | "no" | null>(
    null,
  );
  const [otherDeviceWorking, setOtherDeviceWorking] = useState<
    "yes" | "no" | null
  >(null);
  const [ticketId, setTicketId] = useState("");
  const [ticketIssue, setTicketIssue] = useState("Possible Wi-Fi network outage");
  const [ticketPriority, setTicketPriority] = useState<"High" | "Critical">("High");
  const [ticketStatus, setTicketStatus] = useState<
    "Open" | "In progress" | "Resolved"
  >("Open");
  const [showDashboard, setShowDashboard] = useState(false);

  function startSupport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const selectedDepartment = String(form.get("department") ?? "").trim();
    const selectedCategory = String(form.get("category") ?? "").trim() as
      | "wifi"
      | "account"
      | "printer"
      | "hardware"
      | "software"
      | "email"
      | "network-access"
      | "mobile-collaboration"
      | "data-storage"
      | "security";
    const issue = String(form.get("issue") ?? "").trim();

    if (!name || !selectedCategory || !issue) {
      setMessage("Please complete your name, issue category and description.");
      return;
    }

    setEmployeeName(name);
    setDepartment(selectedDepartment || "Not provided");
    setIssueCategory(selectedCategory);
    setChatStarted(true);
    setMessage("");
  }

  function createTicket(
    issue = "Possible Wi-Fi network outage",
    priority: "High" | "Critical" = "High",
  ) {
    setTicketId(`CHAI-${String(Date.now()).slice(-6)}`);
    setTicketIssue(issue);
    setTicketPriority(priority);
    setTicketStatus("Open");
  }

  function startNewRequest() {
    setMessage("");
    setEmployeeName("");
    setDepartment("");
    setIssueCategory("wifi");
    setChatStarted(false);
    setAccountProblem(null);
    setAccountStepsDone(false);
    setAccountResolved(null);
    setPrinterProblem(null);
    setPrinterStepsDone(false);
    setPrinterResolved(null);
    setHardwareProblem(null);
    setHardwareStepsDone(false);
    setHardwareResolved(null);
    setSoftwareProblem(null);
    setSoftwareStepsDone(false);
    setSoftwareResolved(null);
    setEmailProblem(null);
    setPhishingClicked(null);
    setEmailStepsDone(false);
    setEmailResolved(null);
    setNetworkAccessProblem(null);
    setNetworkAccessStepsDone(false);
    setNetworkAccessResolved(null);
    setMobileProblem(null);
    setMobileStepsDone(false);
    setMobileResolved(null);
    setDataProblem(null);
    setDataStepsDone(false);
    setDataResolved(null);
    setSecurityIncident(null);
    setWifiAnswer(null);
    setNetworkVisible(null);
    setConnectionIssue(null);
    setPasswordStepsDone(false);
    setPasswordConnected(null);
    setConnectionStepsDone(false);
    setConnectionRestored(null);
    setWifiRestarted(false);
    setInternetWorking(null);
    setOtherDeviceWorking(null);
    setShowDashboard(false);
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Chai Technologies home">
          <span className="brand-mark">C</span>
          <span>Chai Technologies</span>
        </a>
        <div className="header-actions">
          <span className="service-status">
            <i aria-hidden="true" /> IT services online
          </span>
          <button
            className="dashboard-link"
            type="button"
            onClick={() => setShowDashboard((current) => !current)}
          >
            {showDashboard ? "Employee portal" : "Technician dashboard"}
          </button>
        </div>
      </header>

      {!showDashboard ? (
      <section className="page-shell">
        <div className="intro">
          <p className="eyebrow">Employee support portal</p>
          <h1>How can we help?</h1>
          <p>
            Tell us what has gone wrong. Our virtual IT assistant will guide
            you through a few safe checks.
          </p>
        </div>

        {!chatStarted ? (
        <form className="support-card" onSubmit={startSupport}>
          <div className="card-heading">
            <span className="support-icon" aria-hidden="true">?</span>
            <div>
              <h2>Start IT support</h2>
              <p>Enter a few details to begin.</p>
            </div>
          </div>

          <label htmlFor="name">Your name</label>
          <input id="name" name="name" placeholder="e.g. Alex Morgan" />

          <label htmlFor="department">Department</label>
          <select id="department" name="department" defaultValue="">
            <option value="" disabled>Select your department</option>
            <option>Finance</option>
            <option>Human Resources</option>
            <option>Operations</option>
            <option>Sales</option>
          </select>

          <label htmlFor="category">Type of problem</label>
          <select id="category" name="category" defaultValue="">
            <option value="" disabled>Select the issue category</option>
            <option value="wifi">Wi-Fi or internet</option>
            <option value="account">Password or account locked</option>
            <option value="printer">Printer or scanner</option>
            <option value="hardware">Computer or hardware</option>
            <option value="software">Software or application</option>
            <option value="email">Email or communication</option>
            <option value="network-access">VPN, shared drive or slow network</option>
            <option value="mobile-collaboration">Mobile device, Teams or video meeting</option>
            <option value="data-storage">Files, storage or backup</option>
            <option value="security">Urgent security incident</option>
          </select>

          <label htmlFor="issue">Describe your IT problem</label>
          <textarea
            id="issue"
            name="issue"
            placeholder="e.g. My laptop will not connect to Wi-Fi"
            rows={4}
          />

          <button type="submit">Start support <span>→</span></button>
          <p className="form-message" aria-live="polite">{message}</p>
        </form>
        ) : (
          <section className="support-card chat-card" aria-live="polite">
            <div className="card-heading">
              <span className="support-icon" aria-hidden="true">C</span>
              <div>
                <h2>Chai Assistant</h2>
                <p>
                  {issueCategory === "account"
                    ? "Password and account support"
                    : issueCategory === "printer"
                      ? "Printer and scanner support"
                      : issueCategory === "hardware"
                        ? "Computer and hardware support"
                        : issueCategory === "software"
                          ? "Software and application support"
                          : issueCategory === "email"
                            ? "Email and communication support"
                            : issueCategory === "network-access"
                              ? "VPN and network access support"
                              : issueCategory === "mobile-collaboration"
                                ? "Mobile device and collaboration support"
                              : issueCategory === "data-storage"
                                ? "Files, storage and backup support"
                                : issueCategory === "security"
                                  ? "Urgent security support"
                                  : "Wi-Fi support"}
                </p>
              </div>
              <button
                className="restart-button"
                type="button"
                onClick={startNewRequest}
              >
                Start over
              </button>
            </div>

            {issueCategory === "account" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. What happens when you try to sign in?
                </div>

                {!accountProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setAccountProblem("forgot")}>
                      I forgot my password
                    </button>
                    <button type="button" onClick={() => setAccountProblem("locked")}>
                      My account is locked
                    </button>
                    <button type="button" onClick={() => setAccountProblem("mfa")}>
                      My verification code is not arriving
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">
                      {accountProblem === "forgot"
                        ? "I forgot my password"
                        : accountProblem === "locked"
                          ? "My account is locked"
                          : "My verification code is not arriving"}
                    </div>
                    <div className="security-note">
                      <strong>Security reminder</strong>
                      <span>Chai will never ask for your password or verification code.</span>
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe account check</p>
                      <h3>
                        {accountProblem === "mfa"
                          ? "Refresh your verification request"
                          : "Use the official password reset service"}
                      </h3>
                      <ol>
                        {accountProblem === "mfa" ? (
                          <>
                            <li>Check that your phone has signal or internet access.</li>
                            <li>Confirm the phone&apos;s date and time are automatic.</li>
                            <li>Request one new code and use only the latest code.</li>
                          </>
                        ) : (
                          <>
                            <li>Open the company&apos;s official password reset page.</li>
                            <li>Verify your identity using the approved method.</li>
                            <li>Create a new password and try signing in again.</li>
                          </>
                        )}
                      </ol>
                      {!accountStepsDone && (
                        <button type="button" onClick={() => setAccountStepsDone(true)}>
                          I have tried this
                        </button>
                      )}
                    </div>

                    {accountStepsDone && !accountResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Can you sign in now?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setAccountResolved("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setAccountResolved("no")}>
                            No
                          </button>
                        </div>
                      </>
                    )}

                    {accountResolved && (
                      <div className="reply">
                        <strong>
                          {accountResolved === "yes"
                            ? "Account access restored"
                            : "Secure escalation required"}
                        </strong>
                        <p>
                          {accountResolved === "yes"
                            ? "You can sign in again. Never reuse or share the old password."
                            : "Stop further attempts to avoid another lockout. IT must verify your identity before helping with access."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "printer" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Which printer problem are you having?
                </div>

                {!printerProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setPrinterProblem("offline")}>
                      Printer is offline or will not print
                    </button>
                    <button type="button" onClick={() => setPrinterProblem("quality")}>
                      Prints are faded, streaked or smudged
                    </button>
                    <button type="button" onClick={() => setPrinterProblem("scanner")}>
                      Scanner is not working
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">
                      {printerProblem === "offline"
                        ? "Printer is offline"
                        : printerProblem === "quality"
                          ? "Print quality problem"
                          : "Scanner is not working"}
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe printer check</p>
                      <h3>
                        {printerProblem === "offline"
                          ? "Check the printer connection"
                          : printerProblem === "quality"
                            ? "Check supplies and run cleaning"
                            : "Check the scanner connection"}
                      </h3>
                      <ol>
                        {printerProblem === "offline" ? (
                          <>
                            <li>Check that the printer is switched on with no error light.</li>
                            <li>Check paper, cables and any visible paper jam.</li>
                            <li>Confirm the correct printer is selected, then retry once.</li>
                          </>
                        ) : printerProblem === "quality" ? (
                          <>
                            <li>Check the displayed ink or toner level.</li>
                            <li>Check that the paper is clean and correctly loaded.</li>
                            <li>Run the printer&apos;s built-in cleaning cycle once.</li>
                          </>
                        ) : (
                          <>
                            <li>Check the scanner is powered on and connected.</li>
                            <li>Close and reopen the scanning application.</li>
                            <li>Try scanning one page to the computer first.</li>
                          </>
                        )}
                      </ol>
                      {!printerStepsDone && (
                        <button type="button" onClick={() => setPrinterStepsDone(true)}>
                          I have tried this
                        </button>
                      )}
                    </div>

                    {printerStepsDone && !printerResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Is it working now?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setPrinterResolved("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setPrinterResolved("no")}>
                            No
                          </button>
                        </div>
                      </>
                    )}

                    {printerResolved && (
                      <div className="reply">
                        <strong>
                          {printerResolved === "yes"
                            ? "Printer problem solved"
                            : "Technician support required"}
                        </strong>
                        <p>
                          {printerResolved === "yes"
                            ? "The printer or scanner is working again."
                            : "The safe checks did not solve the problem. Chai recommends creating an IT support ticket."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "hardware" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Which computer or hardware problem are
                  you having?
                </div>
                {!hardwareProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setHardwareProblem("slow")}>
                      Computer is slow or freezing
                    </button>
                    <button type="button" onClick={() => setHardwareProblem("power")}>
                      Computer will not switch on
                    </button>
                    <button type="button" onClick={() => setHardwareProblem("crash")}>
                      Blue screen, crash or unexpected restart
                    </button>
                    <button type="button" onClick={() => setHardwareProblem("peripheral")}>
                      Keyboard, mouse, monitor or webcam problem
                    </button>
                    <button type="button" onClick={() => setHardwareProblem("charging")}>
                      Laptop is not charging
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">
                      {hardwareProblem === "slow"
                        ? "Computer is slow"
                        : hardwareProblem === "power"
                          ? "Computer will not switch on"
                          : hardwareProblem === "crash"
                            ? "Computer is crashing"
                            : hardwareProblem === "peripheral"
                              ? "Peripheral problem"
                              : "Laptop is not charging"}
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe hardware check</p>
                      <h3>
                        {hardwareProblem === "slow"
                          ? "Reduce the current workload"
                          : hardwareProblem === "power"
                            ? "Check the power connection"
                            : hardwareProblem === "crash"
                              ? "Record the error and restart safely"
                              : hardwareProblem === "peripheral"
                                ? "Check the device connection"
                                : "Check the approved charger"}
                      </h3>
                      <ol>
                        {hardwareProblem === "slow" ? (
                          <>
                            <li>Save your work and close applications you recognise but do not need.</li>
                            <li>Restart the computer normally.</li>
                            <li>After restart, open only the application needed for your work.</li>
                          </>
                        ) : hardwareProblem === "power" ? (
                          <>
                            <li>Check the power cable and wall socket are firmly connected.</li>
                            <li>Disconnect non-essential USB devices and docks.</li>
                            <li>Hold the power button for 15 seconds, release it, then press once.</li>
                          </>
                        ) : hardwareProblem === "crash" ? (
                          <>
                            <li>Photograph or write down the error code if one appears.</li>
                            <li>Disconnect recently added non-essential accessories.</li>
                            <li>Restart once and note whether the same error returns.</li>
                          </>
                        ) : hardwareProblem === "peripheral" ? (
                          <>
                            <li>Reconnect the cable or wireless receiver securely.</li>
                            <li>Try another suitable port without forcing the connector.</li>
                            <li>Close and reopen the application using the device.</li>
                          </>
                        ) : (
                          <>
                            <li>Use the company-approved charger and check both connections.</li>
                            <li>Try a known working wall socket.</li>
                            <li>If the battery is swollen, unusually hot or damaged, stop using the laptop and contact IT immediately.</li>
                          </>
                        )}
                      </ol>
                      {!hardwareStepsDone && (
                        <button type="button" onClick={() => setHardwareStepsDone(true)}>
                          I have tried this
                        </button>
                      )}
                    </div>
                    {hardwareStepsDone && !hardwareResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Is the computer or device working normally now?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setHardwareResolved("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setHardwareResolved("no")}>
                            No
                          </button>
                        </div>
                      </>
                    )}
                    {hardwareResolved && (
                      <div className="reply">
                        <strong>
                          {hardwareResolved === "yes"
                            ? "Hardware problem solved"
                            : "Technician inspection required"}
                        </strong>
                        <p>
                          {hardwareResolved === "yes"
                            ? "The computer or connected device is working again."
                            : "The employee-safe checks did not solve the fault. Stop repeated attempts and create an IT support ticket."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "software" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Which software problem are you having?
                </div>
                {!softwareProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setSoftwareProblem("crash")}>
                      Application crashes, freezes or does not respond
                    </button>
                    <button type="button" onClick={() => setSoftwareProblem("install")}>
                      Approved software will not install or update
                    </button>
                    <button type="button" onClick={() => setSoftwareProblem("license")}>
                      Licence expired or application not activated
                    </button>
                    <button type="button" onClick={() => setSoftwareProblem("compatibility")}>
                      Application stopped working after an update
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">
                      {softwareProblem === "crash"
                        ? "Application keeps crashing"
                        : softwareProblem === "install"
                          ? "Installation or update failed"
                          : softwareProblem === "license"
                            ? "Licence or activation problem"
                            : "Compatibility problem"}
                    </div>
                    <div className="security-note">
                      <strong>Company software only</strong>
                      <span>
                        Do not download unapproved installers, bypass
                        administrator controls or disable security software.
                      </span>
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe software check</p>
                      <h3>
                        {softwareProblem === "crash"
                          ? "Restart and check the application"
                          : softwareProblem === "install"
                            ? "Check the approved installation"
                            : softwareProblem === "license"
                              ? "Check your company licence assignment"
                              : "Record the update and compatibility error"}
                      </h3>
                      <ol>
                        {softwareProblem === "crash" ? (
                          <>
                            <li>Save other work, close the application and reopen it once.</li>
                            <li>Restart the computer if the application still freezes.</li>
                            <li>Record any error message and check for an approved application update.</li>
                          </>
                        ) : softwareProblem === "install" ? (
                          <>
                            <li>Confirm the software came from the company portal.</li>
                            <li>Check that the computer has free storage space.</li>
                            <li>Record the exact error code; do not run it as administrator unless IT approves.</li>
                          </>
                        ) : softwareProblem === "license" ? (
                          <>
                            <li>Confirm you are signed in with the correct work account.</li>
                            <li>Restart the application and check the licence message again.</li>
                            <li>Ask IT to verify licence assignment; do not purchase a licence yourself.</li>
                          </>
                        ) : (
                          <>
                            <li>Record the application name, version and error message.</li>
                            <li>Restart the application and computer once.</li>
                            <li>Do not roll back Windows or install another version without IT approval.</li>
                          </>
                        )}
                      </ol>
                      {!softwareStepsDone && (
                        <button type="button" onClick={() => setSoftwareStepsDone(true)}>
                          I have tried this
                        </button>
                      )}
                    </div>
                    {softwareStepsDone && !softwareResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Is the application working normally now?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setSoftwareResolved("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setSoftwareResolved("no")}>
                            No
                          </button>
                        </div>
                      </>
                    )}
                    {softwareResolved && (
                      <div className="reply">
                        <strong>
                          {softwareResolved === "yes"
                            ? "Software problem solved"
                            : "IT action required"}
                        </strong>
                        <p>
                          {softwareResolved === "yes"
                            ? "The approved application is working normally again."
                            : "IT must review the error, installation rights, licence or compatibility details."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "email" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Which email or communication problem are
                  you having?
                </div>
                {!emailProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setEmailProblem("delivery")}>
                      Email will not send or messages are not arriving
                    </button>
                    <button type="button" onClick={() => setEmailProblem("sync")}>
                      Email is not syncing across devices
                    </button>
                    <button type="button" onClick={() => setEmailProblem("phishing")}>
                      Suspicious email or possible phishing
                    </button>
                    <button type="button" onClick={() => setEmailProblem("group")}>
                      Distribution list or group email problem
                    </button>
                  </div>
                ) : emailProblem === "phishing" ? (
                  <>
                    <div className="user-bubble">Suspicious email</div>
                    {!phishingClicked ? (
                      <>
                        <div className="chat-bubble second-question">
                          Did you click a link, open an attachment or enter any
                          information?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setPhishingClicked("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setPhishingClicked("no")}>
                            No
                          </button>
                        </div>
                      </>
                    ) : phishingClicked === "yes" ? (
                      <div className="emergency-card" role="alert">
                        <p className="step-label">Immediate escalation</p>
                        <h3>Contact IT Support or Security immediately</h3>
                        <p>
                          Do not click anything else. Tell IT what you clicked,
                          whether you entered information and which device you
                          used.
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            createTicket("Clicked phishing link or attachment", "Critical")
                          }
                        >
                          Create urgent security ticket
                        </button>
                      </div>
                    ) : (
                      <div className="security-note">
                        <strong>Do not interact with the message</strong>
                        <span>
                          Do not click links, open attachments or reply. Use the
                          company phishing-report button or forward it to the
                          approved Security address, then delete it only when
                          instructed.
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="user-bubble">
                      {emailProblem === "delivery"
                        ? "Email delivery problem"
                        : emailProblem === "sync"
                          ? "Email sync problem"
                          : "Distribution list problem"}
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe email check</p>
                      <h3>
                        {emailProblem === "delivery"
                          ? "Check connection, folders and account storage"
                          : emailProblem === "sync"
                            ? "Refresh email synchronisation"
                            : "Confirm the group and required access"}
                      </h3>
                      <ol>
                        {emailProblem === "delivery" ? (
                          <>
                            <li>Check that the internet works in a browser.</li>
                            <li>Look in Outbox, Junk and Deleted folders.</li>
                            <li>Check for a mailbox-full or service-outage message.</li>
                          </>
                        ) : emailProblem === "sync" ? (
                          <>
                            <li>Check the device has internet access.</li>
                            <li>Close and reopen the email application.</li>
                            <li>Compare the mailbox with company webmail without removing the account.</li>
                          </>
                        ) : (
                          <>
                            <li>Confirm the exact distribution-list name and email address.</li>
                            <li>Check whether others can send to or receive from the list.</li>
                            <li>Ask IT to verify membership and sending permission.</li>
                          </>
                        )}
                      </ol>
                      {!emailStepsDone && (
                        <button type="button" onClick={() => setEmailStepsDone(true)}>
                          I have tried this
                        </button>
                      )}
                    </div>
                    {emailStepsDone && !emailResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Is email working normally now?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setEmailResolved("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setEmailResolved("no")}>
                            No
                          </button>
                        </div>
                      </>
                    )}
                    {emailResolved && (
                      <div className="reply">
                        <strong>
                          {emailResolved === "yes"
                            ? "Email problem solved"
                            : "Email administrator support required"}
                        </strong>
                        <p>
                          {emailResolved === "yes"
                            ? "Email and communication services are working normally again."
                            : "IT must check service status, mailbox configuration, storage or group membership."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "network-access" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Which VPN or network-access problem are
                  you having?
                </div>
                {!networkAccessProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setNetworkAccessProblem("vpn")}>
                      VPN will not connect
                    </button>
                    <button type="button" onClick={() => setNetworkAccessProblem("vpn-drop")}>
                      VPN repeatedly disconnects
                    </button>
                    <button type="button" onClick={() => setNetworkAccessProblem("shared-drive")}>
                      Shared drive is missing or access is denied
                    </button>
                    <button type="button" onClick={() => setNetworkAccessProblem("slow-network")}>
                      Company network is unusually slow
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">
                      {networkAccessProblem === "vpn"
                        ? "VPN will not connect"
                        : networkAccessProblem === "vpn-drop"
                          ? "VPN keeps disconnecting"
                          : networkAccessProblem === "shared-drive"
                            ? "Shared-drive access problem"
                            : "Company network is slow"}
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe network check</p>
                      <h3>
                        {networkAccessProblem === "vpn"
                          ? "Check internet, account and approved VPN client"
                          : networkAccessProblem === "vpn-drop"
                            ? "Stabilise the connection and restart the VPN"
                            : networkAccessProblem === "shared-drive"
                              ? "Confirm the resource and company connection"
                              : "Check whether slowness affects one device or many"}
                      </h3>
                      <ol>
                        {networkAccessProblem === "vpn" ? (
                          <>
                            <li>Check that normal websites open before starting the VPN.</li>
                            <li>Confirm you are using the approved VPN application and work account.</li>
                            <li>Close the VPN application, reopen it and record any error code.</li>
                          </>
                        ) : networkAccessProblem === "vpn-drop" ? (
                          <>
                            <li>Move to a stable internet connection if available.</li>
                            <li>Close bandwidth-heavy applications you recognise.</li>
                            <li>Restart the approved VPN client once and record when it disconnects.</li>
                          </>
                        ) : networkAccessProblem === "shared-drive" ? (
                          <>
                            <li>Confirm the exact shared-drive or folder name.</li>
                            <li>Connect to the company network or approved VPN.</li>
                            <li>Record whether the drive is missing or shows Access denied; IT must change permissions.</li>
                          </>
                        ) : (
                          <>
                            <li>Check whether normal internet and company services are both slow.</li>
                            <li>Close large downloads or video streams you recognise.</li>
                            <li>Ask whether another employee nearby has the same problem.</li>
                          </>
                        )}
                      </ol>
                      {!networkAccessStepsDone && (
                        <button
                          type="button"
                          onClick={() => setNetworkAccessStepsDone(true)}
                        >
                          I have tried this
                        </button>
                      )}
                    </div>
                    {networkAccessStepsDone && !networkAccessResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Is the VPN or network resource working now?
                        </div>
                        <div className="answer-buttons">
                          <button
                            type="button"
                            onClick={() => setNetworkAccessResolved("yes")}
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            onClick={() => setNetworkAccessResolved("no")}
                          >
                            No
                          </button>
                        </div>
                      </>
                    )}
                    {networkAccessResolved && (
                      <div className="reply">
                        <strong>
                          {networkAccessResolved === "yes"
                            ? "Network-access problem solved"
                            : "Network technician support required"}
                        </strong>
                        <p>
                          {networkAccessResolved === "yes"
                            ? "The VPN or company network resource is available again."
                            : "IT must check permissions, VPN services, firewall policy or a wider network fault."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "mobile-collaboration" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Which mobile or collaboration problem are you having?
                </div>
                {!mobileProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setMobileProblem("phone-sync")}>
                      Work email or Teams is not syncing on my phone
                    </button>
                    <button type="button" onClick={() => setMobileProblem("camera-mic")}>
                      Camera or microphone is not working
                    </button>
                    <button type="button" onClick={() => setMobileProblem("meeting")}>
                      I cannot join a Teams or video meeting
                    </button>
                    <button type="button" onClick={() => setMobileProblem("notifications")}>
                      Work notifications are not appearing
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">
                      {mobileProblem === "phone-sync"
                        ? "My work apps are not syncing on my phone"
                        : mobileProblem === "camera-mic"
                          ? "My camera or microphone is not working"
                          : mobileProblem === "meeting"
                            ? "I cannot join a video meeting"
                            : "Work notifications are not appearing"}
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe device check</p>
                      <h3>
                        {mobileProblem === "phone-sync"
                          ? "Check the connection and approved work account"
                          : mobileProblem === "camera-mic"
                            ? "Check the selected device and permissions"
                            : mobileProblem === "meeting"
                              ? "Check the invitation, app and connection"
                              : "Check notification and focus settings"}
                      </h3>
                      <ol>
                        {mobileProblem === "phone-sync" ? (
                          <>
                            <li>Check that the phone has working Wi-Fi or mobile data.</li>
                            <li>Open the approved work app and confirm it shows the correct work account.</li>
                            <li>Close and reopen the app once; do not remove company management settings.</li>
                          </>
                        ) : mobileProblem === "camera-mic" ? (
                          <>
                            <li>Check that the meeting app has camera and microphone permission.</li>
                            <li>In the meeting settings, select the correct camera, microphone and speaker.</li>
                            <li>Close other apps using the camera or microphone, then test again.</li>
                          </>
                        ) : mobileProblem === "meeting" ? (
                          <>
                            <li>Open the meeting from the original calendar invitation.</li>
                            <li>Check the internet connection and use the approved meeting application.</li>
                            <li>Restart the app once and record any error code or message.</li>
                          </>
                        ) : (
                          <>
                            <li>Check that notifications are allowed for the approved work app.</li>
                            <li>Check whether Focus, Do Not Disturb or Battery Saver is silencing alerts.</li>
                            <li>Open the app and confirm the correct work account is signed in.</li>
                          </>
                        )}
                      </ol>
                      {!mobileStepsDone && (
                        <button type="button" onClick={() => setMobileStepsDone(true)}>
                          I have tried this
                        </button>
                      )}
                    </div>
                    {mobileStepsDone && !mobileResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Is the mobile or collaboration problem resolved?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setMobileResolved("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setMobileResolved("no")}>
                            No
                          </button>
                        </div>
                      </>
                    )}
                    {mobileResolved && (
                      <div className="reply">
                        <strong>
                          {mobileResolved === "yes"
                            ? "Mobile or meeting problem solved"
                            : "IT support required"}
                        </strong>
                        <p>
                          {mobileResolved === "yes"
                            ? "Your work app, device or meeting service is working normally again."
                            : "IT may need to check company device enrolment, application access, licences or meeting policies."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "data-storage" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Which file, storage or backup problem are you having?
                </div>
                {!dataProblem ? (
                  <div className="choice-list">
                    <button type="button" onClick={() => setDataProblem("deleted")}>
                      I deleted a file by mistake
                    </button>
                    <button type="button" onClick={() => setDataProblem("corrupt")}>
                      A file is corrupted, will not open or a drive is missing
                    </button>
                    <button type="button" onClick={() => setDataProblem("storage")}>
                      My computer storage is full
                    </button>
                    <button type="button" onClick={() => setDataProblem("backup")}>
                      I see a backup warning or error
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">
                      {dataProblem === "deleted"
                        ? "I deleted a file by mistake"
                        : dataProblem === "corrupt"
                          ? "A file is damaged or a drive is missing"
                          : dataProblem === "storage"
                            ? "My computer storage is full"
                            : "I see a backup error"}
                    </div>
                    <div className="fix-card">
                      <p className="step-label">Safe data check</p>
                      <h3>
                        {dataProblem === "deleted"
                          ? "Look for a recoverable copy"
                          : dataProblem === "corrupt"
                            ? "Protect the original before recovery"
                            : dataProblem === "storage"
                              ? "Free space without deleting company data"
                              : "Record the backup error safely"}
                      </h3>
                      <ol>
                        {dataProblem === "deleted" ? (
                          <>
                            <li>Check the Recycle Bin or Trash.</li>
                            <li>Check your company cloud storage deleted items and version history.</li>
                            <li>Do not overwrite a file with the same name; IT can check approved backups.</li>
                          </>
                        ) : dataProblem === "corrupt" ? (
                          <>
                            <li>If possible, make a copy and do not overwrite the original file.</li>
                            <li>Try the application&apos;s Open and Repair option or cloud version history.</li>
                            <li>If a drive is missing, making noises or contains critical data, stop using the device and contact IT.</li>
                          </>
                        ) : dataProblem === "storage" ? (
                          <>
                            <li>Check the storage warning and which approved folders use the most space.</li>
                            <li>Remove only files you recognise from Downloads or approved temporary locations.</li>
                            <li>Move work files only to approved company cloud or network storage.</li>
                          </>
                        ) : (
                          <>
                            <li>Record the exact backup error and the time it appeared.</li>
                            <li>Check that internet access and the approved backup destination are available.</li>
                            <li>Do not disable backup, reformat a drive or run repair commands; IT should review the logs.</li>
                          </>
                        )}
                      </ol>
                      {!dataStepsDone && (
                        <button type="button" onClick={() => setDataStepsDone(true)}>
                          I have tried this
                        </button>
                      )}
                    </div>
                    {dataStepsDone && !dataResolved && (
                      <>
                        <div className="chat-bubble second-question">
                          Is the file, storage or backup problem resolved?
                        </div>
                        <div className="answer-buttons">
                          <button type="button" onClick={() => setDataResolved("yes")}>
                            Yes
                          </button>
                          <button type="button" onClick={() => setDataResolved("no")}>
                            No
                          </button>
                        </div>
                      </>
                    )}
                    {dataResolved && (
                      <div className="reply">
                        <strong>
                          {dataResolved === "yes"
                            ? "File or storage problem solved"
                            : "IT or data-recovery support required"}
                        </strong>
                        <p>
                          {dataResolved === "yes"
                            ? "Your file, storage or backup service is working normally again."
                            : "Stop making changes if important data is missing or damaged. IT can check backups, storage health and safe recovery options."}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            ) : issueCategory === "security" ? (
              <>
                <div className="chat-bubble">
                  Hello {employeeName}. Select the urgent security problem.
                </div>
                {!securityIncident ? (
                  <div className="choice-list emergency-choices">
                    <button type="button" onClick={() => setSecurityIncident("ransomware")}>
                      Ransom note or encrypted files
                    </button>
                    <button type="button" onClick={() => setSecurityIncident("phishing")}>
                      I clicked a suspicious link or attachment
                    </button>
                    <button type="button" onClick={() => setSecurityIncident("lost-device")}>
                      Company device is lost or stolen
                    </button>
                    <button type="button" onClick={() => setSecurityIncident("suspicious-login")}>
                      Unrecognised or suspicious account login
                    </button>
                  </div>
                ) : (
                  <div className="emergency-card" role="alert">
                    <p className="step-label">Immediate escalation</p>
                    <h3>Contact IT Support or Security immediately</h3>
                    <p>
                      Do not continue normal troubleshooting. Tell the security
                      team which incident you selected and follow their
                      instructions.
                    </p>
                    <strong>
                      {securityIncident === "ransomware"
                        ? "Disconnect the affected device from Wi-Fi or the network. Do not pay or respond to the ransom message."
                        : securityIncident === "phishing"
                          ? "Do not click anything else. Tell IT what you clicked and whether you entered any information."
                          : securityIncident === "lost-device"
                            ? "Report when and where the device was last seen so IT can lock its company access."
                            : "Do not approve unexpected login or MFA requests. Contact IT from a trusted device."}
                    </strong>
                    <button
                      type="button"
                      onClick={() =>
                        createTicket("Urgent security incident", "Critical")
                      }
                    >
                      Create urgent security ticket
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
            <div className="chat-bubble">
              Hello {employeeName}. I understand you are having a Wi-Fi
              problem. Is Wi-Fi switched on?
            </div>

            {!wifiAnswer ? (
              <div className="answer-buttons">
                <button type="button" onClick={() => setWifiAnswer("yes")}>
                  Yes
                </button>
                <button type="button" onClick={() => setWifiAnswer("no")}>
                  No
                </button>
              </div>
            ) : wifiAnswer === "no" ? (
              <div className="reply">
                <strong>You selected: No</strong>
                <p>
                  Please switch Wi-Fi on in your device settings, then check
                  again.
                </p>
              </div>
            ) : (
              <>
                <div className="user-bubble">Yes</div>
                <div className="chat-bubble second-question">
                  Good. Can you see the company Wi-Fi network in the list of
                  available networks?
                </div>

                {!networkVisible ? (
                  <div className="answer-buttons">
                    <button
                      type="button"
                      onClick={() => setNetworkVisible("yes")}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setNetworkVisible("no")}
                    >
                      No
                    </button>
                  </div>
                ) : networkVisible === "no" ? (
                  <div className="reply">
                    <strong>You selected: No</strong>
                    <p>
                      The network may be out of range or unavailable. Chai will
                      check this next.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="user-bubble">Yes</div>
                    <div className="chat-bubble second-question">
                      What happens when you try to connect?
                    </div>

                    {!connectionIssue ? (
                      <div className="choice-list">
                        <button
                          type="button"
                          onClick={() => setConnectionIssue("password")}
                        >
                          Incorrect password
                        </button>
                        <button
                          type="button"
                          onClick={() => setConnectionIssue("cannot-connect")}
                        >
                          Cannot connect
                        </button>
                        <button
                          type="button"
                          onClick={() => setConnectionIssue("no-internet")}
                        >
                          Connected but no internet
                        </button>
                      </div>
                    ) : connectionIssue === "password" ? (
                      <>
                        <div className="user-bubble">Incorrect password</div>
                        <div className="security-note">
                          <strong>Security reminder</strong>
                          <span>
                            Never type or share your Wi-Fi password in this
                            chatbot.
                          </span>
                        </div>
                        <div className="fix-card">
                          <p className="step-label">Try this safe check</p>
                          <h3>Forget and reconnect to the network</h3>
                          <ol>
                            <li>Open your device&apos;s Wi-Fi settings.</li>
                            <li>Select the company network and choose Forget.</li>
                            <li>Select it again and enter the current password securely on your device.</li>
                          </ol>
                          {!passwordStepsDone && (
                            <button
                              type="button"
                              onClick={() => setPasswordStepsDone(true)}
                            >
                              I have tried this
                            </button>
                          )}
                        </div>

                        {passwordStepsDone && !passwordConnected && (
                          <>
                            <div className="chat-bubble second-question">
                              Can you connect now?
                            </div>
                            <div className="answer-buttons">
                              <button
                                type="button"
                                onClick={() => setPasswordConnected("yes")}
                              >
                                Yes
                              </button>
                              <button
                                type="button"
                                onClick={() => setPasswordConnected("no")}
                              >
                                No
                              </button>
                            </div>
                          </>
                        )}

                        {passwordConnected && (
                          <div className="reply">
                            <strong>
                              {passwordConnected === "yes"
                                ? "Problem solved"
                                : "Access help required"}
                            </strong>
                            <p>
                              {passwordConnected === "yes"
                                ? "The saved password was refreshed and the device is connected."
                                : "Do not keep guessing the password. Chai will send this to IT so they can verify your access safely."}
                            </p>
                          </div>
                        )}
                      </>
                    ) : connectionIssue === "no-internet" ? (
                      <>
                        <div className="user-bubble">
                          Connected but no internet
                        </div>
                        <div className="fix-card">
                          <p className="step-label">Try this safe check</p>
                          <h3>Reconnect the Wi-Fi</h3>
                          <ol>
                            <li>Switch Wi-Fi off on your device.</li>
                            <li>Wait for 10 seconds.</li>
                            <li>Switch Wi-Fi back on and reconnect.</li>
                          </ol>
                          {!wifiRestarted && (
                            <button
                              type="button"
                              onClick={() => setWifiRestarted(true)}
                            >
                              I have done this
                            </button>
                          )}
                        </div>

                        {wifiRestarted && !internetWorking && (
                          <>
                            <div className="chat-bubble second-question">
                              Is the internet working now?
                            </div>
                            <div className="answer-buttons">
                              <button
                                type="button"
                                onClick={() => setInternetWorking("yes")}
                              >
                                Yes
                              </button>
                              <button
                                type="button"
                                onClick={() => setInternetWorking("no")}
                              >
                                No
                              </button>
                            </div>
                          </>
                        )}

                        {internetWorking === "yes" && (
                          <div className="reply">
                            <strong>Problem solved</strong>
                            <p>Your Wi-Fi connection is working again.</p>
                          </div>
                        )}

                        {internetWorking === "no" && (
                          <>
                            <div className="user-bubble">No</div>
                            <div className="chat-bubble second-question">
                              Can another device connect to the same Wi-Fi?
                            </div>

                            {!otherDeviceWorking ? (
                              <div className="answer-buttons">
                                <button
                                  type="button"
                                  onClick={() => setOtherDeviceWorking("yes")}
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setOtherDeviceWorking("no")}
                                >
                                  No
                                </button>
                              </div>
                            ) : (
                              <>
                              <div className="reply">
                                <strong>
                                  {otherDeviceWorking === "yes"
                                    ? "Device-specific problem"
                                    : "Possible network outage"}
                                </strong>
                                <p>
                                  {otherDeviceWorking === "yes"
                                    ? "Other devices are online, so Chai will continue checking this device."
                                    : "Several devices are affected. This should be reported to the IT team as a network problem."}
                                </p>
                              </div>
                              {otherDeviceWorking === "no" && !ticketId && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    createTicket("Possible Wi-Fi network outage", "High")
                                  }
                                >
                                  Create support ticket
                                </button>
                              )}
                              {otherDeviceWorking === "no" && ticketId && (
                                <section className="ticket-card">
                                  <div className="ticket-heading">
                                    <span>Ticket created</span>
                                    <strong>{ticketId}</strong>
                                  </div>
                                  <dl>
                                    <div>
                                      <dt>Employee</dt>
                                      <dd>{employeeName}</dd>
                                    </div>
                                    <div>
                                      <dt>Department</dt>
                                      <dd>{department}</dd>
                                    </div>
                                    <div>
                                      <dt>Issue</dt>
                                      <dd>{ticketIssue}</dd>
                                    </div>
                                    <div>
                                      <dt>Priority</dt>
                                      <dd className="priority">{ticketPriority}</dd>
                                    </div>
                                    <div>
                                      <dt>Status</dt>
                                      <dd>Open — sent to IT team</dd>
                                    </div>
                                  </dl>
                                </section>
                              )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="user-bubble">Cannot connect</div>
                        <div className="fix-card">
                          <p className="step-label">Connection check</p>
                          <h3>Refresh the wireless connection</h3>
                          <ol>
                            <li>Check that Airplane mode is switched off.</li>
                            <li>Switch Wi-Fi off, wait 10 seconds, then switch it on.</li>
                            <li>Select the company network and try to connect again.</li>
                          </ol>
                          {!connectionStepsDone && (
                            <button
                              type="button"
                              onClick={() => setConnectionStepsDone(true)}
                            >
                              I have tried this
                            </button>
                          )}
                        </div>

                        {connectionStepsDone && !connectionRestored && (
                          <>
                            <div className="chat-bubble second-question">
                              Can the device connect now?
                            </div>
                            <div className="answer-buttons">
                              <button
                                type="button"
                                onClick={() => setConnectionRestored("yes")}
                              >
                                Yes
                              </button>
                              <button
                                type="button"
                                onClick={() => setConnectionRestored("no")}
                              >
                                No
                              </button>
                            </div>
                          </>
                        )}

                        {connectionRestored && (
                          <div className="reply">
                            <strong>
                              {connectionRestored === "yes"
                                ? "Problem solved"
                                : "Technician support required"}
                            </strong>
                            <p>
                              {connectionRestored === "yes"
                                ? "The wireless connection has been restored."
                                : "The basic checks did not solve the problem. Chai recommends escalating this device to IT support."}
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
              </>
            )}
          </section>
        )}

        <p className="emergency-note">
          For urgent security incidents, contact the IT service desk directly.
        </p>
      </section>
      ) : (
        <section className="dashboard-shell">
          <div className="dashboard-title">
            <div>
              <p className="eyebrow">Technician view</p>
              <h1>Support dashboard</h1>
              <p>Review and prioritise employee IT requests.</p>
            </div>
            <span className="demo-label">Portfolio demonstration</span>
          </div>

          <div className="dashboard-stats">
            <article>
              <strong>{ticketId && ticketStatus === "Open" ? 3 : 2}</strong>
              <span>Open tickets</span>
            </article>
            <article>
              <strong>{ticketId && ticketStatus !== "Resolved" ? 2 : 1}</strong>
              <span>High priority</span>
            </article>
            <article>
              <strong>{ticketId && ticketStatus === "In progress" ? 2 : 1}</strong>
              <span>In progress</span>
            </article>
          </div>

          <section className="ticket-table-card">
            <div className="table-heading">
              <h2>Current tickets</h2>
              <span>{ticketId ? 3 : 2} results</span>
            </div>
            <div className="ticket-row ticket-row-head">
              <span>Ticket</span><span>Employee</span><span>Issue</span>
              <span>Priority</span><span>Status</span>
            </div>
            {ticketId && (
              <div className="ticket-row">
                <strong>{ticketId}</strong><span>{employeeName}</span>
                <span>{ticketIssue}</span>
                <span className="badge badge-high">{ticketPriority}</span>
                <select
                  className={`status-select status-${ticketStatus.toLowerCase().replace(" ", "-")}`}
                  value={ticketStatus}
                  onChange={(event) =>
                    setTicketStatus(
                      event.target.value as "Open" | "In progress" | "Resolved",
                    )
                  }
                  aria-label={`Change status of ${ticketId}`}
                >
                  <option>Open</option>
                  <option>In progress</option>
                  <option>Resolved</option>
                </select>
              </div>
            )}
            <div className="ticket-row">
              <strong>CHAI-1042</strong><span>Maya Patel</span>
              <span>Unable to print</span>
              <span className="badge badge-medium">Medium</span>
              <span className="badge badge-progress">In progress</span>
            </div>
            <div className="ticket-row">
              <strong>CHAI-1038</strong><span>Daniel Green</span>
              <span>Account locked</span>
              <span className="badge badge-high">High</span>
              <span className="badge badge-open">Open</span>
            </div>
          </section>
        </section>
      )}
    </main>
  );
}
