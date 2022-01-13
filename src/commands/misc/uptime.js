module.exports = {
    name: 'uptime',
    code: 
    `
    I have been online for: $djsEval["$uptime[humanize]".split(" ").slice(0,-1).join(" ");yes].
    `
  }
