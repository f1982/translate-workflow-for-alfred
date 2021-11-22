import alfy from "alfy";

// this means it running outside of the alfred
// don't output any information inside the alfred env
function log(...rest) {
  if (!process.env.alfred_version) {
    console.log('dev log: ', ...rest);
  }
}

export { log };
