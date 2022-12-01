(function () {
  const fontLink = document.createElement('link')
  fontLink.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"
  fontLink.rel = 'stylesheet'
  fontLink.media = 'print'
  fontLink.onload = function () {
    this.media = 'all'
  }
  if (/android/i.test(navigator.userAgent)) {
    document.head.appendChild(fontLink)
  }
})()