/* App Thu Chi — landing page
   ────────────────────────────────────────────────────────────
   BA THU CAN SUA KHI DOI DOT BAN — chi sua 3 dong ngay duoi day:
     ZALO      : so dien thoai Zalo nhan don
     DEADLINE  : luc het uu dai (nam, thang 1-12, ngay, gio, phut)
     SLOTS_LEFT: so suat con lai hien tren trang
   Sua xong: git commit + git push la Vercel tu deploy lai.
   ──────────────────────────────────────────────────────────── */

var ZALO = '0392774522';
var DEADLINE = new Date(2026, 7, 1, 23, 59); // thang 7 = THANG 8 (JS dem tu 0) -> 01/08/2026 23:59
var SLOTS_LEFT = 50;

// ---------- Gan so Zalo vao moi nut CTA ----------
var zaloUrl = 'https://zalo.me/' + ZALO;
document.querySelectorAll('a.js-zalo').forEach(function (a) {
  a.href = zaloUrl;
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('.js-phone').forEach(function (el) { el.textContent = ZALO; });

// ---------- So suat con lai ----------
var slotEls = [document.getElementById('slotsLeft')].concat(
  Array.prototype.slice.call(document.querySelectorAll('.js-slots'))
);
slotEls.forEach(function (el) { if (el) el.textContent = SLOTS_LEFT; });

// ---------- Dem nguoc ----------
var cdEls = [document.getElementById('countdown')].concat(
  Array.prototype.slice.call(document.querySelectorAll('.js-countdown'))
).filter(Boolean);
var daysEl = document.getElementById('daysLeft');
var statusEl = document.getElementById('offerStatus');

function tick() {
  var left = DEADLINE - new Date();

  if (left <= 0) {
    cdEls.forEach(function (el) { el.textContent = 'đã kết thúc'; });
    if (daysEl && daysEl.parentElement) {
      daysEl.parentElement.innerHTML = '🔔 Đợt 1 đã đóng — nhắn Zalo để giữ chỗ đợt sau';
    }
    document.querySelectorAll('.final-note').forEach(function (el) {
      el.textContent = 'Đợt 1 đã đóng — nhắn Zalo để giữ chỗ đợt sau.';
    });
    if (statusEl) {
      statusEl.className = 'price-foot offer-closed';
      statusEl.innerHTML = 'Đợt mở bán đầu tiên đã kết thúc — nhắn Zalo để được báo khi mở đợt tiếp theo.';
    }
    clearInterval(timer);
    return;
  }

  var s = Math.floor(left / 1000);
  var d = Math.floor(s / 86400);
  var h = Math.floor((s % 86400) / 3600);
  var m = Math.floor((s % 3600) / 60);
  var sec = s % 60;

  var text = d > 0 ? d + ' ngày ' + h + ' giờ ' + m + ' phút'
                   : h + ' giờ ' + m + ' phút ' + sec + ' giây';
  cdEls.forEach(function (el) { el.textContent = text; });
  if (daysEl) daysEl.textContent = d > 0 ? d : '<1';
}

tick();
var timer = setInterval(tick, 1000);

// ---------- Bo anh man hinh: bam tab de doi anh ----------
var tabs = document.querySelectorAll('.shot-tab');
var panels = document.querySelectorAll('.shot-panel');

tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var name = tab.dataset.shot;
    tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
    panels.forEach(function (p) { p.classList.toggle('is-active', p.dataset.panel === name); });
  });
});
