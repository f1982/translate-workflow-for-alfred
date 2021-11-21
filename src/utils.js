
// this means it running outside of the alfred
function log(...rest) {
  if (!process.env.alfred_version) {
    console.log('dev log: ', ...rest);
  }
}

export { log };
