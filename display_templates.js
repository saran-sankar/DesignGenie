const fetchTemplates = async () => {
    const response = await fetch('http://localhost:5000/templates');
    const templates = await response.json();
    return templates;
};

const downloadHTML = (template) => {
  // create a blob of the HTML content
  const blob = new Blob([template.html], { type: 'text/html' });

  // create a temporary download link and click it to initiate download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${template.name}.html`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const renderTemplate = (template) => {
    const container = document.createElement('div');
    container.classList.add('template-box');
    const html = document.createElement('div');
    html.innerHTML = template.html;
    container.appendChild(html);
    // create download button
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download';
    downloadButton.onclick = () => {
    downloadHTML(template);
    };
    container.appendChild(downloadButton);
    return container;
};

const renderTemplates = async () => {
    const templates = await fetchTemplates();
    const container = document.getElementById('templates-container');
    container.innerHTML = '';
    templates.templates.forEach((template) => {
        const templateElement = renderTemplate(template);
        container.appendChild(templateElement);
    });
};

(async () => {
    const templates = await fetchTemplates();
    renderTemplates(templates);
})();