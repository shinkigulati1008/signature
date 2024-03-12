document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("signatureCanvas");
    const ctx = canvas.getContext("2d");
    let isDrawing = false;

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }

    function draw(e) {
      if (!isDrawing) return;

      ctx.lineWidth = 3;
      ctx.lineJoin = 'round';
      ctx.lineCap = "round";
      ctx.strokeStyle = "#000";

      ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    }

    function stopDrawing() {
      isDrawing = false;
      ctx.beginPath();
    }

  window.clearSignature = function clearSignature() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  window.saveSignature = function saveSignature() {
      var dataURL = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.href = dataURL;
      link.download = 'signature.png';
      link.click();
     };
  });