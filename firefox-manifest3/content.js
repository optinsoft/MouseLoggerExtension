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

function logEvent(type, event) {
  const target = getEventTarget(event);
  fetch('http://localhost:3000/api/mouseEvents', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      time: Date.now(), 
      type, 
      event: {
        button: event.button,
        clientX: event.clientX,
        clientY: event.clientY,
        targetX: event.clientX-target.clientRect.left,
        targetY: event.clientY-target.clientRect.top
      },
      target
    })
  });
}

document.addEventListener('mousemove', (event) => {
  logEvent('mousemove', event);
});

document.addEventListener('click', (event) => {
  logEvent('click', event);
});

document.addEventListener('mousedown', (event) => {
  logEvent('mousedown', event);
});

document.addEventListener('mouseup', (event) => {
  logEvent('mouseup', event);
});

document.addEventListener('mouseenter', (event) => {
  logEvent('mouseenter', event);
});

document.addEventListener('mouseleave', (event) => {
  logEvent('mouseleave', event);
});

document.addEventListener('contextmenu', (event) => {
  logEvent('contextmenu', event);
});