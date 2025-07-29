function logEvent(type, event) {
  fetch('http://localhost:3000/api/mouseEvents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ time: Date.now(), type, event })
  });
}

function getEventTarget(event) {
  const attributesAsJson = {};
  Array.from(event.target.attributes).forEach(attribute => {
    attributesAsJson[attribute.name] = attribute.value;
  });
  return {
    tagName: event.target.tagName,
    attributes: attributesAsJson,
    clientRect: event.target.getBoundingClientRect()
  }
}

document.addEventListener('mousemove', (event) => {
  logEvent('mousemove', {
    button: event.button, 
    clientX: event.clientX, 
    clietnY: event.clientY, 
    target: getEventTarget(event)
  });
});

document.addEventListener('click', (event) => {
  logEvent('click', {
    button: event.button, 
    clientX: event.clientX, 
    clietnY: event.clientY, 
    target: getEventTarget(event)
  });
});

document.addEventListener('mousedown', (event) => {
  logEvent('mousedown', {
    button: event.button, 
    clientX: event.clientX, 
    clietnY: event.clientY, 
    target: getEventTarget(event)
  });
});

document.addEventListener('mouseup', (event) => {
  logEvent('mouseup', {
    button: event.button, 
    clientX: event.clientX, 
    clietnY: event.clientY, 
    target: getEventTarget(event)
  });
});

document.addEventListener('mouseenter', (event) => {
  logEvent('mouseenter', {
    button: event.button, 
    clientX: event.clientX, 
    clietnY: event.clientY, 
    target: getEventTarget(event)
  });
});

document.addEventListener('mouseleave', (event) => {
  logEvent('mouseleave', {
    button: event.button, 
    clientX: event.clientX, 
    clietnY: event.clientY, 
    target: getEventTarget(event)
  });
});

document.addEventListener('contextmenu', (event) => {
  logEvent('contextmenu', {
    button: event.button, 
    clientX: event.clientX, 
    clietnY: event.clientY, 
    target: getEventTarget(event)
  });
});