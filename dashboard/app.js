// Simple dashboard interactions and demo data rendering

// Sidebar toggle for small screens + overlay control
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function closeSidebar() {
  sidebar?.classList.remove('open');
  overlay?.classList.remove('show');
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
}
if (overlay) {
  overlay.addEventListener('click', closeSidebar);
}

// Close sidebar on ESC
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

// Demo KPI data
const kpis = {
  revenue: { value: 48200, delta: +12.4 },
  orders: { value: 1260, delta: +5.1 },
  users: { value: 892, delta: -1.8 },
};

const fmt = new Intl.NumberFormat('en-US');
const $ = (id) => document.getElementById(id);

function renderKpis() {
  $('kpiRevenue').textContent = `$${fmt.format(kpis.revenue.value)}`;
  $('kpiRevenueDelta').textContent = `${kpis.revenue.delta >= 0 ? '+' : ''}${kpis.revenue.delta}%`;
  $('kpiRevenueDelta').className = `kpi__delta ${kpis.revenue.delta >= 0 ? 'up' : 'down'}`;

  $('kpiOrders').textContent = fmt.format(kpis.orders.value);
  $('kpiOrdersDelta').textContent = `${kpis.orders.delta >= 0 ? '+' : ''}${kpis.orders.delta}%`;
  $('kpiOrdersDelta').className = `kpi__delta ${kpis.orders.delta >= 0 ? 'up' : 'down'}`;

  $('kpiUsers').textContent = fmt.format(kpis.users.value);
  $('kpiUsersDelta').textContent = `${kpis.users.delta >= 0 ? '+' : ''}${kpis.users.delta}%`;
  $('kpiUsersDelta').className = `kpi__delta ${kpis.users.delta >= 0 ? 'up' : 'down'}`;
}

// Demo Orders table
const orders = Array.from({ length: 7 }).map((_, i) => ({
  id: `#ORD-${1023 + i}`,
  customer: ['Alice', 'Bob', 'Charlie', 'Dina', 'Evan', 'Fay', 'Gus'][i],
  status: ['paid', 'pending', 'failed'][Math.floor(Math.random() * 3)],
  total: (50 + Math.random() * 450).toFixed(2),
}));

function renderOrders() {
  const tbody = document.getElementById('ordersBody');
  tbody.innerHTML = orders.map(o => `
    <tr>
      <td>${o.id}</td>
      <td>${o.customer}</td>
      <td><span class="status ${o.status}">${o.status}</span></td>
      <td>$${o.total}</td>
    </tr>
  `).join('');
}

// Simple bar chart without external libraries; responsive to container size
function renderChart() {
  const canvas = document.getElementById('salesChart');
  if (!canvas) return;
  const parent = canvas.parentElement;
  const cssWidth = parent ? parent.clientWidth - 32 : 800; // minus padding
  const cssHeight = 320;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(320, cssWidth) * ratio;
  canvas.height = cssHeight * ratio;
  canvas.style.width = Math.max(320, cssWidth) + 'px';
  canvas.style.height = cssHeight + 'px';

  const ctx = canvas.getContext('2d');
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const values = [12, 19, 8, 15, 22, 17, 26, 30];

  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dimensions
  const padding = 40;
  const chartW = canvas.width / ratio - padding * 2;
  const chartH = canvas.height / ratio - padding * 2;
  const max = Math.max(...values) * 1.2;
  const barW = chartW / values.length * 0.6;

  // Axes
  ctx.strokeStyle = 'rgba(229,231,235,0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, padding + chartH);
  ctx.lineTo(padding + chartW, padding + chartH);
  ctx.stroke();

  // Bars
  values.forEach((v, i) => {
    const x = padding + (chartW / values.length) * i + (chartW / values.length - barW) / 2;
    const h = (v / max) * chartH;
    const y = padding + chartH - h;

    // Bar
    const grad = ctx.createLinearGradient(0, y, 0, y + h);
    grad.addColorStop(0, '#22d3ee');
    grad.addColorStop(1, '#0ea5b7');

    ctx.fillStyle = grad;
    ctx.fillRect(x, y, barW, h);

    // Label
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px system-ui, -apple-system, Segoe UI, Roboto';
    ctx.textAlign = 'center';
    ctx.fillText(labels[i], x + barW / 2, padding + chartH + 14);
  });
}

renderKpis();
renderOrders();
renderChart();

// Redraw chart on resize
window.addEventListener('resize', () => {
  renderChart();
});