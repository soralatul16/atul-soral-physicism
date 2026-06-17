#!/bin/bash
FILE="dp-student-dashboard.html"

# 1. Add modal HTML after the confirmOverlay closing div
sed -i '' '/<!-- OFFLINE OVERLAY -->/i\
\
<!-- HW ONLINE\/OFFLINE CHOICE MODAL -->\
<div class="confirm-overlay" id="hwChoiceOverlay">\
  <div class="confirm-modal" style="max-width:420px">\
    <h3 style="margin-bottom:4px">How would you like to attempt this?</h3>\
    <p id="hwChoiceTitle" style="font-size:.82rem;color:var(--text2);margin-bottom:18px"><\/p>\
    <div style="display:flex;flex-direction:column;gap:10px">\
      <button class="btn btn-primary" id="hwOnlineBtn" style="padding:14px 20px;font-size:.88rem;border-radius:10px">\
        Attempt Online<br><span style="font-size:.72rem;font-weight:400;opacity:.85">AI-graded within 24 hours. You will be notified with detailed feedback.<\/span>\
      <\/button>\
      <button class="btn btn-outline" id="hwOfflineBtn" style="padding:14px 20px;font-size:.88rem;border-radius:10px;border:2px solid var(--border)">\
        Attempt Offline<br><span style="font-size:.72rem;font-weight:400;opacity:.7">Complete on paper. Will NOT be graded online.<\/span>\
      <\/button>\
    <\/div>\
    <button class="btn btn-outline" onclick="closeHwChoice()" style="margin-top:14px;font-size:.78rem">Cancel<\/button>\
  <\/div>\
<\/div>\
' "$FILE"

# 2. Replace the hw direct-start with modal call
sed -i '' 's/if (a.type === '\''hw'\'') {/if (a.type === '\''hw'\'') {\
    showHwChoiceModal(a, attemptNumber); return;/' "$FILE"

# 3. Remove the old proceedToStartTask(a, attemptNumber); line right after
sed -i '' '/showHwChoiceModal(a, attemptNumber); return;/{n;/proceedToStartTask(a, attemptNumber);/d;}' "$FILE"

echo "✅ Modal HTML added and startTask patched"
