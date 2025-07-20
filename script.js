const tabs = document.querySelectorAll('.tab');
const codeInputs = document.querySelectorAll('.code-input');
const preview = document.getElementById('preview');
const deviceFrame = document.getElementById('deviceFrame');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    codeInputs.forEach(input => input.classList.remove('active'));

    tab.classList.add('active');
    const lang = tab.getAttribute('data-lang');
    document.getElementById(lang).classList.add('active');
  });
});

codeInputs.forEach(input => {
  input.addEventListener('input', updatePreview);
});

function updatePreview() {
  const html = document.getElementById('html').value;
  const css = `<style>${document.getElementById('css').value}</style>`;
  const js = `<script>${document.getElementById('js').value}<\/script>`;
  const output = `${html}\n${css}\n${js}`;
  preview.srcdoc = output;
}

function setSize(device) {
  deviceFrame.className = `device-frame ${device}`;
}

// Initial load
updatePreview();
