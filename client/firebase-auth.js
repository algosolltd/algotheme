// Shared Google sign-in helper for Algorithmica tools.
// Usage: <script type="module" src="/path/to/client/firebase-auth.js"></script>
// Requires the host app to expose GET /api/auth/firebase-config (public) and
// POST /api/auth/session { idToken } (creates the session).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const button = document.getElementById("alg-google");
const errorBox = document.getElementById("alg-error");

function showError(message) {
  if (!errorBox) return;
  errorBox.hidden = false;
  errorBox.textContent = message;
}

async function loadConfig() {
  const response = await fetch("/api/auth/firebase-config");
  if (!response.ok) throw new Error("Login Google non configurato");
  return response.json();
}

button?.addEventListener("click", async () => {
  button.disabled = true;
  if (errorBox) errorBox.hidden = true;
  try {
    const config = await loadConfig();
    const app = initializeApp(config);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
      hd: "algorithmicasolutions.com",
    });
    const result = await signInWithPopup(getAuth(app), provider);
    const idToken = await result.user.getIdToken(true);
    const response = await fetch("/api/auth/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    });
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body?.error?.message ?? "Account non autorizzato");
    }
    window.location.href = "/";
  } catch (error) {
    showError(error instanceof Error ? error.message : "Accesso Google non riuscito. Riprova.");
    button.disabled = false;
  }
});
