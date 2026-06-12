/* ═══════════════════════════════════════════════════
   PHYSICISM — Firebase Configuration
   Project: soral-atul-physicism
═══════════════════════════════════════════════════ */

const firebaseConfig = {
  apiKey: "AIzaSyCLw65yB0sPSf5lgSkom27PTN4DrS1CBFc",
  authDomain: "soral-atul-physicism.firebaseapp.com",
  projectId: "soral-atul-physicism",
  storageBucket: "soral-atul-physicism.firebasestorage.app",
  messagingSenderId: "466087894566",
  appId: "1:466087894566:web:61b4a05cfb97c8594d90e7"
};

// Initialize Firebase (only once)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Global references
const auth = firebase.auth();
const db   = firebase.firestore();
const fns  = typeof firebase.functions === 'function' ? firebase.functions() : null;

// Fix for WebChannel connection errors on some networks
db.settings({
  experimentalForceLongPolling: true,
  useFetchStreams: false
});

window.auth = auth;
window.db   = db;
window.fns  = fns;

console.log('🔥 Firebase initialized — project:', firebaseConfig.projectId);

// Global WhatsApp routing to prevent "Download WhatsApp" page on desktop
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (link && link.href) {
    let phone = null;
    let text = "";
    
    if (link.href.includes('wa.me/')) {
      const parts = link.href.split('wa.me/')[1].split('?');
      phone = parts[0];
      if (parts[1]) {
        const params = new URLSearchParams(parts[1]);
        if (params.get('text')) text = params.get('text');
      }
    } else if (link.href.includes('api.whatsapp.com/send')) {
      const urlParams = new URLSearchParams(link.search);
      if (urlParams.get('phone')) phone = urlParams.get('phone');
      if (urlParams.get('text')) text = urlParams.get('text');
    }
    
    if (phone) {
      e.preventDefault();
      phone = phone.replace(/[^0-9]/g, '');
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      let targetUrl = isMobile 
        ? `https://wa.me/${phone}` 
        : `https://web.whatsapp.com/send?phone=${phone}`;
        
      if (text) {
        targetUrl += isMobile ? `?text=${encodeURIComponent(text)}` : `&text=${encodeURIComponent(text)}`;
      }
      
      window.open(targetUrl, '_blank');
    }
  }
});
