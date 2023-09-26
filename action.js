const core = require('@actions/core');

try {
  const message = core.getInput('message');
  console.log(`Custom Action: ${message}`);
  core.setOutput('message', message);
} catch (error) {
  core.setFailed(error.message);
}
