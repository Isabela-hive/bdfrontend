let backendUrl = "http://localhost:2000/";
let c = {
  bu: backendUrl,
  async get(url) {
    let f = await fetch(`${backendUrl}${url}`);
    return f;
  },
};
export default c;
