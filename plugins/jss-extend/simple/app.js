// Styles
var styles = {
  button: {
    'font-size': '20px'
  },
  redButton: {
    extend: 'button',
    background: 'red'
  }
}

// JSS Setup
jss.default.use(jssExtend.default())
var sheet = jss.default.createStyleSheet(styles).attach()

// Application logic
document.body.innerHTML = '<button class="'+ sheet.classes.redButton +'">Button</button>'
